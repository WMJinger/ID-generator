import { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import { join } from 'path';

const DATA_FILE = join(process.cwd(), 'server', 'analytics-data.json');

function initData() {
  if (!fs.existsSync(DATA_FILE)) {
    const initialData = {
      pageViews: [],
      clickEvents: [],
      toolUses: []
    };
    fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
  }
}

function readData() {
  initData();
  const data = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(data);
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

function getCurrentDateTime() {
  return new Date().toISOString();
}

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { toolName, actionType, userAgent, referrer } = req.body;
  const ip = req.headers['x-forwarded-for'] || req.connection?.remoteAddress || 'unknown';

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
    res.json({ success: true, id: newToolUse.id });
  } catch (error) {
    console.error('Error tracking tool use:', error);
    res.status(500).json({ error: error.message });
  }
}