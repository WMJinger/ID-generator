import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import analytics from "@/utils/analytics";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    meta: {
      title: "ID Generator - 在线测试数据生成工具",
      description: "专业的在线ID生成器工具，支持身份证号码、手机号码、银行卡号等批量生成",
      pageName: "home"
    }
  },
  {
    path: "/tools",
    name: "tools",
    component: () => import("@/views/Tools.vue"),
    meta: {
      title: "在线工具 - ID Generator",
      description: "ID Generator提供的所有在线工具列表",
      pageName: "tools"
    }
  },
  {
    path: "/tools/id-card-generator",
    name: "idCardGenerator",
    component: () => import("@/views/IdCardGenerator.vue"),
    meta: {
      title: "身份证号码生成器 - 免费在线生成身份证号码",
      description: "免费在线身份证号码生成器，支持批量生成，保护隐私，安全可靠",
      pageName: "idCardGenerator"
    }
  },
  {
    path: "/tools/phone-number-generator",
    name: "phoneNumberGenerator",
    component: () => import("@/views/PhoneNumberGenerator.vue"),
    meta: {
      title: "手机号码生成器 - 免费在线生成手机号码",
      description: "免费在线手机号码生成器，支持中国大陆、美国、日本、英国手机号码生成",
      pageName: "phoneNumberGenerator"
    }
  },
  {
    path: "/tools/bank-card-generator",
    name: "bankCardGenerator",
    component: () => import("@/views/BankCardGenerator.vue"),
    meta: {
      title: "银行卡号生成器 - 免费在线生成银行卡号",
      description: "免费在线银行卡号生成器，支持Visa、MasterCard、银联等多种卡种",
      pageName: "bankCardGenerator"
    }
  },
  {
    path: "/tools/organization-code-generator",
    name: "organizationCodeGenerator",
    component: () => import("@/views/OrganizationCodeGenerator.vue"),
    meta: {
      title: "组织机构代码生成器 - 免费在线生成组织机构代码",
      description: "免费在线组织机构代码生成器，符合GB 11714标准",
      pageName: "organizationCodeGenerator"
    }
  },
  {
    path: "/tools/social-credit-code-generator",
    name: "socialCreditCodeGenerator",
    component: () => import("@/views/SocialCreditCodeGenerator.vue"),
    meta: {
      title: "统一社会信用代码生成器 - 免费在线生成社会信用代码",
      description: "免费在线统一社会信用代码生成器，符合GB 32100-2015标准",
      pageName: "socialCreditCodeGenerator"
    }
  },
  {
    path: "/privacy-policy",
    name: "privacyPolicy",
    component: () => import("@/views/PrivacyPolicy.vue"),
    meta: {
      title: "隐私政策 - ID Generator",
      description: "ID Generator隐私政策，保护您的个人信息安全",
      pageName: "privacyPolicy"
    }
  },
  {
    path: "/terms-of-service",
    name: "termsOfService",
    component: () => import("@/views/TermsOfService.vue"),
    meta: {
      title: "服务条款 - ID Generator",
      description: "ID Generator服务条款，使用须知",
      pageName: "termsOfService"
    }
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue"),
    meta: {
      title: "关于我们 - ID Generator",
      description: "ID Generator简介，专业的在线测试数据生成工具",
      pageName: "about"
    }
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/views/AdminDashboard.vue"),
    meta: {
      title: "管理后台 - ID Generator",
      description: "ID Generator数据分析管理后台",
      pageName: "admin"
    }
  }
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }
  next();
});

router.afterEach((to) => {
  if (to.meta.pageName) {
    analytics.trackPageView(to.meta.pageName as string);
  }
});