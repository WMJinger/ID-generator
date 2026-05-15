import { NextResponse } from 'next/server';
import { writeFile, readFile, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const DATA_DIR = join(process.cwd(), '.vercel', 'analytics');
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
    writeFile(DATA_FILE, JSON.stringify(initialData, null, 2), (err) => {
      if (err) console.error('Error creating data file:', err);
    });
  }
}

function readData() {
  try {
    return JSON.parse(readFileSync(DATA_FILE, 'utf-8'));
  } catch {
    return { pageViews: [], clickEvents: [], toolUses: [] };
  }
}

function writeData(data) {
  initData();
  writeFile(DATA_FILE, JSON.stringify(data, null, 2), (err) => {
    if (err) console.error('Error writing data:', err);
  });
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

export async function GET(request) {
  initData();
  
  try {
    const { searchParams } = new URL(request.url);
    const data = readData();
    
    let startDate, endDate;
    
    if (searchParams.get('startDate') && searchParams.get('endDate')) {
      startDate = searchParams.get('startDate');
      endDate = searchParams.get('endDate');
    } else if (searchParams.get('range')) {
      const range = getDateRange(searchParams.get('range'));
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
    
    return NextResponse.json({
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
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  initData();
  
  const { pathname } = new URL(request.url);
  
  try {
    const body = await request.json();
    
    if (pathname.includes('/page-view')) {
      const data = readData();
      const newPageView = {
        id: Date.now(),
        pageName: body.pageName,
        userAgent: body.userAgent,
        referrer: body.referrer,
        createdAt: getCurrentDateTime()
      };
      data.pageViews.push(newPageView);
      writeData(data);
      return NextResponse.json({ success: true, id: newPageView.id });
    }
    
    if (pathname.includes('/click')) {
      const data = readData();
      const newClick = {
        id: Date.now(),
        eventName: body.eventName,
        elementId: body.elementId,
        elementClass: body.elementClass,
        pageName: body.pageName,
        userAgent: body.userAgent,
        referrer: body.referrer,
        createdAt: getCurrentDateTime()
      };
      data.clickEvents.push(newClick);
      writeData(data);
      return NextResponse.json({ success: true, id: newClick.id });
    }
    
    if (pathname.includes('/tool-use')) {
      const data = readData();
      const newToolUse = {
        id: Date.now(),
        toolName: body.toolName,
        actionType: body.actionType,
        userAgent: body.userAgent,
        referrer: body.referrer,
        createdAt: getCurrentDateTime()
      };
      data.toolUses.push(newToolUse);
      writeData(data);
      return NextResponse.json({ success: true, id: newToolUse.id });
    }
    
    return NextResponse.json({ error: 'Unknown endpoint' }, { status: 404 });
  } catch (error) {
    console.error('Error tracking event:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
