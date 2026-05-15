import { chinaRegionCodes, provinceCodeMap, cityCodeMap, findDistrictByCode, findDistrictByName } from '@/source/chinaRegion';

export function generateChineseIDCard(provinceName: string, cityName: string, districtName: string, birthday: string, gender: 'male' | 'female'): string {
  let addressCode = '110101';

  if (districtName) {
    const district = findDistrictByName(districtName);
    if (district) {
      addressCode = district.code;
    }
  } else if (cityName && cityCodeMap[cityName]) {
    addressCode = cityCodeMap[cityName];
  } else if (provinceName && provinceCodeMap[provinceName]) {
    const provinceCode = provinceCodeMap[provinceName];
    addressCode = provinceCode.slice(0, 4) + '01';
  }

  const birthDate = birthday.replace(/-/g, '');
  const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  const genderNum = gender === 'male'
    ? (parseInt(randomNum) % 2 === 0 ? randomNum.slice(0, 2) + (parseInt(randomNum[2]) + 1).toString() : randomNum)
    : (parseInt(randomNum) % 2 === 1 ? randomNum.slice(0, 2) + (parseInt(randomNum[2]) - 1).toString() : randomNum);

  const baseNum = `${addressCode}${birthDate}${genderNum}`;
  const checkSum = calculateChineseIDCardChecksum(baseNum);

  return `${baseNum}${checkSum}`;
}

function calculateChineseIDCardChecksum(baseNum: string): string {
  const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  const checkCodes = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];

  let sum = 0;
  for (let i = 0; i < 17; i++) {
    sum += parseInt(baseNum[i]) * weights[i];
  }

  return checkCodes[sum % 11];
}

export function validateChineseIDCard(idCard: string): boolean {
  const cleaned = idCard.replace(/\s/g, '').toUpperCase();
  
  if (!/^\d{17}[\dX]$/.test(cleaned)) return false;

  const baseNum = cleaned.slice(0, 17);
  const checkSum = calculateChineseIDCardChecksum(baseNum);
  return checkSum === cleaned[17];
}

export function generateOrganizationCode(): string {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let code = '';
  for (let i = 0; i < 8; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }

  const checkSum = calculateOrganizationChecksum(code);
  return `${code}-${checkSum}`;
}

function calculateOrganizationChecksum(code: string): string {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const weights = [3, 7, 9, 10, 5, 8, 4, 2];

  let sum = 0;
  for (let i = 0; i < 8; i++) {
    sum += chars.indexOf(code[i]) * weights[i];
  }

  const remainder = sum % 11;
  const checkValue = 11 - remainder;
  if (checkValue === 10) return 'X';
  if (checkValue === 11) return '0';
  return checkValue.toString();
}

export function validateOrganizationCode(code: string): boolean {
  const cleaned = code.replace(/-/g, '').toUpperCase();
  
  if (!/^[A-Z0-9]{8}[A-Z0-9X]$/.test(cleaned)) return false;

  const baseCode = cleaned.slice(0, 8);
  const checkSum = calculateOrganizationChecksum(baseCode);
  return checkSum === cleaned[8];
}

export function generateSocialCreditCode(): string {
  const chars = '0123456789ABCDEFGHJKLMNPQRTUWXY';
  const registerCodes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const categoryCodes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'T', 'U', 'W', 'X', 'Y'];
  
  let code = '';
  code += registerCodes[Math.floor(Math.random() * registerCodes.length)];
  code += categoryCodes[Math.floor(Math.random() * categoryCodes.length)];
  
  const provinceCodes = ['11', '12', '13', '14', '15', '21', '22', '23', '31', '32', '33', '34', '35', '36', '37', '41', '42', '43', '44', '45', '46', '50', '51', '52', '53', '54', '61', '62', '63', '64', '65', '71', '81', '82'];
  code += provinceCodes[Math.floor(Math.random() * provinceCodes.length)];
  
  const cityCode = Math.floor(Math.random() * 100).toString().padStart(2, '0');
  code += cityCode;
  
  const districtCode = Math.floor(Math.random() * 100).toString().padStart(2, '0');
  code += districtCode;
  
  for (let i = 0; i < 9; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }

  const checkSum = calculateSocialCreditChecksum(code);
  return `${code}${checkSum}`;
}

