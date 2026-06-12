export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body || {};
  const newToolUse = {
    id: Date.now(),
    toolName: body.toolName,
    actionType: body.actionType,
    userAgent: body.userAgent,
    referrer: body.referrer,
    createdAt: new Date().toISOString()
  };

  res.status(200).json({ success: true, id: newToolUse.id });
}
