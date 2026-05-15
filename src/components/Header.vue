<template>
  <header class="header">
    <div class="header-content">
      <router-link to="/" class="title-link">
        <h1 class="title">{{ t('title', currentCountry) }}</h1>
      </router-link>
      <div class="country-selector">
        <el-select v-model="selectedCountry" @change="handleCountryChange" placeholder="Select Country">
          <el-option
            v-for="country in countries"
            :key="country.code"
            :label="`${country.flag} ${country.nameEn}`"
            :value="country.code"
          />
        </el-select>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { countries } from '@/data/regions';
import { t } from '@/utils/language';

const props = defineProps<{
  currentCountry: string;
}>();

const emit = defineEmits<{
  (e: 'change', country: string): void;
}>();

const selectedCountry = ref(props.currentCountry);

function handleCountryChange() {
  emit('change', selectedCountry.value);
}

watch(() => props.currentCountry, (newVal) => {
  selectedCountry.value = newVal;
});
</script>

<style lang="scss" scoped>
.header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  padding: 16px 24px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-link {
  text-decoration: none;
}

.title {
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
}

.country-selector {
  width: 200px;
}
</style>