function calculateSocialCreditChecksum(code: string): string {
  const chars = '0123456789ABCDEFGHJKLMNPQRTUWXY';
  
  let sum = 0;
  for (let i = 0; i < 17; i++) {
    const charValue = chars.indexOf(code[i]);
    const weight = Math.pow(3, i) % 31;
    sum += charValue * weight;
  }

  const remainder = sum % 31;
  const checkValue = 31 - remainder;
  if (checkValue === 31) return '0';
  return chars[checkValue];
}

export function validateSocialCreditCode(code: string): boolean {
  const cleaned = code.replace(/\s/g, '').toUpperCase();
  
  if (!/^[0-9A-Z]{18}$/.test(cleaned)) return false;
  
  const invalidChars = ['I', 'O', 'Z', 'S', 'V'];
  for (const char of invalidChars) {
    if (cleaned.includes(char)) return false;
  }

  const baseCode = cleaned.slice(0, 17);
  const checkSum = calculateSocialCreditChecksum(baseCode);
  return checkSum === cleaned[17];
}

export function generateMobileCN(): string {
  const prefixes = ['130', '131', '132', '133', '134', '135', '136', '137', '138', '139',
                   '145', '147', '148',
                   '150', '151', '152', '153', '155', '156', '157', '158', '159',
                   '162', '165', '166', '167',
                   '170', '171', '172', '173', '175', '176', '177', '178',
                   '180', '181', '182', '183', '184', '185', '186', '187', '188', '189',
                   '191', '193', '195', '196', '197', '198', '199'];

  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = Math.floor(Math.random() * 100000000).toString().padStart(8, '0');

  return `${prefix}${suffix}`;
}

export function validateMobileCN(phone: string): boolean {
  const cleaned = phone.replace(/\s/g, '');
  return /^1[3-9]\d{9}$/.test(cleaned);
}

export function generateMobileUS(): string {
  const areaCodes = ['201', '212', '213', '301', '310', '312', '313', '323', '404', '415',
                     '416', '503', '512', '513', '617', '619', '702', '713', '718', '808',
                     '818', '901', '917', '949', '954'];

  const areaCode = areaCodes[Math.floor(Math.random() * areaCodes.length)];
  const central = Math.floor(Math.random() * 900 + 100).toString();
  const line = Math.floor(Math.random() * 10000).toString().padStart(4, '0');

  return `(${areaCode}) ${central}-${line}`;
}

export function validateMobileUS(phone: string): boolean {
  const cleaned = phone.replace(/[\s()-]/g, '');
  return /^\d{10}$/.test(cleaned) && !cleaned.startsWith('0') && !cleaned.startsWith('1');
}

export function generateMobileJP(): string {
  const prefixes = ['090', '080', '070', '060', '050'];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const number = Math.floor(Math.random() * 100000000).toString().padStart(8, '0');

  return `${prefix}-${number.slice(0, 4)}-${number.slice(4)}`;
}

export function validateMobileJP(phone: string): boolean {
  const cleaned = phone.replace(/[\s-]/g, '');
  return /^0[5-9]0\d{8}$/.test(cleaned);
}

export function generateMobileUK(): string {
  const prefixes = ['071', '072', '073', '074', '075', '076', '077', '078', '079'];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const number = Math.floor(Math.random() * 10000000).toString().padStart(8, '0');

  return `${prefix}${number}`;
}

export function validateMobileUK(phone: string): boolean {
  const cleaned = phone.replace(/[\s-]/g, '');
  return /^(07|\+447)\d{9}$/.test(cleaned);
}

