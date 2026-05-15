import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

const DATA_FILE = join(__dirname, 'analytics-data.json');

function initData() {
  if (!fs.existsSync(DATA_FILE)) {
    const initialData = {
      pageViews: [],
      clickEvents: [],
      toolUses: []
    };
    fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
    console.log('Created new analytics data file');
  } else {
    console.log('Analytics data file found');
  }
}

function readData() {
  const data = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(data);
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

function getCurrentDateTime() {
  return new Date().toISOString();
}

function getDateRange(range) {
  const now = new Date();
  let startDate = new Date();
  
  switch(range) {
    case '7d':
      startDate.setDate(now.getDate() - 7);
      break;
    case '30d':
      startDate.setDate(now.getDate() - 30);
      break;
    case '90d':
      startDate.setDate(now.getDate() - 90);
      break;
    case '6m':
      startDate.setMonth(now.getMonth() - 6);
      break;
    default:
      startDate.setDate(now.getDate() - 7);
  }
  
  return { start: startDate.toISOString().split('T')[0], end: now.toISOString().split('T')[0] };
}

function filterByDate(items, startDate, endDate) {
  return items.filter(item => {
    const itemDate = item.createdAt.split('T')[0];
    return itemDate >= startDate && itemDate <= endDate;
  });
}

initData();

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Analytics server is running',
    timestamp: new Date().toISOString()
  });
});

app.post('/api/analytics/page-view', (req, res) => {
  const { pageName, userAgent, referrer } = req.body;
  const ip = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
  try {
    const data = readData();
    const newPageView = {
      id: Date.now(),
      pageName,
      userAgent,
      referrer,
      ip,
      createdAt: getCurrentDateTime()
    };
    data.pageViews.push(newPageView);
    writeData(data);
    console.log('Page view tracked:', pageName);
    res.json({ success: true, id: newPageView.id });
  } catch (error) {
    console.error('Error tracking page view:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/analytics/click', (req, res) => {
  const { eventName, elementId, elementClass, pageName, userAgent, referrer } = req.body;
  const ip = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
  try {
    const data = readData();
    const newClick = {
      id: Date.now(),
      eventName,
      elementId,
      elementClass,
      pageName,
      userAgent,
      referrer,
      ip,
      createdAt: getCurrentDateTime()
    };
    data.clickEvents.push(newClick);
    writeData(data);
    console.log('Click tracked:', eventName);
    res.json({ success: true, id: newClick.id });
  } catch (error) {
    console.error('Error tracking click:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/analytics/tool-use', (req, res) => {
  const { toolName, actionType, userAgent, referrer } = req.body;
  const ip = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
  try {
    const data = readData();
    const newToolUse = {
      id: Date.now(),
      toolName,
      actionType,
      userAgent,
      referrer,
      ip,
      createdAt: getCurrentDateTime()
    };
    data.toolUses.push(newToolUse);
    writeData(data);
    console.log('Tool use tracked:', toolName, actionType);
    res.json({ success: true, id: newToolUse.id });
  } catch (error) {
    console.error('Error tracking tool use:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/analytics/dashboard', (req, res) => {
  try {
    const data = readData();
    
    let startDate, endDate;
    
    if (req.query.startDate && req.query.endDate) {
      startDate = req.query.startDate;
      endDate = req.query.endDate;
    } else if (req.query.range) {
      const range = getDateRange(req.query.range);
      startDate = range.start;
      endDate = range.end;
    } else {
      const range = getDateRange('7d');
      startDate = range.start;
      endDate = range.end;
    }
    
    console.log(`Date range: ${startDate} - ${endDate}`);
    
    const filteredPageViews = filterByDate(data.pageViews, startDate, endDate);
    const filteredToolUses = filterByDate(data.toolUses, startDate, endDate);
    
    const pageViews = filteredPageViews.length;
    const clickEvents = filterByDate(data.clickEvents, startDate, endDate).length;
    const toolUses = filteredToolUses.length;
    
    const toolStatsMap = {};
    filteredToolUses.forEach(use => {
      toolStatsMap[use.toolName] = (toolStatsMap[use.toolName] || 0) + 1;
    });
    const toolStats = Object.entries(toolStatsMap)
      .map(([tool_name, count]) => ({ tool_name, count }))
      .sort((a, b) => b.count - a.count);
    
    const pageStatsMap = {};
    filteredPageViews.forEach(view => {
      pageStatsMap[view.pageName] = (pageStatsMap[view.pageName] || 0) + 1;
    });
    const pageStats = Object.entries(pageStatsMap)
      .map(([page_name, count]) => ({ page_name, count }))
      .sort((a, b) => b.count - a.count);
    
    const actionStatsMap = {};
    filteredToolUses.forEach(use => {
      actionStatsMap[use.actionType] = (actionStatsMap[use.actionType] || 0) + 1;
    });
    const actionStats = Object.entries(actionStatsMap)
      .map(([action_type, count]) => ({ action_type, count }))
      .sort((a, b) => b.count - a.count);
    
    const pageViewTrendMap = {};
    filteredPageViews.forEach(view => {
      const date = view.createdAt.split('T')[0];
      pageViewTrendMap[date] = (pageViewTrendMap[date] || 0) + 1;
    });
    const pageViewTrend = Object.entries(pageViewTrendMap)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => a.date.localeCompare(b.date));
    
    const toolUseTrendMap = {};
    filteredToolUses.forEach(use => {
      const date = use.createdAt.split('T')[0];
      toolUseTrendMap[date] = (toolUseTrendMap[date] || 0) + 1;
    });
    const toolUseTrend = Object.entries(toolUseTrendMap)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => a.date.localeCompare(b.date));
    
    console.log('Dashboard data fetched');
    res.json({
      pageViews,
      clickEvents,
      toolUses,
      toolStats,
      pageStats,
      actionStats,
      pageViewTrend,
      toolUseTrend
    });
  } catch (error) {
    console.error('Error fetching dashboard:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   Analytics server is running!                            ║
║                                                           ║
║   URL: http://localhost:${PORT}                              ║
║   Health check: http://localhost:${PORT}/api/health           ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
  `);
});
