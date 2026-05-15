<template>
  <nav class="tab-nav">
    <el-menu
      mode="horizontal"
      :default-active="activeTab"
      @select="handleSelect"
      :ellipsis="false"
    >
      <el-menu-item v-for="tab in tabs" :key="tab.key" :index="tab.key">
        {{ t(tab.label, currentCountry) }}
      </el-menu-item>
    </el-menu>
  </nav>
</template>

<script setup lang="ts">
import { t } from '@/utils/language';

defineProps<{
  activeTab: string;
  currentCountry: string;
}>();

const emit = defineEmits<{
  (e: 'change', tab: string): void;
}>();

const tabs = [
  { key: 'idCard', label: 'idCard' },
  { key: 'organizationCode', label: 'organizationCode' },
  { key: 'socialCreditCode', label: 'socialCreditCode' },
  { key: 'phoneNumber', label: 'phoneNumber' },
  { key: 'bankCard', label: 'bankCard' },
];

function handleSelect(index: string) {
  emit('change', index);
}
</script>

<style lang="scss" scoped>
.tab-nav {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

:deep(.el-menu) {
  max-width: 1200px;
  margin: 0 auto;
  border: none;
  background: transparent;
}

:deep(.el-menu-item) {
  font-size: 16px;
  font-weight: 500;
  color: #666;
  border-bottom: 3px solid transparent;

  &:hover {
    background: rgba(102, 126, 234, 0.1);
    color: #667eea;
  }
}

:deep(.el-menu-item.is-active) {
  color: #667eea;
  border-bottom: 3px solid #667eea;
}
</style>