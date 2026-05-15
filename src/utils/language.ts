export interface Translation {
  [key: string]: {
    [lang: string]: string;
  };
}

export const translations: Translation = {
  title: {
    CN: '编码生成器',
    US: 'ID Generator',
    JP: 'IDジェネレーター',
    GB: 'ID Generator'
  },
  subtitle: {
    CN: '专业在线测试数据生成工具',
    US: 'Professional Online Test Data Generator',
    JP: 'プロフェッショナルオンラインテストデータ生成ツール',
    GB: 'Professional Online Test Data Generator'
  },
  heroDescription: {
    CN: '免费生成身份证号码、手机号码、银行卡号、组织机构代码、统一社会信用代码。保护隐私，安全可靠。',
    US: 'Generate ID cards, phone numbers, bank card numbers, organization codes, and social credit codes for free. Privacy protection, safe and reliable.',
    JP: '身分証明書、電話番号、銀行口座番号、組織コード、社会信用コードなどを無料で生成。プライバシー保護、安全で確実。',
    GB: 'Generate ID cards, phone numbers, bank card numbers, organization codes, and credit codes for free. Privacy protection, safe and reliable.'
  },
  privacyProtection: {
    CN: '隐私保护',
    US: 'Privacy Protection',
    JP: 'プライバシー保護',
    GB: 'Privacy Protection'
  },
  fastGeneration: {
    CN: '快速生成',
    US: 'Fast Generation',
    JP: '高速生成',
    GB: 'Fast Generation'
  },
  batchGeneration: {
    CN: '批量生成',
    US: 'Batch Generation',
    JP: '一括生成',
    GB: 'Batch Generation'
  },
  multiCountrySupport: {
    CN: '多国家支持',
    US: 'Multi-country Support',
    JP: '複数国対応',
    GB: 'Multi-country Support'
  },
  onlineTools: {
    CN: '在线工具',
    US: 'Online Tools',
    JP: 'オンライン tools',
    GB: 'Online Tools'
  },
  selectTool: {
    CN: '选择您需要的工具开始生成测试数据',
    US: 'Select the tool you need to start generating test data',
    JP: '必要なツールを選択してテストデータの生成を開始',
    GB: 'Select the tool you need to start generating test data'
  },
  idCard: {
    CN: '身份证号码',
    US: 'SSN',
    JP: 'マイナンバー',
    GB: 'National Insurance'
  },
  organizationCode: {
    CN: '组织机构代码',
    US: 'EIN',
    JP: '法人番号',
    GB: 'Company Registration No.'
  },
  socialCreditCode: {
    CN: '统一社会信用代码',
    US: 'EIN',
    JP: '法人番号',
    GB: 'Company Registration No.'
  },
  phoneNumber: {
    CN: '手机号码',
    US: 'Phone Number',
    JP: '電話番号',
    GB: 'Phone Number'
  },
  bankCard: {
    CN: '银行卡账号',
    US: 'Credit Card',
    JP: 'クレジットカード',
    GB: 'Debit/Credit Card'
  },
  generate: {
    CN: '生成',
    US: 'Generate',
    JP: '生成',
    GB: 'Generate'
  },
  validate: {
    CN: '校验',
    US: 'Validate',
    JP: '検証',
    GB: 'Validate'
  },
  valid: {
    CN: '有效',
    US: 'Valid',
    JP: '有効',
    GB: 'Valid'
  },
  invalid: {
    CN: '无效',
    US: 'Invalid',
    JP: '無効',
    GB: 'Invalid'
  },
  selectCountry: {
    CN: '选择国家',
    US: 'Select Country',
    JP: '国を選択',
    GB: 'Select Country'
  },
  province: {
    CN: '省份',
    US: 'State',
    JP: '都道府県',
    GB: 'Region'
  },
  city: {
    CN: '城市',
    US: 'City',
    JP: '市区町村',
    GB: 'City'
  },
  district: {
    CN: '区县',
    US: 'District',
    JP: '地区',
    GB: 'District'
  },
  birthday: {
    CN: '生日',
    US: 'Birthday',
    JP: '生年月日',
    GB: 'Date of Birth'
  },
  gender: {
    CN: '性别',
    US: 'Gender',
    JP: '性別',
    GB: 'Gender'
  },
  male: {
    CN: '男',
    US: 'Male',
    JP: '男性',
    GB: 'Male'
  },
  female: {
    CN: '女',
    US: 'Female',
    JP: '女性',
    GB: 'Female'
  },
  copySuccess: {
    CN: '复制成功',
    US: 'Copied!',
    JP: 'コピーしました',
    GB: 'Copied!'
  },
  idCardPlaceholder: {
    CN: '请输入身份证号码',
    US: 'Enter SSN',
    JP: 'マイナーバインダーを入力',
    GB: 'Enter National Insurance No.'
  },
  organizationCodePlaceholder: {
    CN: '请输入组织机构代码',
    US: 'Enter EIN',
    JP: '法人番号を入力',
    GB: 'Enter Company Registration No.'
  },
  socialCreditCodePlaceholder: {
    CN: '请输入统一社会信用代码',
    US: 'Enter EIN',
    JP: '法人番号を入力',
    GB: 'Enter Company Registration No.'
  },
  phonePlaceholder: {
    CN: '请输入手机号码',
    US: 'Enter phone number',
    JP: '電話番号を入力',
    GB: 'Enter phone number'
  },
  bankCardPlaceholder: {
    CN: '请输入银行卡号',
    US: 'Enter credit card number',
    JP: 'クレジットカード番号を入力',
    GB: 'Enter card number'
  },
  generateIdCardTitle: {
    CN: '身份证号码生成',
    US: 'SSN Generator',
    JP: 'マイナンバー生成',
    GB: 'National Insurance Generator'
  },
  generateOrganizationCodeTitle: {
    CN: '组织机构代码生成',
    US: 'EIN Generator',
    JP: '法人番号生成',
    GB: 'Company Registration No. Generator'
  },
  generateSocialCreditCodeTitle: {
    CN: '统一社会信用代码生成',
    US: 'EIN Generator',
    JP: '法人番号生成',
    GB: 'Company Registration No. Generator'
  },
  generatePhoneTitle: {
    CN: '手机号码生成',
    US: 'Phone Number Generator',
    JP: '電話番号生成',
    GB: 'Phone Number Generator'
  },
  generateBankCardTitle: {
    CN: '银行卡账号生成',
    US: 'Credit Card Generator',
    JP: 'クレジットカード生成',
    GB: 'Debit/Credit Card Generator'
  },
  location: {
    CN: '所在地',
    US: 'Location',
    JP: '所在地',
    GB: 'Location'
  },
  pleaseSelect: {
    CN: '请选择',
    US: 'Please select',
    JP: '選択してください',
    GB: 'Please select'
  },
  hintIdCard: {
    CN: '提示：生成的身份证号码仅供测试使用，请勿用于非法用途',
    US: 'Note: Generated SSN is for testing only, do not use for illegal purposes',
    JP: '注意：生成されたマイナンバーはテスト用のみです。違法な目的に使用しないでください',
    GB: 'Note: Generated National Insurance number is for testing only, do not use for illegal purposes'
  },
  hintBankCard: {
    CN: '提示：生成的银行卡号仅供测试使用，请勿用于非法用途',
    US: 'Note: Generated credit card number is for testing only, do not use for illegal purposes',
    JP: '注意：生成されたクレジットカード番号はテスト用のみです。違法な目的に使用しないでください',
    GB: 'Note: Generated card number is for testing only, do not use for illegal purposes'
  },
  useCases: {
    CN: '使用场景',
    US: 'Use Cases',
    JP: '使用シーン',
    GB: 'Use Cases'
  },
  useCasesDescription: {
    CN: '适用于各种开发测试和数据验证场景',
    US: 'Suitable for various development testing and data validation scenarios',
    JP: 'さまざまな開発テストやデータ検証のシナリオに適用',
    GB: 'Suitable for various development testing and data validation scenarios'
  },
  softwareTesting: {
    CN: '软件开发测试',
    US: 'Software Development Testing',
    JP: 'ソフトウェア開発テスト',
    GB: 'Software Development Testing'
  },
  softwareTestingDesc: {
    CN: '为测试数据库生成真实格式的测试数据，确保系统稳定性',
    US: 'Generate real-format test data for test databases to ensure system stability',
    JP: 'テストデータベース用に実フォーマットのテストデータを生成し、システムの安定性を確保',
    GB: 'Generate real-format test data for test databases to ensure system stability'
  },
  privacyProtectionDesc: {
    CN: '在演示和文档中使用虚拟数据，保护真实用户信息',
    US: 'Use virtual data in demos and documentation to protect real user information',
    JP: 'デモやドキュメントで仮想データを使用し、本当のユーザー情報を保護',
    GB: 'Use virtual data in demos and documentation to protect real user information'
  },
  dataAnalysis: {
    CN: '数据分析',
    US: 'Data Analysis',
    JP: 'データ分析',
    GB: 'Data Analysis'
  },
  dataAnalysisDesc: {
    CN: '生成大量测试数据进行数据分析和性能测试',
    US: 'Generate large amounts of test data for data analysis and performance testing',
    JP: '大量的テストデータを生成してデータ分析やパフォーマンステストを実施',
    GB: 'Generate large amounts of test data for data analysis and performance testing'
  },
  learningResearch: {
    CN: '学习研究',
    US: 'Learning Research',
    JP: '学習研究',
    GB: 'Learning Research'
  },
  learningResearchDesc: {
    CN: '学习身份证号码、银行卡号等编码规则和校验算法',
    US: 'Learn encoding rules and validation algorithms for ID cards, bank cards, etc.',
    JP: '身分証明書、银行口座番号などのエンコーディングルールや検証アルゴリズムを学習',
    GB: 'Learn encoding rules and validation algorithms for ID cards, bank cards, etc.'
  },
  howItWorks: {
    CN: '使用方法',
    US: 'How It Works',
    JP: '使用方法',
    GB: 'How It Works'
  },
  selectToolStep: {
    CN: '选择工具',
    US: 'Select Tool',
    JP: 'ツールを選択',
    GB: 'Select Tool'
  },
  selectToolStepDesc: {
    CN: '从上方工具列表中选择您需要的生成工具',
    US: 'Select the generator tool you need from the tool list above',
    JP: '上のツールリストから必要な生成ツールを選択',
    GB: 'Select the generator tool you need from the tool list above'
  },
  setParameters: {
    CN: '设置参数',
    US: 'Set Parameters',
    JP: 'パラメータを設定',
    GB: 'Set Parameters'
  },
  setParametersDesc: {
    CN: '根据需求设置生成数量、地区等参数',
    US: 'Set parameters such as generation quantity and region according to needs',
    JP: '必要に応じて生成数量、地域などのパラメータを設定',
    GB: 'Set parameters such as generation quantity and region according to needs'
  },
  generateData: {
    CN: '生成数据',
    US: 'Generate Data',
    JP: 'データを生成',
    GB: 'Generate Data'
  },
  generateDataDesc: {
    CN: '点击生成按钮，获取符合规则的测试数据',
    US: 'Click the generate button to get test data that complies with rules',
    JP: '生成ボタンをクリックして、ルールに準拠したテストデータを取得',
    GB: 'Click the generate button to get test data that complies with rules'
  },
  copyData: {
    CN: '复制使用',
    US: 'Copy and Use',
    JP: 'コピーして使用',
    GB: 'Copy and Use'
  },
  copyDataDesc: {
    CN: '一键复制生成的数据，立即使用',
    US: 'One-click copy to use the generated data immediately',
    JP: 'ワンスタークリックで生成データをコピーしてすぐ使用',
    GB: 'One-click copy to use the generated data immediately'
  },
  whyChooseUs: {
    CN: '为什么选择我们',
    US: 'Why Choose Us',
    JP: 'なぜ私たちを選ぶのか',
    GB: 'Why Choose Us'
  },
  dataSecurity: {
    CN: '数据安全',
    US: 'Data Security',
    JP: 'データセキュリティ',
    GB: 'Data Security'
  },
  dataSecurityDesc: {
    CN: '所有数据本地生成，不上传服务器',
    US: 'All data generated locally, not uploaded to server',
    JP: 'すべてのデータをローカルで生成、サーバーにアップロードしない',
    GB: 'All data generated locally, not uploaded to server'
  },
  fastResponse: {
    CN: '快速响应',
    US: 'Fast Response',
    JP: '素早い対応',
    GB: 'Fast Response'
  },
  fastResponseDesc: {
    CN: '毫秒级生成速度，支持大量批量生成',
    US: 'Millisecond-level generation speed, support for large batch generation',
    JP: 'ミリ秒レベルの生成速度、一括大量生成に対応',
    GB: 'Millisecond-level generation speed, support for large batch generation'
  },
  mobileFriendly: {
    CN: '移动友好',
    US: 'Mobile Friendly',
    JP: 'モバイル対応',
    GB: 'Mobile Friendly'
  },
  mobileFriendlyDesc: {
    CN: '完美适配手机，平板等各种设备',
    US: 'Perfectly adapted to mobile phones, tablets and other devices',
    JP: 'スマートフォン、タブレットなどのさまざまなデバイスに完璧対応',
    GB: 'Perfectly adapted to mobile phones, tablets and other devices'
  },
  multiLanguageSupport: {
    CN: '多语言支持',
    US: 'Multi-language Support',
    JP: '多言語サポート',
    GB: 'Multi-language Support'
  },
  multiLanguageSupportDesc: {
    CN: '支持中文、英文、日文、英文多语言',
    US: 'Supports Chinese, English, Japanese, and more',
    JP: '中国語、英語、日本語などの多言語をサポート',
    GB: 'Supports Chinese, English, Japanese, and more'
  },
  tools: {
    CN: '工具',
    US: 'Tools',
    JP: 'ツール',
    GB: 'Tools'
  },
  about: {
    CN: '关于',
    US: 'About',
    JP: 'について',
    GB: 'About'
  },
  aboutUs: {
    CN: '关于我们',
    US: 'About Us',
    JP: '私たちについて',
    GB: 'About Us'
  },
  privacyPolicy: {
    CN: '隐私政策',
    US: 'Privacy Policy',
    JP: 'プライバシーポリシー',
    GB: 'Privacy Policy'
  },
  termsOfService: {
    CN: '服务条款',
    US: 'Terms of Service',
    JP: '利用規約',
    GB: 'Terms of Service'
  },
  contactUs: {
    CN: '联系我们',
    US: 'Contact Us',
    JP: 'お問い合わせ',
    GB: 'Contact Us'
  },
  allRightsReserved: {
    CN: '版权所有',
    US: 'All rights reserved',
    JP: '全著作権所有',
    GB: 'All rights reserved'
  },
  virtualDataNote: {
    CN: '所有生成的数据均为虚拟数据，仅供测试使用',
    US: 'All generated data is virtual and for testing purposes only',
    JP: '生成されたすべてのデータは仮想ものであり、テスト目的のみに使用してください',
    GB: 'All generated data is virtual and for testing purposes only'
  },
  generatorSettings: {
    CN: '生成设置',
    US: 'Generator Settings',
    JP: '生成設定',
    GB: 'Generator Settings'
  },
  tips: {
    CN: '使用提示',
    US: 'Tips',
    JP: 'ヒント',
    GB: 'Tips'
  },
  relatedTools: {
    CN: '相关工具',
    US: 'Related Tools',
    JP: '関連ツール',
    GB: 'Related Tools'
  },
  knowledge: {
    CN: '知识',
    US: 'Knowledge',
    JP: '知識',
    GB: 'Knowledge'
  },
  privacy: {
    CN: '隐私保护',
    US: 'Privacy',
    JP: 'プライバシー',
    GB: 'Privacy'
  },
  privacyDesc: {
    CN: '我们重视您的隐私安全。所有数据在浏览器本地生成，不会上传到服务器，确保您的信息安全。',
    US: 'We value your privacy. All data is generated locally in your browser and will not be uploaded to the server.',
    JP: '私たちはあなたのプライバシー重視します。すべてのデータはブラウザ内で生成され、サーバーにアップロードされません。',
    GB: 'We value your privacy. All data is generated locally in your browser and will not be uploaded to the server.'
  },
  quantity: {
    CN: '数量',
    US: 'Quantity',
    JP: '数量',
    GB: 'Quantity'
  },
  cardType: {
    CN: '卡种',
    US: 'Card Type',
    JP: 'カード種類',
    GB: 'Card Type'
  },
  result: {
    CN: '结果',
    US: 'Result',
    JP: '結果',
    GB: 'Result'
  },
  copy: {
    CN: '复制',
    US: 'Copy',
    JP: 'コピー',
    GB: 'Copy'
  },
  generateMultiple: {
    CN: '生成多个',
    US: 'Generate Multiple',
    JP: '複数生成',
    GB: 'Generate Multiple'
  },
  idCardToolDescription: {
    CN: '生成符合国家标准的身份证号码，支持批量生成',
    US: 'Generate ID numbers that comply with national standards, support batch generation',
    JP: '国家标准に準拠した身分証明書番号を生成、一括生成に対応',
    GB: 'Generate ID numbers that comply with national standards, support batch generation'
  },
  phoneToolDescription: {
    CN: '支持中国、美国、日本、英国等多国手机号码生成',
    US: 'Supports phone number generation for China, US, Japan, UK and more',
    JP: '中国、米国、日本、英国などの電話番号生成に対応',
    GB: 'Supports phone number generation for China, US, Japan, UK and more'
  },
  bankCardToolDescription: {
    CN: '支持银联、Visa、MasterCard等多种卡种',
    US: 'Supports UnionPay, Visa, MasterCard and other card types',
    JP: 'UnionPay、Visa、MasterCardなどのカード種に対応',
    GB: 'Supports UnionPay, Visa, MasterCard and other card types'
  },
  orgCodeToolDescription: {
    CN: '符合GB 11714标准的组织机构代码生成',
    US: 'Organization code generation complying with GB 11714 standard',
    JP: 'GB 11714規格に準拠した組織コード生成',
    GB: 'Organisation code generation complying with GB 11714 standard'
  },
  creditCodeToolDescription: {
    CN: '符合GB 32100-2015标准的18位信用代码',
    US: '18-digit credit code generation complying with GB 32100-2015 standard',
    JP: 'GB 32100-2015規格に準拠した18桁信用コード生成',
    GB: '18-digit credit code generation complying with GB 32100-2015 standard'
  },
  allTools: {
    CN: '所有工具',
    US: 'All Tools',
    JP: 'すべてのツール',
    GB: 'All Tools'
  },
  coreFeatures: {
    CN: '核心特点',
    US: 'Core Features',
    JP: 'コア機能',
    GB: 'Core Features'
  },
  compliantWithStandards: {
    CN: '符合标准',
    US: 'Compliant with Standards',
    JP: '規格準拠',
    GB: 'Compliant with Standards'
  },
  compliantWithStandardsDesc: {
    CN: '严格按照国家标准算法生成，确保数据格式正确',
    US: 'Generated strictly according to national standard algorithms to ensure correct data format',
    JP: '国家標準アルゴリズムに厳密に準拠して生成され、データの正確性を保証',
    GB: 'Generated strictly according to national standard algorithms to ensure correct data format'
  },
  footerTagline: {
    CN: '专业的在线测试数据生成工具',
    US: 'Professional Online Test Data Generator',
    JP: 'プロフェッショナルオンラインテストデータ生成ツール',
    GB: 'Professional Online Test Data Generator'
  },
  email: {
    CN: '邮箱',
    US: 'Email',
    JP: 'メール',
    GB: 'Email'
  },
  privacyTitle: {
    CN: '隐私政策',
    US: 'Privacy Policy',
    JP: 'プライバシーポリシー',
    GB: 'Privacy Policy'
  },
  home: {
    CN: '首页',
    US: 'Home',
    JP: 'ホーム',
    GB: 'Home'
  },
  termsTitle: {
    CN: '服务条款',
    US: 'Terms of Service',
    JP: '利用規約',
    GB: 'Terms of Service'
  },
  idCardGeneratorDescription: {
    CN: '免费在线生成符合国家标准的身份证号码，支持批量生成，保护隐私，安全可靠。',
    US: 'Free online ID number generator that complies with national standards, supports batch generation, privacy protection, safe and reliable.',
    JP: '国家标准に準拠した身分証明書番号を無料でオンライン生成、一括生成、プライバシー保護、安全で確実。',
    GB: 'Free online ID number generator that complies with national standards, supports batch generation, privacy protection, safe and reliable.'
  },
  phoneGeneratorDescription: {
    CN: '免费在线生成符合各国规则的手机号码，支持中国、美国、日本、英国等多个国家和地区。',
    US: 'Free online phone number generator that complies with various countries rules, supports China, US, Japan, UK and more.',
    JP: '各国ルールに準拠した電話番号を無料でオンライン生成、中国、米国、日本、英国などに対応。',
    GB: 'Free online phone number generator that complies with various countries rules, supports China, US, Japan, UK and more.'
  },
  bankCardGeneratorDescription: {
    CN: '免费在线生成符合Luhn算法的银行卡号，支持银联、Visa、MasterCard、American Express等多种卡种。',
    US: 'Free online bank card number generator that complies with Luhn algorithm, supports UnionPay, Visa, MasterCard, Amex and more.',
    JP: 'Luhnアルゴリズムに準拠した銀行口座番号を無料でオンライン生成、UnionPay、Visa、MasterCard、Amexなどに対応。',
    GB: 'Free online bank card number generator that complies with Luhn algorithm, supports UnionPay, Visa, MasterCard, Amex and more.'
  },
  orgCodeGeneratorDescription: {
    CN: '免费在线生成符合GB 11714标准的组织机构代码。',
    US: 'Free online organization code generator that complies with GB 11714 standard.',
    JP: 'GB 11714規格に準拠した組織コードを無料でオンライン生成。',
    GB: 'Free online organisation code generator that complies with GB 11714 standard.'
  },
  creditCodeGeneratorDescription: {
    CN: '免费在线生成符合GB 32100-2015标准的统一社会信用代码。',
    US: 'Free online unified social credit code generator that complies with GB 32100-2015 standard.',
    JP: 'GB 32100-2015規格に準拠した統一社会信用コードを無料でオンライン生成。',
    GB: 'Free online unified social credit code generator that complies with GB 32100-2015 standard.'
  },
  organizationCodeGeneratorDescription: {
    CN: '免费在线生成符合GB 11714标准的组织机构代码，支持批量生成，保护隐私，安全可靠。',
    US: 'Free online organization code generator that complies with GB 11714 standard, supports batch generation, privacy protection, safe and reliable.',
    JP: 'GB 11714規格に準拠した組織コードを無料でオンライン生成、一括生成、プライバシー保護、安全で確実。',
    GB: 'Free online organisation code generator that complies with GB 11714 standard, supports batch generation, privacy protection, safe and reliable.'
  },
  socialCreditCodeGeneratorDescription: {
    CN: '免费在线生成符合GB 32100-2015标准的统一社会信用代码，支持批量生成，保护隐私，安全可靠。',
    US: 'Free online unified social credit code generator that complies with GB 32100-2015 standard, supports batch generation, privacy protection, safe and reliable.',
    JP: 'GB 32100-2015規格に準拠した統一社会信用コードを無料でオンライン生成、一括生成、プライバシー保護、安全で確実。',
    GB: 'Free online unified social credit code generator that complies with GB 32100-2015 standard, supports batch generation, privacy protection, safe and reliable.'
  },
  whoWeAre: {
    CN: '我们是谁',
    US: 'Who We Are',
    JP: '私たちは誰か',
    GB: 'Who We Are'
  },
  aboutDescription1: {
    CN: 'ID Generator 是一个专业的在线测试数据生成工具网站，致力于为开发者、测试人员和数据分析师提供安全、可靠的测试数据生成服务。',
    US: 'ID Generator is a professional online test data generator website dedicated to providing developers, testers, and data analysts with safe and reliable test data generation services.',
    JP: 'ID Generator は、開発者、テスター、データアナリストに安全で信頼性の高いテストデータ生成サービスを提供することに専念したプロフェッショナルなオンラインテストデータ生成ツールウェブサイトです。',
    GB: 'ID Generator is a professional online test data generator website dedicated to providing developers, testers, and data analysts with safe and reliable test data generation services.'
  },
  aboutDescription2: {
    CN: '我们的团队由一群热爱技术的开发者组成，深知在软件开发过程中，测试数据的重要性。我们希望通过提供简单易用的工具，帮助开发者更高效地完成测试工作。',
    US: 'Our team consists of a group of tech-loving developers who understand the importance of test data in software development. We hope to help developers complete testing work more efficiently by providing easy-to-use tools.',
    JP: '私たちのチームは、ソフトウェア開発におけるテストデータの重要性を理解している技術愛好家の開発者で構成されています。使いやすいツールを提供することで、開発者がより効率的にテスト作業を完了できるようにしたいと考えています。',
    GB: 'Our team consists of a group of tech-loving developers who understand the importance of test data in software development. We hope to help developers complete testing work more efficiently by providing easy-to-use tools.'
  },
  ourMission: {
    CN: '我们的使命',
    US: 'Our Mission',
    JP: '私たちの使命',
    GB: 'Our Mission'
  },
  missionDescription: {
    CN: '我们的使命是为开发者提供安全、便捷、高效的测试数据生成服务，帮助开发者节省时间，提高工作效率。',
    US: 'Our mission is to provide developers with safe, convenient, and efficient test data generation services, helping them save time and improve work efficiency.',
    JP: '私たちの使命は、開発者に安全で便利かつ効率的なテストデータ生成サービスを提供し、時間を節約し作業効率を向上させることです。',
    GB: 'Our mission is to provide developers with safe, convenient, and efficient test data generation services, helping them save time and improve work efficiency.'
  },
  coreValues: {
    CN: '核心价值观',
    US: 'Core Values',
    JP: 'コアバリュー',
    GB: 'Core Values'
  },
  valuePrivacy: {
    CN: '隐私保护：所有数据在浏览器本地生成，不上传服务器',
    US: 'Privacy Protection: All data generated locally in browser, not uploaded to server',
    JP: 'プライバシー保護：すべてのデータはブラウザ内でローカル生成され、サーバーにアップロードされません',
    GB: 'Privacy Protection: All data generated locally in browser, not uploaded to server'
  },
  valueSecurity: {
    CN: '安全可靠：遵循行业标准，确保生成数据的准确性',
    US: 'Safe and Reliable: Follow industry standards to ensure the accuracy of generated data',
    JP: '安全で確実：業界標準に準拠し、生成データの正確性を確保',
    GB: 'Safe and Reliable: Follow industry standards to ensure the accuracy of generated data'
  },
  valueEasy: {
    CN: '简单易用：简洁的界面设计，友好的用户体验',
    US: 'Easy to Use: Clean interface design, friendly user experience',
    JP: '使いやすい：シンプルなインターフェースデザイン、フレンドリーなユーザー体験',
    GB: 'Easy to Use: Clean interface design, friendly user experience'
  },
  valueImprove: {
    CN: '持续改进：不断优化产品，满足用户需求',
    US: 'Continuous Improvement: Constantly optimize products to meet user needs',
    JP: '継続的改善：常に製品を最適化し、ユーザーのニーズに応えます',
    GB: 'Continuous Improvement: Constantly optimise products to meet user needs'
  },
  contactUsTitle: {
    CN: '联系方式',
    US: 'Contact Us',
    JP: 'お問い合わせ',
    GB: 'Contact Us'
  },
  contactDescription: {
    CN: '如果您有任何问题或建议，欢迎联系我们：',
    US: 'If you have any questions or suggestions, please feel free to contact us:',
    JP: 'ご質問やご提案がございましたら、お気軽にお問い合わせください：',
    GB: 'If you have any questions or suggestions, please feel free to contact us:'
  },
  emailAddress: {
    CN: '978926785@qq.com',
    US: '978926785@qq.com',
    JP: '978926785@qq.com',
    GB: '978926785@qq.com'
  },
  lastUpdated: {
    CN: '最后更新日期',
    US: 'Last Updated',
    JP: '最終更新日',
    GB: 'Last Updated'
  },
  lastUpdatedDate: {
    CN: '2024年1月1日',
    US: 'January 1, 2024',
    JP: '2024年1月1日',
    GB: '1 January 2024'
  },
  dataProcessing: {
    CN: '数据处理',
    US: 'Data Processing',
    JP: 'データ処理',
    GB: 'Data Processing'
  },
  localGeneration: {
    CN: '本地生成',
    US: 'Local Generation',
    JP: 'ローカル生成',
    GB: 'Local Generation'
  },
  localGenerationDesc: {
    CN: '我们的所有工具都是在您的浏览器本地运行，不会将您生成的数据上传到我们的服务器。您生成的所有数据仅存储在您的浏览器中，不会被传输到任何外部服务器。',
    US: 'All our tools run locally in your browser and do not upload your generated data to our servers. All data you generate is stored only in your browser and will not be transmitted to any external servers.',
    JP: 'すべてのツールはブラウザ内でローカル実行され、生成されたデータはサーバーにアップロードされません。生成されたデータはブラウザ内にのみ保存され、外部サーバーに転送されることはありません。',
    GB: 'All our tools run locally in your browser and do not upload your generated data to our servers. All data you generate is stored only in your browser and will not be transmitted to any external servers.'
  },
  dataStorage: {
    CN: '数据存储',
    US: 'Data Storage',
    JP: 'データストレージ',
    GB: 'Data Storage'
  },
  dataStorageDesc: {
    CN: '生成的数据仅在您使用工具期间临时存储在浏览器内存中，关闭浏览器后数据将被清除。',
    US: 'Generated data is temporarily stored in browser memory only while you use the tool, and will be cleared after closing the browser.',
    JP: '生成されたデータはツール使用中のみブラウザメモリに一時保存され、ブラウザを閉じるとデータは消去されます。',
    GB: 'Generated data is temporarily stored in browser memory only while you use the tool, and will be cleared after closing the browser.'
  },
  cookiesAndTracking: {
    CN: 'Cookie 和追踪',
    US: 'Cookies and Tracking',
    JP: 'Cookieとトラッキング',
    GB: 'Cookies and Tracking'
  },
  cookieUsage: {
    CN: 'Cookie 使用',
    US: 'Cookie Usage',
    JP: 'Cookieの使用',
    GB: 'Cookie Usage'
  },
  cookieUsageDesc: {
    CN: '我们使用必要的Cookie来记住您的语言偏好设置，以便为您提供更好的用户体验。这些Cookie不会存储任何个人身份信息。',
    US: 'We use necessary cookies to remember your language preference settings to provide you with a better user experience. These cookies do not store any personally identifiable information.',
    JP: 'ユーザーエクスペリエンスを向上させるために、言語設定を記憶するために必要なCookieを使用しています。これらのCookieは個人を特定できる情報を保存しません。',
    GB: 'We use necessary cookies to remember your language preference settings to provide you with a better user experience. These cookies do not store any personally identifiable information.'
  },
  analyticsTools: {
    CN: '分析工具',
    US: 'Analytics Tools',
    JP: '分析ツール',
    GB: 'Analytics Tools'
  },
  analyticsToolsDesc: {
    CN: '我们使用Google Analytics来分析网站流量和用户行为。这些数据是匿名的，不会包含任何个人身份信息。',
    US: 'We use Google Analytics to analyze website traffic and user behavior. This data is anonymous and does not include any personally identifiable information.',
    JP: 'ウェブサイトのトラフィックとユーザー行動を分析するためにGoogle Analyticsを使用しています。これらのデータは匿名であり、個人を特定できる情報は含まれていません。',
    GB: 'We use Google Analytics to analyse website traffic and user behaviour. This data is anonymous and does not include any personally identifiable information.'
  },
  thirdPartyServices: {
    CN: '第三方服务',
    US: 'Third-party Services',
    JP: 'サードパーティサービス',
    GB: 'Third-party Services'
  },
  thirdPartyServicesDesc: {
    CN: '我们的网站可能包含指向第三方网站的链接。我们不对这些第三方网站的隐私政策负责。建议您在访问这些网站时阅读它们的隐私政策。',
    US: 'Our website may contain links to third-party websites. We are not responsible for the privacy policies of these third-party websites. We recommend that you read their privacy policies when visiting these sites.',
    JP: '当ウェブサイトには第三者ウェブサイトへのリンクが含まれている場合があります。これらの第三者ウェブサイトのプライバシーポリシーについては責任を負いません。これらのサイトを訪問する際には、プライバシーポリシーをお読みになることをお勧めします。',
    GB: 'Our website may contain links to third-party websites. We are not responsible for the privacy policies of these third-party websites. We recommend that you read their privacy policies when visiting these sites.'
  },
  policyChanges: {
    CN: '政策变更',
    US: 'Policy Changes',
    JP: 'ポリシー変更',
    GB: 'Policy Changes'
  },
  policyChangesDesc: {
    CN: '我们保留随时更新此隐私政策的权利。任何更改将在此页面发布，建议您定期查看。',
    US: 'We reserve the right to update this privacy policy at any time. Any changes will be posted on this page, and we recommend that you check back regularly.',
    JP: 'このプライバシーポリシーをいつでも更新する権利を留保します。変更があった場合はこのページに掲載されますので、定期的に確認することをお勧めします。',
    GB: 'We reserve the right to update this privacy policy at any time. Any changes will be posted on this page, and we recommend that you check back regularly.'
  },
  contactForQuestions: {
    CN: '如果您对我们的隐私政策有任何疑问，请联系我们：',
    US: 'If you have any questions about our privacy policy, please contact us:',
    JP: 'プライバシーポリシーについてご質問がある場合は、お問い合わせください：',
    GB: 'If you have any questions about our privacy policy, please contact us:'
  },
  acceptTerms: {
    CN: '接受条款',
    US: 'Accept Terms',
    JP: '規約の受諾',
    GB: 'Accept Terms'
  },
  acceptTermsDesc: {
    CN: '使用本网站即表示您同意遵守以下服务条款。如果您不同意这些条款，请不要使用我们的服务。',
    US: 'Using this website indicates that you agree to comply with the following terms of service. If you do not agree to these terms, please do not use our services.',
    JP: '本ウェブサイトを使用することで、以下のサービス規約に同意したものとみなされます。これらの規約に同意しない場合は、当社のサービスを使用しないでください。',
    GB: 'Using this website indicates that you agree to comply with the following terms of service. If you do not agree to these terms, please do not use our services.'
  },
  serviceUsage: {
    CN: '服务使用',
    US: 'Service Usage',
    JP: 'サービスの使用',
    GB: 'Service Usage'
  },
  license: {
    CN: '许可',
    US: 'License',
    JP: 'ライセンス',
    GB: 'License'
  },
  licenseDesc: {
    CN: '我们授予您非排他性、不可转让的许可，以使用本网站提供的工具和服务。',
    US: 'We grant you a non-exclusive, non-transferable license to use the tools and services provided on this website.',
    JP: '本ウェブサイトが提供するツールとサービスを使用するための非独占的、譲渡不可のライセンスを付与します。',
    GB: 'We grant you a non-exclusive, non-transferable licence to use the tools and services provided on this website.'
  },
  usageRestrictions: {
    CN: '使用限制',
    US: 'Usage Restrictions',
    JP: '使用制限',
    GB: 'Usage Restrictions'
  },
  usageRestrictionsDesc: {
    CN: '您不得：',
    US: 'You must not:',
    JP: 'あなたは以下のことをしてはなりません：',
    GB: 'You must not:'
  },
  restrictIllegal: {
    CN: '将生成的数据用于非法目的',
    US: 'Use generated data for illegal purposes',
    JP: '生成されたデータを違法な目的に使用する',
    GB: 'Use generated data for illegal purposes'
  },
  restrictAbuse: {
    CN: '滥用或过度使用我们的服务',
    US: 'Abuse or overuse our services',
    JP: 'サービスを乱用または過度に使用する',
    GB: 'Abuse or overuse our services'
  },
  restrictHack: {
    CN: '尝试破解或攻击我们的网站',
    US: 'Attempt to hack or attack our website',
    JP: 'ウェブサイトをハッキングまたは攻撃しようとする',
    GB: 'Attempt to hack or attack our website'
  },
  restrictCopy: {
    CN: '复制、修改或分发我们的服务',
    US: 'Copy, modify, or distribute our services',
    JP: 'サービスを複製、変更、または配布する',
    GB: 'Copy, modify, or distribute our services'
  },
  generatedData: {
    CN: '生成数据',
    US: 'Generated Data',
    JP: '生成データ',
    GB: 'Generated Data'
  },
  generatedDataDesc: {
    CN: '本网站生成的所有数据均为虚拟数据，仅供测试和学习目的使用。生成的数据不代表真实的个人或组织信息。',
    US: 'All data generated by this website is virtual data for testing and learning purposes only. The generated data does not represent real personal or organizational information.',
    JP: '本ウェブサイトで生成されるすべてのデータは、テストと学習目的のみの仮想データです。生成されたデータは、実在の個人または組織の情報を表すものではありません。',
    GB: 'All data generated by this website is virtual data for testing and learning purposes only. The generated data does not represent real personal or organisational information.'
  },
  generatedDataDesc2: {
    CN: '我们不对生成数据的准确性或适用性做任何保证。使用生成的数据造成的任何后果由用户自行承担。',
    US: 'We make no warranties regarding the accuracy or suitability of the generated data. Any consequences resulting from the use of the generated data are the sole responsibility of the user.',
    JP: '生成されたデータの正確性または適合性については一切保証しません。生成されたデータの使用によって生じるいかなる結果も、ユーザーの責任となります。',
    GB: 'We make no warranties regarding the accuracy or suitability of the generated data. Any consequences resulting from the use of the generated data are the sole responsibility of the user.'
  },
  disclaimer: {
    CN: '免责声明',
    US: 'Disclaimer',
    JP: '免責事項',
    GB: 'Disclaimer'
  },
  disclaimerDesc: {
    CN: '本网站按"原样"提供，不提供任何明示或暗示的保证。我们不对因使用本网站而造成的任何损失负责。',
    US: 'This website is provided "as is" without any express or implied warranties. We are not responsible for any damages resulting from the use of this website.',
    JP: '本ウェブサイトは「現状のまま」提供され、明示または黙示の保証は一切ありません。本ウェブサイトの使用によって生じた損害については責任を負いません。',
    GB: 'This website is provided "as is" without any express or implied warranties. We are not responsible for any damages resulting from the use of this website.'
  },
  termsChanges: {
    CN: '政策变更',
    US: 'Policy Changes',
    JP: '規約変更',
    GB: 'Policy Changes'
  },
  termsChangesDesc: {
    CN: '我们保留随时更新此服务条款的权利。任何更改将在此页面发布，建议您定期查看。',
    US: 'We reserve the right to update these terms of service at any time. Any changes will be posted on this page, and we recommend that you check back regularly.',
    JP: 'このサービス規約をいつでも更新する権利を留保します。変更があった場合はこのページに掲載されますので、定期的に確認することをお勧めします。',
    GB: 'We reserve the right to update these terms of service at any time. Any changes will be posted on this page, and we recommend that you check back regularly.'
  },
  termsContact: {
    CN: '如果您对我们的服务条款有任何疑问，请联系我们：',
    US: 'If you have any questions about our terms of service, please contact us:',
    JP: 'サービス規約についてご質問がある場合は、お問い合わせください：',
    GB: 'If you have any questions about our terms of service, please contact us:'
  }
};

export function t(key: string, countryCode: string): string {
  return translations[key]?.[countryCode] || translations[key]?.['CN'] || key;
}