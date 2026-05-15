<template>
  <div class="admin-dashboard">
    <div class="header">
      <h1>数据统计管理后台</h1>
      <div class="header-right">
        <div class="time-filter">
          <span class="filter-label">时间范围：</span>
          <el-select v-model="selectedTimeRange" @change="fetchDashboardData">
            <el-option label="近7天" value="7d" />
            <el-option label="近30天" value="30d" />
            <el-option label="近90天" value="90d" />
            <el-option label="近6个月" value="6m" />
            <el-option label="自定义" value="custom" />
          </el-select>
          <div v-if="selectedTimeRange === 'custom'" class="custom-date-picker">
            <el-date-picker
              v-model="startDate"
              type="date"
              placeholder="开始日期"
              @change="fetchDashboardData"
            />
            <span class="date-separator">至</span>
            <el-date-picker
              v-model="endDate"
              type="date"
              placeholder="结束日期"
              @change="fetchDashboardData"
            />
          </div>
        </div>
        <el-button @click="refreshData" :loading="loading">
          <el-icon><Refresh /></el-icon>
          刷新数据
        </el-button>
      </div>
    </div>

    <div class="stats-cards">
      <el-card class="stat-card">
        <div class="stat-content">
          <div class="stat-icon page-view">
            <el-icon><Document /></el-icon>
          </div>
          <div class="stat-info">
            <div class="stat-value">{{ dashboardData.pageViews || 0 }}</div>
            <div class="stat-label">页面访问量</div>
          </div>
        </div>
      </el-card>

      <el-card class="stat-card">
        <div class="stat-content">
          <div class="stat-icon click">
            <el-icon><Pointer /></el-icon>
          </div>
          <div class="stat-info">
            <div class="stat-value">{{ dashboardData.clickEvents || 0 }}</div>
            <div class="stat-label">点击事件数</div>
          </div>
        </div>
      </el-card>

      <el-card class="stat-card">
        <div class="stat-content">
          <div class="stat-icon tool-use">
            <el-icon><Tools /></el-icon>
          </div>
          <div class="stat-info">
            <div class="stat-value">{{ dashboardData.toolUses || 0 }}</div>
            <div class="stat-label">工具使用数</div>
          </div>
        </div>
      </el-card>
    </div>

    <div class="charts-section">
      <el-card class="chart-card">
        <template #header>
          <div class="card-header">
            <span>工具使用统计</span>
          </div>
        </template>
        <div class="chart-container">
          <div v-if="dashboardData.toolStats && dashboardData.toolStats.length > 0" class="tool-stats">
            <div v-for="stat in dashboardData.toolStats" :key="stat.tool_name" class="tool-stat-item">
              <div class="tool-name">{{ getToolLabel(stat.tool_name) }}</div>
              <div class="tool-bar-container">
                <div class="tool-bar" :style="{ width: getBarWidth(stat.count, maxToolCount) + '%' }"></div>
                <div class="tool-count">{{ stat.count }}</div>
              </div>
            </div>
          </div>
          <div v-else class="empty-state">暂无数据</div>
        </div>
      </el-card>

      <el-card class="chart-card">
        <template #header>
          <div class="card-header">
            <span>页面访问统计</span>
          </div>
        </template>
        <div class="chart-container">
          <div v-if="dashboardData.pageStats && dashboardData.pageStats.length > 0" class="page-stats">
            <div v-for="stat in dashboardData.pageStats" :key="stat.page_name" class="page-stat-item">
              <div class="page-name">{{ getPageLabel(stat.page_name) }}</div>
              <div class="page-bar-container">
                <div class="page-bar" :style="{ width: getBarWidth(stat.count, maxPageCount) + '%' }"></div>
                <div class="page-count">{{ stat.count }}</div>
              </div>
            </div>
          </div>
          <div v-else class="empty-state">暂无数据</div>
        </div>
      </el-card>
    </div>

    <div class="charts-section">
      <el-card class="chart-card full-width">
        <template #header>
          <div class="card-header">
            <span>访问量趋势</span>
            <div class="chart-tabs">
              <el-button 
                :class="{ active: trendType === 'page' }" 
                @click="trendType = 'page'; fetchDashboardData()"
              >页面访问</el-button>
              <el-button 
                :class="{ active: trendType === 'tool' }" 
                @click="trendType = 'tool'; fetchDashboardData()"
              >工具使用</el-button>
            </div>
          </div>
        </template>
        <div class="chart-container">
          <div v-if="currentTrendData && currentTrendData.length > 0" class="trend-chart">
            <div class="trend-labels">
              <div v-for="item in currentTrendData" :key="item.date" class="trend-label">
                {{ formatDate(item.date) }}
              </div>
            </div>
            <div class="trend-bars">
              <div v-for="item in currentTrendData" :key="item.date" class="trend-bar-item">
                <div class="trend-bar" :style="{ height: getTrendBarHeight(item.count, maxTrendCount) + '%' }"></div>
                <div class="trend-value">{{ item.count }}</div>
              </div>
            </div>
          </div>
          <div v-else class="empty-state">暂无数据</div>
        </div>
      </el-card>
    </div>

    <div class="charts-section">
      <el-card class="chart-card full-width">
        <template #header>
          <div class="card-header">
            <span>工具操作类型分布</span>
          </div>
        </template>
        <div class="chart-container">
          <div v-if="dashboardData.actionStats && dashboardData.actionStats.length > 0" class="action-pie-chart">
            <div class="pie-chart-container">
              <svg viewBox="0 0 200 200" class="pie-svg">
                <circle
                  v-for="(item, index) in pieSegments"
                  :key="item.action_type"
                  cx="100"
                  cy="100"
                  r="80"
                  :fill="item.color"
                  :stroke="item.color"
                  :stroke-width="2"
                  :stroke-dasharray="item.dashArray"
                  :stroke-dashoffset="item.dashOffset"
                  :transform="`rotate(-90 100 100)`"
                />
              </svg>
              <div class="pie-center">
                <div class="pie-total">{{ totalActions }}</div>
                <div class="pie-label">总操作</div>
              </div>
            </div>
            <div class="pie-legend">
              <div v-for="stat in dashboardData.actionStats" :key="stat.action_type" class="legend-item">
                <span class="legend-color" :style="{ background: getActionColor(stat.action_type) }"></span>
                <span class="legend-text">{{ getActionLabel(stat.action_type) }}</span>
                <span class="legend-count">{{ stat.count }} ({{ getActionPercentage(stat.count) }}%)</span>
              </div>
            </div>
          </div>
          <div v-else class="empty-state">暂无数据</div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import { Refresh, Document, Pointer, Tools } from '@element-plus/icons-vue';