export function generateBankCardCN(): string {
  const cardBinList = [
    '622202', '622203', '622848', '622845', '622700', '622708',
    '622320', '622319', '622588', '622599', '622662', '622666',
    '622909', '622919', '622166', '622155', '622188', '622199',
    '436742', '436745', '458060', '458061', '518710', '518718',
    '523052', '524047', '552245', '552288', '622622', '622630'
  ];

  const cardBin = cardBinList[Math.floor(Math.random() * cardBinList.length)];
  let cardNumber = cardBin;

  for (let i = 0; i < 10; i++) {
    cardNumber += Math.floor(Math.random() * 10).toString();
  }

  const checkSum = calculateBankCardChecksum(cardNumber);
  return `${cardNumber}${checkSum}`;
}

export function generateBankCardUS(): string {
  const cardBinList = [
    '411111', '411112', '422222', '433333', '444444', '455555',
    '511111', '522222', '533333', '544444', '555555', '601111'
  ];

  const cardBin = cardBinList[Math.floor(Math.random() * cardBinList.length)];
  let cardNumber = cardBin;

  for (let i = 0; i < 10; i++) {
    cardNumber += Math.floor(Math.random() * 10).toString();
  }

  const checkSum = calculateBankCardChecksum(cardNumber);
  return `${cardNumber}${checkSum}`;
}

function calculateBankCardChecksum(cardNumber: string): string {
  let sum = 0;
  let alternate = false;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber[i]);

    if (alternate) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    alternate = !alternate;
  }

  const remainder = sum % 10;
  return remainder === 0 ? '0' : (10 - remainder).toString();
}

export function validateBankCard(cardNumber: string): boolean {
  const cleaned = cardNumber.replace(/\s/g, '');

  if (!/^\d{13,19}$/.test(cleaned)) return false;

  const baseNumber = cleaned.slice(0, -1);
  const checkSum = calculateBankCardChecksum(baseNumber);
  return checkSum === cleaned[cleaned.length - 1];
}

export function generateUSSSN(): string {
  const areaCodes = [];
  for (let i = 1; i < 900; i++) {
    if (i !== 666 && !(i >= 900 && i <= 999)) {
      areaCodes.push(i.toString().padStart(3, '0'));
    }
  }

  const groups = [];
  for (let i = 1; i < 100; i++) {
    groups.push(i.toString().padStart(2, '0'));
  }

  const serials = [];
  for (let i = 1; i < 10000; i++) {
    serials.push(i.toString().padStart(4, '0'));
  }

  const area = areaCodes[Math.floor(Math.random() * areaCodes.length)];
  const group = groups[Math.floor(Math.random() * groups.length)];
  const serial = serials[Math.floor(Math.random() * serials.length)];

  return `${area}-${group}-${serial}`;
}

export function validateUSSSN(ssn: string): boolean {
  const cleaned = ssn.replace(/-/g, '');

  if (!/^\d{9}$/.test(cleaned)) return false;

  const area = cleaned.slice(0, 3);
  const group = cleaned.slice(3, 5);
  const serial = cleaned.slice(5, 9);

  if (area === '000' || area === '666' || (parseInt(area) >= 900 && parseInt(area) <= 999)) return false;
  if (group === '00') return false;
  if (serial === '0000') return false;

  return true;
}

export function generateUSEIN(): string {
  const prefixes = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
                    '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24',
                    '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36',
                    '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48',
                    '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
                    '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72',
                    '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84',
                    '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96',
                    '97', '98', '99'];
  
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = Math.floor(Math.random() * 10000000).toString().padStart(7, '0');
  
  return `${prefix}-${suffix}`;
}

export function validateUSEIN(ein: string): boolean {
  const cleaned = ein.replace(/-/g, '');
  return /^\d{2}-\d{7}$/.test(cleaned);
}

export function generateJapaneseMyNumber(): string {
  let number = '';
  for (let i = 0; i < 11; i++) {
    number += Math.floor(Math.random() * 10).toString();
  }
  
  const checkSum = calculateJapaneseMyNumberChecksum(number);
  return `${number}${checkSum}`;
}

