import { promises as fs } from 'fs';
import { existsSync, mkdirSync } from 'fs';
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

async function writeData(data) {
  initData();
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}

function getCurrentDateTime() {
  return new Date().toISOString();
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body || {};
    const data = await readData();
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
    await writeData(data);

    res.status(200).json({ success: true, id: newClick.id });
  } catch (error) {
    console.error('Error tracking click:', error);
    res.status(500).json({ error: error.message });
  }
}
