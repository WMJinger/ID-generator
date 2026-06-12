export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const now = new Date();
  const last7Days = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    last7Days.push(date.toISOString().split('T')[0]);
  }

  res.status(200).json({
    pageViews: 128,
    clickEvents: 356,
    toolUses: 89,
    toolStats: [
      { tool_name: '身份证生成器', count: 45 },
      { tool_name: '手机号生成器', count: 28 },
      { tool_name: '银行卡生成器', count: 16 }
    ],
    pageStats: [
      { page_name: '首页', count: 64 },
      { page_name: '工具列表', count: 32 },
      { page_name: '身份证生成器', count: 24 },
      { page_name: '管理后台', count: 8 }
    ],
    actionStats: [
      { action_type: '生成', count: 65 },
      { action_type: '复制', count: 18 },
      { action_type: '下载', count: 6 }
    ],
    pageViewTrend: last7Days.map(date => ({
      date,
      count: Math.floor(Math.random() * 20) + 10
    })),
    toolUseTrend: last7Days.map(date => ({
      date,
      count: Math.floor(Math.random() * 10) + 5
    }))
  });
}
