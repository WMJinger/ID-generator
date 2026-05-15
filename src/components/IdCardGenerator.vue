<template>
  <div class="generator-card">
    <h2 class="card-title">{{ t('generateIdCardTitle', currentCountry) }}</h2>

    <el-form label-position="top" class="generator-form">
      <el-form-item v-if="currentCountry === 'CN'" :label="t('location', currentCountry)">
        <el-row :gutter="12">
            <el-select 
            style="width: 120px;"
              v-model="provinceModel" 
              :placeholder="t('pleaseSelect', currentCountry)" 
              filterable
              :disabled="loadingProvince"
            >
              <el-option v-for="region in regionData" :key="region.name" :label="region.name" :value="region.name" />
            </el-select>
            <el-select 
            style="width: 120px;margin-left: 14px;"
              v-model="cityModel" 
              :placeholder="t('pleaseSelect', currentCountry)" 
              :disabled="!provinceModel || loadingCity"
              filterable
            >
              <el-option v-for="city in currentCities" :key="city.name" :label="city.name" :value="city.name" />
            </el-select>
            <el-select 
            style="width: 120px;margin-left: 14px;"
              v-model="districtModel" 
              :placeholder="t('pleaseSelect', currentCountry)" 
              :disabled="!cityModel || loadingDistrict"
              filterable
            >
              <el-option v-for="district in currentDistricts" :key="district.name" :label="district.name" :value="district.name" />
            </el-select>
        </el-row>
      </el-form-item>

      <el-form-item :label="t('birthday', currentCountry)">
        <el-date-picker
          v-model="birthday"
          type="date"
          :placeholder="t('birthday', currentCountry)"
          :max-date="new Date(maxDate)"
          :min-date="new Date(minDate)"
          format="YYYY-MM-DD"
          value-format="YYYY-MM-DD"
          style="width: 100%"
        />
      </el-form-item>

      <el-form-item :label="t('gender', currentCountry)">
        <el-radio-group v-model="gender">
          <el-radio value="male">{{ t('male', currentCountry) }}</el-radio>
          <el-radio value="female">{{ t('female', currentCountry) }}</el-radio>
        </el-radio-group>
      </el-form-item>

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

      <el-form-item :label="t('idCard', currentCountry)">
        <el-input v-model="result" :placeholder="t('idCardPlaceholder', currentCountry)" readonly>
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
import { ref, computed, watch, onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import { t } from '@/utils/language';
import { chinaRegionCodes } from '@/source/chinaRegion';
import {
  generateChineseIDCard,
  validateChineseIDCard,
  generateUSSSN,
  validateUSSSN,
  generateJapaneseMyNumber,
  validateJapaneseMyNumber,
  generateUKNationalInsurance,
  validateUKNationalInsurance
} from '@/utils/generator';
import { Refresh, Check, DocumentCopy } from '@element-plus/icons-vue';
import analytics from '@/utils/analytics';

const props = defineProps<{
  currentCountry: string;
}>();

interface RegionCode {
  code: string;
  name: string;
}

interface CityData {
  name: string;
  code: string;
  districts: RegionCode[];
}

interface ProvinceData {
  name: string;
  code: string;
  cities: CityData[];
}

const regionData = ref<ProvinceData[]>(chinaRegionCodes);
const provinceModel = ref('');
const cityModel = ref('');
const districtModel = ref('');
const birthday = ref('1990-01-01');
const gender = ref<'male' | 'female'>('male');
const result = ref('');
const validationResult = ref<'valid' | 'invalid' | null>(null);
const loadingProvince = ref(false);
const loadingCity = ref(false);
const loadingDistrict = ref(false);

const currentCities = computed(() => {
  if (!provinceModel.value) return [];
  const province = regionData.value.find((p: ProvinceData) => p.name === provinceModel.value);
  return province?.cities || [];
});

const currentDistricts = computed(() => {
  if (!cityModel.value) return [];
  const city = currentCities.value.find((c: CityData) => c.name === cityModel.value);
  return city?.districts || [];
});

const minDate = computed(() => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 120);
  return date.toISOString().split('T')[0];
});

const maxDate = computed(() => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 16);
  return date.toISOString().split('T')[0];
});

function setDefaultLocation() {
  if (regionData.value.length > 0) {
    provinceModel.value = regionData.value[0].name;
    if (regionData.value[0].cities.length > 0) {
      cityModel.value = regionData.value[0].cities[0].name;
      if (regionData.value[0].cities[0].districts.length > 0) {
        districtModel.value = regionData.value[0].cities[0].districts[0].name;
      }
    }
  }
}

