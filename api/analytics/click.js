export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body || {};
  const newClick = {
    id: Date.now(),
    eventName: body.eventName,
    elementId: body.elementId,
    elementClass: body.elementClass,
    pageName: body.pageName,
    userAgent: body.userAgent,
    referrer: body.referrer,
    createdAt: new Date().toISOString()
  };

  res.status(200).json({ success: true, id: newClick.id });
}
