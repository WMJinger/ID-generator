import { NextResponse } from 'next/server';
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
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
    writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
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
  writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

function getCurrentDateTime() {
  return new Date().toISOString();
}

export async function POST(request) {
  initData();
  
  try {
    const body = await request.json();
    
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
    
    console.log('Tool use tracked:', body.toolName, body.actionType);
    return NextResponse.json({ success: true, id: newToolUse.id });
  } catch (error) {
    console.error('Error tracking tool use:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
