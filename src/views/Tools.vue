<template>
  <div class="tools-page" itemscope itemtype="https://schema.org/WebPage">
    <Header :currentCountry="currentCountry" @change="handleCountryChange" />
    
    <main class="main-content" role="main">
      <section class="page-header" aria-labelledby="page-title">
        <div class="breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList">
          <span itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <a href="/" itemprop="item"><span itemprop="name">{{ t('home', currentCountry) }}</span></a>
            <meta itemprop="position" content="1" />
          </span>
          <span class="breadcrumb-separator">/</span>
          <span itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem" class="breadcrumb-current">
            <span itemprop="name">{{ t('tools', currentCountry) }}</span>
            <meta itemprop="position" content="2" />
          </span>
        </div>
        
        <h1 id="page-title" class="page-title" itemprop="headline">
          <span class="title-icon">🛠️</span>
          {{ t('onlineTools', currentCountry) }}
        </h1>
        <p class="page-description" itemprop="description">
          {{ t('selectTool', currentCountry) }}
        </p>
      </section>

      <section class="tools-section" aria-labelledby="tools-list-title">
        <h2 id="tools-list-title" class="section-title">
          <span class="section-icon">📦</span>
          {{ t('allTools', currentCountry) }}
        </h2>
        
        <div class="tools-grid">
          <router-link 
            to="/tools/id-card-generator" 
            class="tool-card" 
            itemscope 
            itemtype="https://schema.org/SoftwareApplication"
          >
            <div class="tool-icon">🆔</div>
            <h3 class="tool-name" itemprop="name">{{ t('idCard', currentCountry) }}{{ currentCountry === 'CN' ? '号码生成器' : ' Generator' }}</h3>
            <p class="tool-description" itemprop="description">{{ t('idCardToolDescription', currentCountry) }}</p>
            <div class="tool-tags">
              <span class="tag">{{ currentCountry === 'CN' ? '中国' : currentCountry === 'US' ? 'US' : currentCountry === 'JP' ? '日本' : 'UK' }}</span>
              <span class="tag">{{ t('batchGeneration', currentCountry) }}</span>
            </div>
            <span class="tool-arrow">→</span>
          </router-link>

          <router-link 
            to="/tools/phone-number-generator" 
            class="tool-card"
            itemscope 
            itemtype="https://schema.org/SoftwareApplication"
          >
            <div class="tool-icon">📱</div>
            <h3 class="tool-name" itemprop="name">{{ t('phoneNumber', currentCountry) }}{{ currentCountry === 'CN' ? '生成器' : ' Generator' }}</h3>
            <p class="tool-description" itemprop="description">{{ t('phoneToolDescription', currentCountry) }}</p>
            <div class="tool-tags">
              <span class="tag">{{ currentCountry === 'CN' ? '多国家' : 'Multi-country' }}</span>
              <span class="tag">{{ currentCountry === 'CN' ? '号段选择' : 'Prefix' }}</span>
            </div>
            <span class="tool-arrow">→</span>
          </router-link>

          <router-link 
            to="/tools/bank-card-generator" 
            class="tool-card"
            itemscope 
            itemtype="https://schema.org/SoftwareApplication"
          >
            <div class="tool-icon">💳</div>
            <h3 class="tool-name" itemprop="name">{{ t('bankCard', currentCountry) }}{{ currentCountry === 'CN' ? '生成器' : ' Generator' }}</h3>
            <p class="tool-description" itemprop="description">{{ t('bankCardToolDescription', currentCountry) }}</p>
            <div class="tool-tags">
              <span class="tag">Luhn</span>
              <span class="tag">{{ currentCountry === 'CN' ? '多卡种' : 'Multi-card' }}</span>
            </div>
            <span class="tool-arrow">→</span>
          </router-link>

          <router-link 
            to="/tools/organization-code-generator" 
            class="tool-card"
            itemscope 
            itemtype="https://schema.org/SoftwareApplication"
          >
            <div class="tool-icon">🏢</div>
            <h3 class="tool-name" itemprop="name">{{ t('organizationCode', currentCountry) }}{{ currentCountry === 'CN' ? '生成器' : ' Generator' }}</h3>
            <p class="tool-description" itemprop="description">{{ t('orgCodeToolDescription', currentCountry) }}</p>
            <div class="tool-tags">
              <span class="tag">GB 11714</span>
              <span class="tag">9 {{ currentCountry === 'CN' ? '位代码' : 'digits' }}</span>
            </div>
            <span class="tool-arrow">→</span>
          </router-link>

          <router-link 
            to="/tools/social-credit-code-generator" 
            class="tool-card"
            itemscope 
            itemtype="https://schema.org/SoftwareApplication"
          >
            <div class="tool-icon">📋</div>
            <h3 class="tool-name" itemprop="name">{{ currentCountry === 'CN' ? '统一社会信用代码' : currentCountry === 'JP' ? '法人番号' : 'Credit Code' }}{{ currentCountry === 'CN' ? '生成器' : ' Generator' }}</h3>
            <p class="tool-description" itemprop="description">{{ t('creditCodeToolDescription', currentCountry) }}</p>
            <div class="tool-tags">
              <span class="tag">GB 32100</span>
              <span class="tag">18 {{ currentCountry === 'CN' ? '位代码' : 'digits' }}</span>
            </div>
            <span class="tool-arrow">→</span>
          </router-link>
        </div>
      </section>

      <section class="features-section" aria-labelledby="features-title">
        <h2 id="features-title" class="section-title">
          <span class="section-icon">✨</span>
          {{ t('coreFeatures', currentCountry) }}
        </h2>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3 class="feature-title">{{ t('privacyProtection', currentCountry) }}</h3>
            <p class="feature-description">{{ t('dataSecurityDesc', currentCountry) }}</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3 class="feature-title">{{ t('fastGeneration', currentCountry) }}</h3>
            <p class="feature-description">{{ t('fastResponseDesc', currentCountry) }}</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">✅</div>
            <h3 class="feature-title">{{ t('compliantWithStandards', currentCountry) }}</h3>
            <p class="feature-description">{{ t('compliantWithStandardsDesc', currentCountry) }}</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🌍</div>
            <h3 class="feature-title">{{ t('multiLanguageSupport', currentCountry) }}</h3>
            <p class="feature-description">{{ t('multiLanguageSupportDesc', currentCountry) }}</p>
          </div>
        </div>
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
.tools-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
}

.main-content {
  flex: 1;
  max-width: 1200px;
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

.tools-section,
.features-section {
  margin-bottom: 60px;
}

.section-title {
  font-size: 1.6rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.section-icon {
  font-size: 1.4rem;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.tool-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 24px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
    border-color: #409EFF;
    
    .tool-arrow {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

.tool-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.tool-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 8px;
}

.tool-description {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 12px;
}

.tool-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  background: rgba(64, 158, 255, 0.2);
  color: #409EFF;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
}

.tool-arrow {
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateX(-10px);
  color: #409EFF;
  font-size: 1.2rem;
  opacity: 0;
  transition: all 0.3s ease;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.feature-title {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.feature-description {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  line-height: 1.5;
}

.footer {
  background: rgba(0, 0, 0, 0.3);
  padding: 40px 20px;
  margin-top: 40px;
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
  
  .tools-grid {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>