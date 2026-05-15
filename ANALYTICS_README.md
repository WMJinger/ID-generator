# 数据分析系统

为 ID Generator 项目添加的数据分析和埋点系统。

## 功能特性

- **页面访问统计**：自动记录所有页面的访问次数
- **点击事件追踪**：可追踪用户的点击行为
- **工具使用统计**：记录各工具的生成、验证、复制操作
- **数据可视化面板**：直观展示统计数据
- **趋势分析**：查看最近7天的访问趋势

## 项目结构

```
.
├── server/                 # 后端服务
│   ├── package.json      # 后端依赖配置
│   └── index.js        # 后端服务入口
├── src/
│   ├── utils/
│   │   └── analytics.ts  # 前端埋点 SDK
│   ├── views/
│   │   └── AdminDashboard.vue  # 管理后台页面
│   └── components/
│       └── Header.vue  # 更新的头部组件（添加了管理后台入口）
└── .env                # 环境变量配置
```

## 快速开始

### 1. 安装后端依赖

```bash
cd server
npm install
```

### 2. 启动后端服务

```bash
cd server
npm run dev
```

后端服务将在 http://localhost:3000 启动

### 3. 启动前端服务

在项目根目录执行：

```bash
npm run dev
```

### 4. 访问管理后台

在浏览器中访问 http://localhost:5173/admin 即可查看数据统计面板。

## API 接口文档

### 页面访问记录

**POST** `/api/analytics/page-view`

请求体：
```json
{
  "pageName": "home",
  "userAgent": "Mozilla/5.0...",
  "referrer": "https://..."
}
```

### 点击事件记录

**POST** `/api/analytics/click`

请求体：
```json
{
  "eventName": "button_click",
  "elementId": "generate-btn",
  "elementClass": "btn-primary",
  "pageName": "idCardGenerator",
  "userAgent": "...",
  "referrer": "..."
}
```

### 工具使用记录

**POST** `/api/analytics/tool-use`

请求体：
```json
{
  "toolName": "idCard",
  "actionType": "generate",
  "userAgent": "...",
  "referrer": "..."
}
```

### 获取统计数据

**GET** `/api/analytics/dashboard`

响应：
```json
{
  "pageViews": 100,
  "clickEvents": 200,
  "toolUses": 150,
  "toolStats": [
    { "tool_name": "idCard", "count": 80 },
    { "tool_name": "phoneNumber", "count": 40 }
  ],
  "pageStats": [
    { "page_name": "home", "count": 60 },
    { "page_name": "idCardGenerator", "count": 40 }
  ],
  "pageViewTrend": [
    { "date": "2024-01-01", "count": 10 },
    { "date": "2024-01-02", "count": 15 }
  ],
  "toolUseTrend": [
    { "date": "2024-01-01", "count": 8 },
    { "date": "2024-01-02", "count": 12 }
  ]
}
```

## 前端 SDK 使用

### 基础用法

```typescript
import analytics from '@/utils/analytics';

// 记录页面访问
analytics.trackPageView('pageName');

// 记录点击事件
analytics.trackClick('eventName', 'elementId', 'elementClass');

// 记录工具使用
analytics.trackToolUse('toolName', 'actionType');

// 获取统计数据
const data = await analytics.getDashboardData();
```

## 数据库

系统使用 SQLite 存储数据，数据库文件会在 `server/analytics.db` 自动创建。

## 技术栈

- **后端**：Node.js + Express + SQLite
- **前端**：Vue 3 + TypeScript + Element Plus