import analytics from '@/utils/analytics';

const loading = ref(false);
const selectedTimeRange = ref('7d');
const startDate = ref('');
const endDate = ref('');
const trendType = ref('page');
const dashboardData = ref<any>({});

const maxToolCount = computed(() => {
  if (!dashboardData.value.toolStats) return 0;
  return Math.max(...dashboardData.value.toolStats.map((s: any) => s.count));
});

const maxPageCount = computed(() => {
  if (!dashboardData.value.pageStats) return 0;
  return Math.max(...dashboardData.value.pageStats.map((s: any) => s.count));
});

const maxTrendCount = computed(() => {
  const data = trendType.value === 'page' ? dashboardData.value.pageViewTrend : dashboardData.value.toolUseTrend;
  if (!data) return 0;
  return Math.max(...data.map((s: any) => s.count));
});

const currentTrendData = computed(() => {
  return trendType.value === 'page' ? dashboardData.value.pageViewTrend : dashboardData.value.toolUseTrend;
});

const totalActions = computed(() => {
  if (!dashboardData.value.actionStats) return 0;
  return dashboardData.value.actionStats.reduce((sum: number, stat: any) => sum + stat.count, 0);
});

const pieSegments = computed(() => {
  if (!dashboardData.value.actionStats || dashboardData.value.actionStats.length === 0) return [];
  
  const total = totalActions.value;
  if (total === 0) return [];
  
  const circumference = 2 * Math.PI * 80;
  let offset = 0;
  
  return dashboardData.value.actionStats.map((stat: any, index: number) => {
    const percentage = stat.count / total;
    const dashArray = `${percentage * circumference} ${circumference}`;
    const dashOffset = -offset;
    offset += percentage * circumference;
    
    const colors = ['#667eea', '#f093fb', '#4facfe'];
    return {
      ...stat,
      color: colors[index % colors.length],
      dashArray,
      dashOffset
    };
  });
});

const getToolLabel = (toolName: string) => {
  const labels: Record<string, string> = {
    'idCard': '身份证',
    'phoneNumber': '手机号',
    'bankCard': '银行卡',
    'organizationCode': '组织机构代码',
    'socialCreditCode': '社会信用代码'
  };
  return labels[toolName] || toolName;
};

const getPageLabel = (pageName: string) => {
  const labels: Record<string, string> = {
    'home': '首页',
    'tools': '工具列表',
    'idCardGenerator': '身份证生成器',
    'phoneNumberGenerator': '手机号生成器',
    'bankCardGenerator': '银行卡生成器',
    'organizationCodeGenerator': '组织机构代码生成器',
    'socialCreditCodeGenerator': '社会信用代码生成器',
    'about': '关于我们',
    'privacyPolicy': '隐私政策',
    'termsOfService': '服务条款',
    'admin': '管理后台'
  };
  return labels[pageName] || pageName;
};

const getActionLabel = (actionType: string) => {
  const labels: Record<string, string> = {
    'generate': '生成',
    'validate': '验证',
    'copy': '复制'
  };
  return labels[actionType] || actionType;
};

const getActionColor = (actionType: string) => {
  const colors: Record<string, string> = {
    'generate': '#667eea',
    'validate': '#f093fb',
    'copy': '#4facfe'
  };
  return colors[actionType] || '#909399';
};

const getActionPercentage = (count: number) => {
  const total = totalActions.value;
  if (total === 0) return 0;
  return ((count / total) * 100).toFixed(1);
};

