import axios from 'axios';

const API_BASE_URL = '/api';

const analyticsClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

class Analytics {
  private userAgent: string;
  private referrer: string;
  private currentPage: string = '';

  constructor() {
    this.userAgent = navigator.userAgent;
    this.referrer = document.referrer;
  }

  setCurrentPage(pageName: string) {
    this.currentPage = pageName;
  }

  async trackPageView(pageName: string) {
    try {
      this.setCurrentPage(pageName);
      await analyticsClient.post('/analytics/page-view', {
        pageName,
        userAgent: this.userAgent,
        referrer: this.referrer,
      });
    } catch (error) {
      console.error('Failed to track page view:', error);
    }
  }

  async trackClick(eventName: string, elementId?: string, elementClass?: string) {
    try {
      await analyticsClient.post('/analytics/click', {
        eventName,
        elementId,
        elementClass,
        pageName: this.currentPage,
        userAgent: this.userAgent,
        referrer: this.referrer,
      });
    } catch (error) {
      console.error('Failed to track click:', error);
    }
  }

  async trackToolUse(toolName: string, actionType: string) {
    try {
      await analyticsClient.post('/analytics/tool-use', {
        toolName,
        actionType,
        userAgent: this.userAgent,
        referrer: this.referrer,
      });
    } catch (error) {
      console.error('Failed to track tool use:', error);
    }
  }

  async getDashboardData(params?: { range?: string; startDate?: string; endDate?: string }) {
    try {
      const queryParams: Record<string, string> = {};
      
      if (params?.range) {
        queryParams.range = params.range;
      } else if (params?.startDate && params?.endDate) {
        queryParams.startDate = params.startDate;
        queryParams.endDate = params.endDate;
      }
      
      const response = await analyticsClient.get('/analytics/dashboard', { params: queryParams });
      return response.data;
    } catch (error) {
      console.error('Failed to get dashboard data:', error);
      throw error;
    }
  }
}

export default new Analytics();
