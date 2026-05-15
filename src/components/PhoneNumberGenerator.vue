<template>
  <div class="generator-card">
    <h2 class="card-title">{{ t('generatePhoneTitle', currentCountry) }}</h2>

    <el-form label-position="top" class="generator-form">
      <el-form-item>
        <el-button type="primary" @click="generate" style="width: 48%;">
          <el-icon><Refresh /></el-icon>
          {{ t('generate', currentCountry) }}
        </el-button>
        <el-button @click="validate" style="width: 48%">
          <el-icon><Check /></el-icon>
          {{ t('validate', currentCountry) }}
        </el-button>
      </el-form-item>

      <el-form-item :label="t('phoneNumber', currentCountry)">
        <el-input v-model="result" :placeholder="t('phonePlaceholder', currentCountry)" readonly>
          <template #append>
            <el-button @click="copyResult"><el-icon><DocumentCopy /></el-icon></el-button>
          </template>
        </el-input>
      </el-form-item>

      <el-alert v-if="validationResult" :type="validationResult === 'valid' ? 'success' : 'error'" :title="validationResult === 'valid' ? t('valid', currentCountry) : t('invalid', currentCountry)" :closable="false" />
    </el-form>

    <el-divider />
    <p class="hint">{{ t('hintIdCard', currentCountry) }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { t } from '@/utils/language';
import {
  generateMobileCN,
  validateMobileCN,
  generateMobileUS,
  validateMobileUS,
  generateMobileJP,
  validateMobileJP
} from '@/utils/generator';
import { Refresh, Check, DocumentCopy } from '@element-plus/icons-vue';
import analytics from '@/utils/analytics';

const props = defineProps<{
  currentCountry: string;
}>();

const result = ref('');
const validationResult = ref<'valid' | 'invalid' | null>(null);

function generate() {
  validationResult.value = null;

  switch (props.currentCountry) {
    case 'CN':
      result.value = generateMobileCN();
      break;
    case 'US':
      result.value = generateMobileUS();
      break;
    case 'JP':
      result.value = generateMobileJP();
      break;
    case 'GB':
      result.value = generateMobileUS();
      break;
  }
  analytics.trackToolUse('phoneNumber', 'generate');
}

function validate() {
  if (!result.value) return;

  let isValid = false;

  switch (props.currentCountry) {
    case 'CN':
      isValid = validateMobileCN(result.value);
      break;
    case 'US':
      isValid = validateMobileUS(result.value);
      break;
    case 'JP':
      isValid = validateMobileJP(result.value);
      break;
    case 'GB':
      isValid = validateMobileUS(result.value);
      break;
  }

  validationResult.value = isValid ? 'valid' : 'invalid';
  analytics.trackToolUse('phoneNumber', 'validate');
}

async function copyResult() {
  if (result.value) {
    await navigator.clipboard.writeText(result.value);
    ElMessage.success(t('copySuccess', props.currentCountry));
    analytics.trackToolUse('phoneNumber', 'copy');
  }
}
</script>

<style lang="scss" scoped>
.generator-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 24px;
  text-align: center;
}

.generator-form {
  max-width: 600px;
  margin: 0 auto;
}

.hint {
  font-size: 12px;
  color: #999;
  text-align: center;
}
</style>