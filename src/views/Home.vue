<template>
  <div class="home" itemscope itemtype="https://schema.org/WebPage">
    <Header :currentCountry="currentCountry" @change="handleCountryChange" />

    <main class="main-content" role="main">
      <section class="hero" aria-labelledby="hero-title">
        <h1 id="hero-title" class="hero-title" itemprop="headline">
          <span class="logo-text">{{ t('title', currentCountry) }}</span>
          <span class="hero-subtitle">{{ t('subtitle', currentCountry) }}</span>
        </h1>
        <p class="hero-description" itemprop="description">
          {{ t('heroDescription', currentCountry) }}
        </p>
      </section>

      <section class="tools-section" aria-labelledby="tools-title">
        <h2 id="tools-title" class="section-title">
          {{ t('onlineTools', currentCountry) }}
        </h2>
        <p class="section-description">{{ t('selectTool', currentCountry) }}</p>

        <div class="tools-grid">
          <router-link
            to="/tools/id-card-generator"
            class="tool-card"
            itemscope
            itemtype="https://schema.org/SoftwareApplication"
          >
            <svg class="tool-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="8" width="40" height="32" rx="4" stroke="url(#cardGradient)" stroke-width="2.5"/>
              <circle cx="14" cy="18" r="3" fill="url(#cardGradient)"/>
              <rect x="22" y="15" width="16" height="6" rx="1" fill="url(#cardGradient)" opacity="0.7"/>
              <line x1="10" y1="28" x2="38" y2="28" stroke="url(#cardGradient)" stroke-width="2" stroke-linecap="round"/>
              <line x1="10" y1="34" x2="24" y2="34" stroke="url(#cardGradient)" stroke-width="2" stroke-linecap="round"/>
              <defs>
                <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#667eea"/>
                  <stop offset="100%" stop-color="#764ba2"/>
                </linearGradient>
              </defs>
            </svg>
            <h3 class="tool-name" itemprop="name">{{ t('idCard', currentCountry) }}{{ currentCountry === 'CN' ? '号码生成器' : ' Generator' }}</h3>
            <p class="tool-description" itemprop="description">{{ t('idCardToolDescription', currentCountry) }}</p>
            <span class="tool-arrow">→</span>
          </router-link>

          <router-link
            to="/tools/phone-number-generator"
            class="tool-card"
            itemscope
            itemtype="https://schema.org/SoftwareApplication"
          >
            <svg class="tool-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="4" width="28" height="40" rx="4" stroke="url(#phoneGradient)" stroke-width="2.5"/>
              <rect x="14" y="10" width="20" height="24" rx="2" fill="url(#phoneGradient)" opacity="0.2"/>
              <rect x="14" y="10" width="20" height="24" rx="2" stroke="url(#phoneGradient)" stroke-width="1.5"/>
              <circle cx="24" cy="38" r="2" fill="url(#phoneGradient)"/>
              <rect x="18" y="6" width="12" height="2" rx="1" fill="url(#phoneGradient)"/>
              <defs>
                <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#667eea"/>
                  <stop offset="100%" stop-color="#764ba2"/>
                </linearGradient>
              </defs>
            </svg>
            <h3 class="tool-name" itemprop="name">{{ t('phoneNumber', currentCountry) }}{{ currentCountry === 'CN' ? '生成器' : ' Generator' }}</h3>
            <p class="tool-description" itemprop="description">{{ t('phoneToolDescription', currentCountry) }}</p>
            <span class="tool-arrow">→</span>
          </router-link>

          <router-link
            to="/tools/bank-card-generator"
            class="tool-card"
            itemscope
            itemtype="https://schema.org/SoftwareApplication"
          >
            <svg class="tool-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="10" width="40" height="28" rx="4" stroke="url(#bankGradient)" stroke-width="2.5"/>
              <rect x="4" y="16" width="40" height="8" fill="url(#bankGradient)" opacity="0.15"/>
              <line x1="4" y1="20" x2="44" y2="20" stroke="url(#bankGradient)" stroke-width="1.5"/>
              <rect x="8" y="28" width="12" height="4" rx="1" fill="url(#bankGradient)"/>
              <rect x="28" y="28" width="8" height="2" rx="0.5" fill="url(#bankGradient)" opacity="0.6"/>
              <line x1="10" y1="34" x2="38" y2="34" stroke="url(#bankGradient)" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3 2"/>
              <defs>
                <linearGradient id="bankGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#667eea"/>
                  <stop offset="100%" stop-color="#764ba2"/>
                </linearGradient>
              </defs>
            </svg>
            <h3 class="tool-name" itemprop="name">{{ t('bankCard', currentCountry) }}{{ currentCountry === 'CN' ? '生成器' : ' Generator' }}</h3>
            <p class="tool-description" itemprop="description">{{ t('bankCardToolDescription', currentCountry) }}</p>
            <span class="tool-arrow">→</span>
          </router-link>

          <router-link
            to="/tools/organization-code-generator"
            class="tool-card"
            itemscope
            itemtype="https://schema.org/SoftwareApplication"
          >
            <svg class="tool-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 18L24 6L40 18V42H8V18Z" stroke="url(#buildingGradient)" stroke-width="2.5" stroke-linejoin="round"/>
              <rect x="16" y="24" width="6" height="6" stroke="url(#buildingGradient)" stroke-width="2"/>
              <rect x="26" y="24" width="6" height="6" stroke="url(#buildingGradient)" stroke-width="2"/>
              <rect x="16" y="34" width="6" height="6" stroke="url(#buildingGradient)" stroke-width="2"/>
              <rect x="26" y="34" width="6" height="6" stroke="url(#buildingGradient)" stroke-width="2"/>
              <line x1="24" y1="6" x2="24" y2="18" stroke="url(#buildingGradient)" stroke-width="2.5"/>
              <defs>
                <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#667eea"/>
                  <stop offset="100%" stop-color="#764ba2"/>
                </linearGradient>
              </defs>
            </svg>
            <h3 class="tool-name" itemprop="name">{{ t('organizationCode', currentCountry) }}{{ currentCountry === 'CN' ? '生成器' : ' Generator' }}</h3>
            <p class="tool-description" itemprop="description">{{ t('orgCodeToolDescription', currentCountry) }}</p>
            <span class="tool-arrow">→</span>
          </router-link>

          <router-link
            to="/tools/social-credit-code-generator"
            class="tool-card"
            itemscope
            itemtype="https://schema.org/SoftwareApplication"
          >
            <svg class="tool-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="4" width="36" height="40" rx="3" stroke="url(#docGradient)" stroke-width="2.5"/>
              <path d="M14 14H34" stroke="url(#docGradient)" stroke-width="2" stroke-linecap="round"/>
              <path d="M14 20H34" stroke="url(#docGradient)" stroke-width="2" stroke-linecap="round"/>
              <path d="M14 26H28" stroke="url(#docGradient)" stroke-width="2" stroke-linecap="round"/>
              <circle cx="36" cy="36" r="8" stroke="url(#docGradient)" stroke-width="2.5"/>
              <path d="M33 36L35 38L39 34" stroke="url(#docGradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <defs>
                <linearGradient id="docGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#667eea"/>
                  <stop offset="100%" stop-color="#764ba2"/>
                </linearGradient>
              </defs>
            </svg>
            <h3 class="tool-name" itemprop="name">{{ currentCountry === 'CN' ? '统一社会信用代码' : currentCountry === 'JP' ? '法人番号' : 'Credit Code' }}{{ currentCountry === 'CN' ? '生成器' : ' Generator' }}</h3>
            <p class="tool-description" itemprop="description">{{ t('creditCodeToolDescription', currentCountry) }}</p>
            <span class="tool-arrow">→</span>
          </router-link>
        </div>
      </section>

      <section class="use-cases-section" aria-labelledby="use-cases-title">
        <h2 id="use-cases-title" class="section-title">
          {{ t('useCases', currentCountry) }}
        </h2>
        <p class="section-description">{{ t('useCasesDescription', currentCountry) }}</p>

        <div class="use-cases-list">
          <div class="use-case-item">
            <svg class="use-case-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="url(#uc1Gradient)" stroke-width="2"/>
              <path d="M9 9L15 15M15 9L9 15" stroke="url(#uc1Gradient)" stroke-width="2" stroke-linecap="round"/>
              <defs>
                <linearGradient id="uc1Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#667eea"/>
                  <stop offset="100%" stop-color="#764ba2"/>
                </linearGradient>
              </defs>
            </svg>
            <h3 class="use-case-title">{{ t('softwareTesting', currentCountry) }}</h3>
            <p class="use-case-description">{{ t('softwareTestingDesc', currentCountry) }}</p>
          </div>
          <div class="use-case-item">
            <svg class="use-case-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 6V12C4 16.42 7.39 20.5 12 22C16.61 20.5 20 16.42 20 12V6L12 2Z" stroke="url(#uc2Gradient)" stroke-width="2" stroke-linejoin="round"/>
              <path d="M9 12L11 14L15 10" stroke="url(#uc2Gradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <defs>
                <linearGradient id="uc2Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#667eea"/>
                  <stop offset="100%" stop-color="#764ba2"/>
                </linearGradient>
              </defs>
            </svg>
            <h3 class="use-case-title">{{ t('privacyProtection', currentCountry) }}</h3>
            <p class="use-case-description">{{ t('privacyProtectionDesc', currentCountry) }}</p>
          </div>
          <div class="use-case-item">
            <svg class="use-case-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3V21H21" stroke="url(#uc3Gradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7 14L11 10L15 14L21 8" stroke="url(#uc3Gradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <defs>
                <linearGradient id="uc3Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#667eea"/>
                  <stop offset="100%" stop-color="#764ba2"/>
                </linearGradient>
              </defs>
            </svg>
            <h3 class="use-case-title">{{ t('dataAnalysis', currentCountry) }}</h3>
            <p class="use-case-description">{{ t('dataAnalysisDesc', currentCountry) }}</p>
          </div>
          <div class="use-case-item">
            <svg class="use-case-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 14L8 18H16L12 14Z" stroke="url(#uc4Gradient)" stroke-width="2" stroke-linejoin="round"/>
              <path d="M12 2L12 14" stroke="url(#uc4Gradient)" stroke-width="2" stroke-linecap="round"/>
              <circle cx="12" cy="19" r="3" stroke="url(#uc4Gradient)" stroke-width="2"/>
              <defs>
                <linearGradient id="uc4Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#667eea"/>
                  <stop offset="100%" stop-color="#764ba2"/>
                </linearGradient>
              </defs>
            </svg>
            <h3 class="use-case-title">{{ t('learningResearch', currentCountry) }}</h3>
            <p class="use-case-description">{{ t('learningResearchDesc', currentCountry) }}</p>
          </div>
        </div>
      </section>

      <section class="how-it-works-section" aria-labelledby="how-it-works-title">
        <h2 id="how-it-works-title" class="section-title">
          {{ t('howItWorks', currentCountry) }}
        </h2>

        <div class="steps-container">
          <div class="step-item">
            <span class="step-number">1</span>
            <h3 class="step-title">{{ t('selectToolStep', currentCountry) }}</h3>
            <p class="step-description">{{ t('selectToolStepDesc', currentCountry) }}</p>
          </div>
          <div class="step-item">
            <span class="step-number">2</span>
            <h3 class="step-title">{{ t('setParameters', currentCountry) }}</h3>
            <p class="step-description">{{ t('setParametersDesc', currentCountry) }}</p>
          </div>
          <div class="step-item">
            <span class="step-number">3</span>
            <h3 class="step-title">{{ t('generateData', currentCountry) }}</h3>
            <p class="step-description">{{ t('generateDataDesc', currentCountry) }}</p>
          </div>
          <div class="step-item">
            <span class="step-number">4</span>
            <h3 class="step-title">{{ t('copyData', currentCountry) }}</h3>
            <p class="step-description">{{ t('copyDataDesc', currentCountry) }}</p>
          </div>
        </div>
      </section>

      <section class="trust-section" aria-labelledby="trust-title">
        <h2 id="trust-title" class="section-title">
          {{ t('whyChooseUs', currentCountry) }}
        </h2>

        <div class="trust-badges">
          <div class="trust-item">
            <svg class="trust-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 6V12C4 16.42 7.39 20.5 12 22C16.61 20.5 20 16.42 20 12V6L12 2Z" stroke="url(#trust1Gradient)" stroke-width="2" stroke-linejoin="round"/>
              <path d="M12 11V14M12 8V8.5" stroke="url(#trust1Gradient)" stroke-width="2" stroke-linecap="round"/>
              <defs>
                <linearGradient id="trust1Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#667eea"/>
                  <stop offset="100%" stop-color="#764ba2"/>
                </linearGradient>
              </defs>
            </svg>
            <h3 class="trust-title">{{ t('dataSecurity', currentCountry) }}</h3>
            <p class="trust-description">{{ t('dataSecurityDesc', currentCountry) }}</p>
          </div>
          <div class="trust-item">
            <svg class="trust-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="url(#trust2Gradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <defs>
                <linearGradient id="trust2Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#667eea"/>
                  <stop offset="100%" stop-color="#764ba2"/>
                </linearGradient>
              </defs>
            </svg>
            <h3 class="trust-title">{{ t('fastResponse', currentCountry) }}</h3>
            <p class="trust-description">{{ t('fastResponseDesc', currentCountry) }}</p>
          </div>
          <div class="trust-item">
            <svg class="trust-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="2" width="14" height="20" rx="2" stroke="url(#trust3Gradient)" stroke-width="2"/>
              <rect x="8" y="6" width="8" height="10" rx="1" stroke="url(#trust3Gradient)" stroke-width="1.5"/>
              <circle cx="12" cy="19" r="1" fill="url(#trust3Gradient)"/>
              <defs>
                <linearGradient id="trust3Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#667eea"/>
                  <stop offset="100%" stop-color="#764ba2"/>
                </linearGradient>
              </defs>
            </svg>
            <h3 class="trust-title">{{ t('mobileFriendly', currentCountry) }}</h3>
            <p class="trust-description">{{ t('mobileFriendlyDesc', currentCountry) }}</p>
          </div>
          <div class="trust-item">
            <svg class="trust-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="url(#trust4Gradient)" stroke-width="2"/>
              <path d="M2 12H7M17 12H22M12 2C14.5 4.5 16 8 16 12C16 16 14.5 19.5 12 22C9.5 19.5 8 16 8 12C8 8 9.5 4.5 12 2Z" stroke="url(#trust4Gradient)" stroke-width="2" stroke-linecap="round"/>
              <defs>
                <linearGradient id="trust4Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#667eea"/>
                  <stop offset="100%" stop-color="#764ba2"/>
                </linearGradient>
              </defs>
            </svg>
            <h3 class="trust-title">{{ t('multiLanguageSupport', currentCountry) }}</h3>
            <p class="trust-description">{{ t('multiLanguageSupportDesc', currentCountry) }}</p>
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
            <li><router-link to="/tools/social-credit-code-generator">{{ t('socialCreditCode', currentCountry) }}</router-link></li>
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

        <div class="footer-contact">
          <h4 class="footer-links-title">{{ t('contactUs', currentCountry) }}</h4>
          <p class="footer-email">978926785@qq.com</p>
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
.home {
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

.hero {
  text-align: center;
  padding: 0px 20px;
  margin-bottom: 40px;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 20px;

  .logo-text {
    display: block;
    background: linear-gradient(90deg, #409EFF, #67C23A);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-subtitle {
    display: block;
    font-size: 1.2rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 10px;
  }
}

.hero-description {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto 30px;
  line-height: 1.6;
}

.hero-features {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  padding: 12px 24px;
  border-radius: 30px;
  backdrop-filter: blur(10px);
}

.feature-icon {
  font-size: 1.2rem;
}

.feature-text {
  color: #fff;
  font-size: 0.95rem;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.section-description {
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 30px;
}

.tools-section,
.use-cases-section,
.how-it-works-section,
.trust-section {
  margin-bottom: 60px;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
    border-color: #667eea;
  }
}

.tool-icon {
  width: 48px;
  height: 48px;
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
}

.tool-arrow {
  position: absolute;
  right: 24px;
  top: 24px;
  color: #667eea;
  font-size: 1.2rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  .tool-card:hover & {
    opacity: 1;
  }
}

.use-cases-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.use-case-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 20px;
}

.use-case-icon {
  width: 32px;
  height: 32px;
  margin-bottom: 12px;
}

.use-case-title {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.use-case-description {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  line-height: 1.5;
}

.steps-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}

.step-item {
  text-align: center;
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  color: #fff;
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 12px;
}

.step-title {
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 6px;
}

.step-description {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
}

.trust-badges {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.trust-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
}

.trust-icon {
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
}

.trust-title {
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 6px;
}

.trust-description {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
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
  background: linear-gradient(90deg, #667eea, #764ba2);
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
    color: #667eea;
  }
}

.footer-email {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
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
  .hero-title {
    font-size: 1.8rem;
  }

  .hero-features {
    gap: 15px;
  }

  .feature-item {
    padding: 10px 16px;
    font-size: 0.85rem;
  }

  .tools-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>