import { promises as fs } from 'fs';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const DATA_DIR = join('/tmp', 'analytics');
const DATA_FILE = join(DATA_DIR, 'analytics-data.json');

function initData() {
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!existsSync(DATA_FILE)) {
    const initialData = {
      pageViews: [],
      clickEvents: [],
      toolUses: []
    };
    require('fs').writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
  }
}

async function readData() {
  initData();
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return { pageViews: [], clickEvents: [], toolUses: [] };
  }
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

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = await readData();
    
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
    
    res.status(200).json({
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
}
