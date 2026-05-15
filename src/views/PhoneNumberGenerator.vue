<template>
  <div class="generator-page" itemscope itemtype="https://schema.org/WebPage">
    <Header :currentCountry="currentCountry" @change="handleCountryChange" />
    
    <main class="main-content" role="main">
      <section class="page-header" aria-labelledby="page-title">
        <div class="breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList">
          <span itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <a href="/" itemprop="item"><span itemprop="name">{{ t('home', currentCountry) }}</span></a>
            <meta itemprop="position" content="1" />
          </span>
          <span class="breadcrumb-separator">/</span>
          <span itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <a href="/tools" itemprop="item"><span itemprop="name">{{ t('tools', currentCountry) }}</span></a>
            <meta itemprop="position" content="2" />
          </span>
          <span class="breadcrumb-separator">/</span>
          <span itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem" class="breadcrumb-current">
            <span itemprop="name">{{ t('phoneNumber', currentCountry) }}{{ currentCountry === 'CN' ? '生成器' : ' Generator' }}</span>
            <meta itemprop="position" content="3" />
          </span>
        </div>
        
        <h1 id="page-title" class="page-title" itemprop="headline">
          <span class="title-icon">📱</span>
          {{ t('phoneNumber', currentCountry) }}{{ currentCountry === 'CN' ? '生成器' : ' Generator' }}
        </h1>
        <p class="page-description" itemprop="description">
          {{ t('phoneGeneratorDescription', currentCountry) }}
        </p>
      </section>

      <section class="generator-section" aria-labelledby="generator-title">
        <PhoneNumberGeneratorComponent :currentCountry="currentCountry" />
      </section>
    </main>

    <footer class="footer" role="contentinfo">
      <div class="footer-content">
        <div class="footer-brand">
          <span class="footer-logo">{{ t('title', currentCountry) }}</span>
          <p class="footer-tagline">{{ t('footerTagline', currentCountry) }}</p>
        </div>
        
        <div class="footer-links">
          <h4 class="footer-links-title">{{ t('tools', currentCountry) }}</h4>
          <ul class="footer-links-list">
            <li><router-link to="/tools/id-card-generator">{{ t('idCard', currentCountry) }}{{ currentCountry === 'CN' ? '生成器' : '' }}</router-link></li>
            <li><router-link to="/tools/phone-number-generator">{{ t('phoneNumber', currentCountry) }}{{ currentCountry === 'CN' ? '生成器' : '' }}</router-link></li>
            <li><router-link to="/tools/bank-card-generator">{{ t('bankCard', currentCountry) }}{{ currentCountry === 'CN' ? '生成器' : '' }}</router-link></li>
            <li><router-link to="/tools/organization-code-generator">{{ t('organizationCode', currentCountry) }}</router-link></li>
            <li><router-link to="/tools/social-credit-code-generator">{{ currentCountry === 'CN' ? '社会信用代码' : 'Credit Code' }}</router-link></li>
          </ul>
        </div>
        
        <div class="footer-links">
          <h4 class="footer-links-title">{{ t('about', currentCountry) }}</h4>
          <ul class="footer-links-list">
            <li><router-link to="/about">{{ t('aboutUs', currentCountry) }}</router-link></li>
            <li><router-link to="/privacy-policy">{{ t('privacyPolicy', currentCountry) }}</router-link></li>
            <li><router-link to="/terms-of-service">{{ t('termsOfService', currentCountry) }}</router-link></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-copyright">
        <p>&copy; 2024 ID Generator. {{ t('allRightsReserved', currentCountry) }}.</p>
        <p class="footer-privacy-note">{{ t('virtualDataNote', currentCountry) }}</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Header from '@/components/Header.vue';
import PhoneNumberGeneratorComponent from '@/components/PhoneNumberGenerator.vue';
import { t } from '@/utils/language';

const currentCountry = ref('CN');

function handleCountryChange(country: string) {
  currentCountry.value = country;
  localStorage.setItem('preferredCountry', country);
}

onMounted(() => {
  const savedCountry = localStorage.getItem('preferredCountry');
  if (savedCountry) {
    currentCountry.value = savedCountry;
  }
});
</script>

<style lang="scss" scoped>
.generator-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
}

.main-content {
  flex: 1;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  width: 100%;
}

.page-header {
  margin-bottom: 40px;
  text-align: center;
}

.breadcrumb {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
  font-size: 0.9rem;
  
  a {
    color: #409EFF;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
}

.breadcrumb-separator {
  color: rgba(255, 255, 255, 0.4);
}

.breadcrumb-current {
  color: #fff;
  font-weight: 600;
}

.page-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.title-icon {
  font-size: 2rem;
}

.page-description {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
}

.generator-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.footer {
  background: rgba(0, 0, 0, 0.3);
  padding: 40px 20px;
  margin-top: 60px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}

.footer-logo {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(90deg, #409EFF, #67C23A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}

.footer-tagline {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

.footer-links-title {
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 12px;
}

.footer-links-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links-list li {
  margin-bottom: 8px;
}

.footer-links-list a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #409EFF;
  }
}

.footer-copyright {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.footer-copyright p {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.85rem;
  margin: 5px 0;
}

.footer-privacy-note {
  font-size: 0.75rem !important;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 1.8rem;
  }
  
  .generator-section {
    padding: 20px;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>