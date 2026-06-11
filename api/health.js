import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req, res) {
  res.status(200).json({ 
    status: 'ok', 
    message: 'Analytics server is running',
    timestamp: new Date().toISOString()
  });
}