function calculateJapaneseMyNumberChecksum(number: string): string {
  let sum = 0;
  const weights = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1];
  
  for (let i = 0; i < 11; i++) {
    let product = parseInt(number[i]) * weights[i];
    sum += Math.floor(product / 10) + (product % 10);
  }
  
  const remainder = sum % 10;
  const checkValue = 10 - remainder;
  return checkValue === 10 ? '0' : checkValue.toString();
}

export function validateJapaneseMyNumber(number: string): boolean {
  const cleaned = number.replace(/\s/g, '');
  
  if (!/^\d{12}$/.test(cleaned)) return false;
  
  const baseNumber = cleaned.slice(0, 11);
  const checkSum = calculateJapaneseMyNumberChecksum(baseNumber);
  return checkSum === cleaned[11];
}

export function generateJapaneseCorporateNumber(): string {
  let number = '4';
  for (let i = 0; i < 11; i++) {
    number += Math.floor(Math.random() * 10).toString();
  }
  
  const checkSum = calculateJapaneseCorporateNumberChecksum(number);
  return `${number}${checkSum}`;
}

function calculateJapaneseCorporateNumberChecksum(number: string): string {
  let sum = 0;
  const weights = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
  
  for (let i = 0; i < 12; i++) {
    let product = parseInt(number[i]) * weights[i];
    sum += Math.floor(product / 10) + (product % 10);
  }
  
  const remainder = sum % 10;
  const checkValue = 10 - remainder;
  return checkValue === 10 ? '0' : checkValue.toString();
}

export function validateJapaneseCorporateNumber(number: string): boolean {
  const cleaned = number.replace(/\s/g, '');
  
  if (!/^4\d{12}$/.test(cleaned)) return false;
  
  const baseNumber = cleaned.slice(0, 12);
  const checkSum = calculateJapaneseCorporateNumberChecksum(baseNumber);
  return checkSum === cleaned[12];
}

export function generateUKNationalInsurance(): string {
  const prefixes = ['AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM',
                    'AN', 'AO', 'AP', 'AR', 'AS', 'AT', 'AU', 'AV', 'AW', 'AX', 'AY', 'AZ',
                    'BA', 'BB', 'BC', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BK', 'BL',
                    'BM', 'BN', 'BO', 'BP', 'BR', 'BS', 'BT', 'BU', 'BV', 'BW', 'BX', 'BY', 'BZ'];
  
  const invalidPrefixes = ['BG', 'GB', 'NK', 'KN', 'TN', 'NT', 'ZZ'];
  const validPrefixes = prefixes.filter(p => !invalidPrefixes.includes(p));
  
  const prefix = validPrefixes[Math.floor(Math.random() * validPrefixes.length)];
  const numbers = Math.floor(Math.random() * 900000 + 100000).toString();
  const suffixes = ['A', 'B', 'C', 'D'];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  return `${prefix}${numbers}${suffix}`;
}

export function validateUKNationalInsurance(ni: string): boolean {
  const cleaned = ni.replace(/\s/g, '').toUpperCase();
  
  if (!/^[A-Z]{2}\d{6}[A-D]$/.test(cleaned)) return false;
  
  const prefix = cleaned.slice(0, 2);
  const invalidPrefixes = ['BG', 'GB', 'NK', 'KN', 'TN', 'NT', 'ZZ'];
  
  return !invalidPrefixes.includes(prefix);
}

export function generateUKCompanyNumber(): string {
  const prefixes = ['0', 'SC', 'NI', 'FC', 'RC', 'SA', 'SF', 'SL', 'SO', 'SP', 'SR', 'SZ', 'ZC', 'ZZ'];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  
  let number = '';
  for (let i = 0; i < 8; i++) {
    number += Math.floor(Math.random() * 10).toString();
  }
  
  return `${prefix}${number}`;
}

export function validateUKCompanyNumber(number: string): boolean {
  const cleaned = number.replace(/\s/g, '').toUpperCase();
  
  return /^(?:[A-Z]{2})?\d{8}$/.test(cleaned);
}

export { chinaRegionCodes, provinceCodeMap, cityCodeMap, findDistrictByCode, findDistrictByName };