const getBarWidth = (count: number, max: number) => {
  if (max === 0) return 0;
  return (count / max) * 100;
};

const getTrendBarHeight = (count: number, max: number) => {
  if (max === 0) return 0;
  return (count / max) * 100;
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return `${date.getMonth() + 1}/${date.getDate()}`;
};

const getTimeRangeParams = () => {
  if (selectedTimeRange.value === 'custom') {
    return {
      startDate: startDate.value,
      endDate: endDate.value
    };
  }
  return { range: selectedTimeRange.value };
};

const fetchDashboardData = async () => {
  loading.value = true;
  try {
    const params = getTimeRangeParams();
    const data = await analytics.getDashboardData(params);
    dashboardData.value = data;
  } catch (error) {
    ElMessage.error('获取数据失败，请确保后端服务已启动');
    console.error(error);
  } finally {
    loading.value = false;
  }
};

const refreshData = () => {
  fetchDashboardData();
};

onMounted(() => {
  fetchDashboardData();
});
</script>

<style lang="scss" scoped>
.admin-dashboard {
  min-height: 100vh;
  background: #f5f7fa;
  padding: 24px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h1 {
    margin: 0;
    font-size: 24px;
    color: #303133;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .time-filter {
    display: flex;
    align-items: center;
    gap: 12px;
    background: white;
    padding: 8px 16px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

    .filter-label {
      font-size: 14px;
      color: #606266;
    }

    .custom-date-picker {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-left: 8px;

      .date-separator {
        color: #909399;
      }
    }
  }
}

.stats-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 24px;
}

.stat-card {
  .stat-content {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .stat-icon {
    width: 64px;
    height: 64px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: white;

    &.page-view {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    &.click {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    }

    &.tool-use {
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    }
  }

  .stat-info {
    .stat-value {
      font-size: 32px;
      font-weight: 700;
      color: #303133;
    }

    .stat-label {
      font-size: 14px;
      color: #909399;
      margin-top: 4px;
    }
  }
}

.charts-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 24px;

  &:has(.full-width) {
    grid-template-columns: 1fr;
  }
}

.chart-card {
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 16px;

    .chart-tabs {
      display: flex;
      gap: 8px;

      button {
        padding: 4px 12px;
        font-size: 12px;
        border-radius: 4px;
        border: 1px solid #e4e7ed;
        background: white;
        color: #606266;
        cursor: pointer;
        transition: all 0.2s;

        &.active {
          background: #667eea;
          border-color: #667eea;
          color: white;
        }

        &:hover {
          border-color: #667eea;
          color: #667eea;
        }
      }
    }
  }

  .chart-container {
    min-height: 300px;
  }

  .empty-state {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    color: #909399;
  }
}

.tool-stats,
.page-stats {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.tool-stat-item,
.page-stat-item {
  .tool-name,
  .page-name {
    font-size: 14px;
    color: #606266;
    margin-bottom: 8px;
  }

  .tool-bar-container,
  .page-bar-container {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .tool-bar,
  .page-bar {
    height: 24px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    border-radius: 4px;
    min-width: 0;
    transition: width 0.3s ease;
  }

  .tool-count,
  .page-count {
    font-size: 14px;
    font-weight: 600;
    color: #303133;
    min-width: 40px;
  }
}

.trend-chart {
  .trend-labels {
    display: flex;
    justify-content: space-around;
    margin-bottom: 8px;
    font-size: 12px;
    color: #909399;
  }

  .trend-bars {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    height: 200px;
    border-left: 2px solid #e4e7ed;
    border-bottom: 2px solid #e4e7ed;
    padding-left: 20px;
    padding-bottom: 20px;
  }

  .trend-bar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .trend-bar {
    width: 40px;
    background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
    border-radius: 4px 4px 0 0;
    transition: height 0.3s ease;
  }

  .trend-value {
    font-size: 14px;
    font-weight: 600;
    color: #303133;
  }
}

.action-pie-chart {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;

  .pie-chart-container {
    position: relative;
    width: 200px;
    height: 200px;

    .pie-svg {
      transform: rotate(-90deg);
    }

    .pie-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;

      .pie-total {
        font-size: 28px;
        font-weight: 700;
        color: #303133;
      }

      .pie-label {
        font-size: 12px;
        color: #909399;
      }
    }
  }

  .pie-legend {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .legend-item {
      display: flex;
      align-items: center;
      gap: 12px;

      .legend-color {
        width: 16px;
        height: 16px;
        border-radius: 4px;
      }

      .legend-text {
        font-size: 14px;
        color: #606266;
        min-width: 40px;
      }

      .legend-count {
        font-size: 14px;
        font-weight: 600;
        color: #303133;
      }
    }
  }
}

@media (max-width: 768px) {
  .stats-cards {
    grid-template-columns: 1fr;
  }

  .charts-section {
    grid-template-columns: 1fr;
  }

  .header {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;

    .header-right {
      width: 100%;
      flex-direction: column;
      align-items: stretch;
    }

    .time-filter {
      flex-wrap: wrap;
    }
  }

  .action-pie-chart {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