watch(provinceModel, (newVal, oldVal) => {
  if (!newVal && oldVal) {
    setTimeout(() => {
      if (!provinceModel.value) {
        provinceModel.value = oldVal;
      }
    }, 0);
    return;
  }
  
  if (newVal) {
    cityModel.value = '';
    districtModel.value = '';
    const province = regionData.value.find((p: ProvinceData) => p.name === newVal);
    if (province && province.cities.length > 0) {
      setTimeout(() => {
        cityModel.value = province.cities[0].name;
        if (province.cities[0].districts.length > 0) {
          districtModel.value = province.cities[0].districts[0].name;
        }
      }, 50);
    }
  } else {
    if (regionData.value.length > 0) {
      setTimeout(() => {
        provinceModel.value = regionData.value[0].name;
      }, 50);
    }
  }
});

watch(cityModel, (newVal, oldVal) => {
  if (!newVal && oldVal && provinceModel.value) {
    setTimeout(() => {
      if (!cityModel.value) {
        cityModel.value = oldVal;
      }
    }, 0);
    return;
  }
  
  if (newVal && provinceModel.value) {
    districtModel.value = '';
    const province = regionData.value.find((p: ProvinceData) => p.name === provinceModel.value);
    const city = province?.cities.find((c: CityData) => c.name === newVal);
    if (city && city.districts.length > 0) {
      setTimeout(() => {
        districtModel.value = city.districts[0].name;
      }, 50);
    }
  } else if (!newVal && provinceModel.value) {
    const province = regionData.value.find((p: ProvinceData) => p.name === provinceModel.value);
    if (province && province.cities.length > 0) {
      setTimeout(() => {
        cityModel.value = province.cities[0].name;
      }, 50);
    }
  }
});

watch(districtModel, (newVal, oldVal) => {
  if (!newVal && oldVal && cityModel.value && provinceModel.value) {
    setTimeout(() => {
      if (!districtModel.value) {
        districtModel.value = oldVal;
      }
    }, 0);
    return;
  }
  
  if (!newVal && cityModel.value && provinceModel.value) {
    const province = regionData.value.find((p: ProvinceData) => p.name === provinceModel.value);
    const city = province?.cities.find((c: CityData) => c.name === cityModel.value);
    if (city && city.districts.length > 0) {
      setTimeout(() => {
        districtModel.value = city.districts[0].name;
      }, 50);
    }
  }
});

async function detectLocationByIP() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    if (data.country_code === 'CN' && data.region) {
      const province = regionData.value.find((p: ProvinceData) => 
        p.name.includes(data.region) || data.region.includes(p.name)
      );
      if (province) {
        provinceModel.value = province.name;
        if (data.city) {
          const city = province.cities.find((c: CityData) => 
            c.name.includes(data.city) || data.city.includes(c.name)
          );
          if (city) {
            cityModel.value = city.name;
            if (city.districts.length > 0) {
              districtModel.value = city.districts[0].name;
            }
          } else {
            if (province.cities.length > 0) {
              cityModel.value = province.cities[0].name;
              if (province.cities[0].districts.length > 0) {
                districtModel.value = province.cities[0].districts[0].name;
              }
            }
          }
        } else {
          if (province.cities.length > 0) {
            cityModel.value = province.cities[0].name;
            if (province.cities[0].districts.length > 0) {
              districtModel.value = province.cities[0].districts[0].name;
            }
          }
        }
        return;
      }
    }
  } catch (error) {
    console.log('IP detection failed, using default');
  }
  
  setDefaultLocation();
}

function generate() {
  validationResult.value = null;

  switch (props.currentCountry) {
    case 'CN': {
      result.value = generateChineseIDCard(
        provinceModel.value,
        cityModel.value,
        districtModel.value,
        birthday.value,
        gender.value
      );
      break;
    }
    case 'US':
      result.value = generateUSSSN();
      break;
    case 'JP':
      result.value = generateJapaneseMyNumber();
      break;
    case 'GB':
      result.value = generateUKNationalInsurance();
      break;
  }
  analytics.trackToolUse('idCard', 'generate');
}

function validate() {
  if (!result.value) return;

  let isValid = false;

  switch (props.currentCountry) {
    case 'CN':
      isValid = validateChineseIDCard(result.value);
      break;
    case 'US':
      isValid = validateUSSSN(result.value);
      break;
    case 'JP':
      isValid = validateJapaneseMyNumber(result.value);
      break;
    case 'GB':
      isValid = validateUKNationalInsurance(result.value);
      break;
  }

  validationResult.value = isValid ? 'valid' : 'invalid';
  analytics.trackToolUse('idCard', 'validate');
}

async function copyResult() {
  if (result.value) {
    await navigator.clipboard.writeText(result.value);
    ElMessage.success(t('copySuccess', props.currentCountry));
    analytics.trackToolUse('idCard', 'copy');
  }
}

watch(() => props.currentCountry, () => {
  provinceModel.value = '';
  cityModel.value = '';
  districtModel.value = '';
  result.value = '';
  validationResult.value = null;
  
  if (props.currentCountry === 'CN') {
    detectLocationByIP();
  }
});

onMounted(() => {
  if (props.currentCountry === 'CN') {
    detectLocationByIP();
  }
});
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