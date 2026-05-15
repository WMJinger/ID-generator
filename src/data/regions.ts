export interface Region {
  code: string;
  name: string;
  nameEn: string;
  provinces?: { code: string; name: string; nameEn: string; cities?: { code: string; name: string; nameEn: string }[] }[];
}

export const chinaRegions: Region[] = [
  {
    code: '11',
    name: '北京市',
    nameEn: 'Beijing',
    provinces: [
      { code: '110000', name: '北京市', nameEn: 'Beijing', cities: [
        { code: '110101', name: '东城区', nameEn: 'Dongcheng' },
        { code: '110102', name: '西城区', nameEn: 'Xicheng' },
        { code: '110105', name: '朝阳区', nameEn: 'Chaoyang' },
        { code: '110106', name: '丰台区', nameEn: 'Fengtai' },
        { code: '110107', name: '石景山区', nameEn: 'Shijingshan' },
        { code: '110108', name: '海淀区', nameEn: 'Haidian' },
        { code: '110109', name: '门头沟区', nameEn: 'Mentougou' },
        { code: '110111', name: '房山区', nameEn: 'Fangshan' },
        { code: '110112', name: '通州区', nameEn: 'Tongzhou' },
        { code: '110113', name: '顺义区', nameEn: 'Shunyi' },
        { code: '110114', name: '昌平区', nameEn: 'Changping' },
        { code: '110115', name: '大兴区', nameEn: 'Daxing' },
        { code: '110116', name: '怀柔区', nameEn: 'Huairou' },
        { code: '110117', name: '平谷区', nameEn: 'Pinggu' },
        { code: '110118', name: '密云区', nameEn: 'Miyun' },
        { code: '110119', name: '延庆区', nameEn: 'Yanqing' },
      ]}
    ]
  },
  {
    code: '31',
    name: '上海市',
    nameEn: 'Shanghai',
    provinces: [
      { code: '310000', name: '上海市', nameEn: 'Shanghai', cities: [
        { code: '310101', name: '黄浦区', nameEn: 'Huangpu' },
        { code: '310104', name: '徐汇区', nameEn: 'Xuhui' },
        { code: '310105', name: '长宁区', nameEn: 'Changning' },
        { code: '310106', name: '静安区', nameEn: 'Jing\'an' },
        { code: '310107', name: '普陀区', nameEn: 'Putuo' },
        { code: '310109', name: '虹口区', nameEn: 'Hongkou' },
        { code: '310110', name: '杨浦区', nameEn: 'Yangpu' },
        { code: '310112', name: '闵行区', nameEn: 'Minhang' },
        { code: '310113', name: '宝山区', nameEn: 'Baoshan' },
        { code: '310114', name: '嘉定区', nameEn: 'Jiading' },
        { code: '310115', name: '浦东新区', nameEn: 'Pudong New Area' },
        { code: '310116', name: '金山区', nameEn: 'Jinshan' },
        { code: '310117', name: '松江区', nameEn: 'Songjiang' },
        { code: '310118', name: '青浦区', nameEn: 'Qingpu' },
        { code: '310120', name: '奉贤区', nameEn: 'Fengxian' },
        { code: '310151', name: '崇明区', nameEn: 'Chongming' },
      ]}
    ]
  },
  {
    code: '44',
    name: '广东省',
    nameEn: 'Guangdong',
    provinces: [
      { code: '440000', name: '广东省', nameEn: 'Guangdong', cities: [
        { code: '440100', name: '广州市', nameEn: 'Guangzhou' },
        { code: '440200', name: '韶关市', nameEn: 'Shaoguan' },
        { code: '440300', name: '深圳市', nameEn: 'Shenzhen' },
        { code: '440400', name: '珠海市', nameEn: 'Zhuhai' },
        { code: '440500', name: '汕头市', nameEn: 'Shantou' },
        { code: '440600', name: '佛山市', nameEn: 'Foshan' },
        { code: '440700', name: '江门市', nameEn: 'Jiangmen' },
        { code: '440800', name: '湛江市', nameEn: 'Zhanjiang' },
        { code: '440900', name: '茂名市', nameEn: 'Maoming' },
        { code: '441200', name: '肇庆市', nameEn: 'Zhaoqing' },
        { code: '441300', name: '惠州市', nameEn: 'Huizhou' },
        { code: '441400', name: '梅州市', nameEn: 'Meizhou' },
        { code: '441500', name: '汕尾市', nameEn: 'Shanwei' },
        { code: '441600', name: '河源市', nameEn: 'Heyuan' },
        { code: '441700', name: '阳江市', nameEn: 'Yangjiang' },
        { code: '441800', name: '清远市', nameEn: 'Qingyuan' },
        { code: '441900', name: '东莞市', nameEn: 'Dongguan' },
        { code: '442000', name: '中山市', nameEn: 'Zhongshan' },
        { code: '445100', name: '潮州市', nameEn: 'Chaozhou' },
        { code: '445200', name: '揭阳市', nameEn: 'Jieyang' },
        { code: '445300', name: '云浮市', nameEn: 'Yunfu' },
      ]}
    ]
  },
  {
    code: '33',
    name: '浙江省',
    nameEn: 'Zhejiang',
    provinces: [
      { code: '330000', name: '浙江省', nameEn: 'Zhejiang', cities: [
        { code: '330100', name: '杭州市', nameEn: 'Hangzhou' },
        { code: '330200', name: '宁波市', nameEn: 'Ningbo' },
        { code: '330300', name: '温州市', nameEn: 'Wenzhou' },
        { code: '330400', name: '嘉兴市', nameEn: 'Jiaxing' },
        { code: '330500', name: '湖州市', nameEn: 'Huzhou' },
        { code: '330600', name: '绍兴市', nameEn: 'Shaoxing' },
        { code: '330700', name: '金华市', nameEn: 'Jinhua' },
        { code: '330800', name: '衢州市', nameEn: 'Quzhou' },
        { code: '330900', name: '舟山市', nameEn: 'Zhoushan' },
        { code: '331000', name: '台州市', nameEn: 'Taizhou' },
        { code: '331100', name: '丽水市', nameEn: 'Lishui' },
      ]}
    ]
  },
  {
    code: '32',
    name: '江苏省',
    nameEn: 'Jiangsu',
    provinces: [
      { code: '320000', name: '江苏省', nameEn: 'Jiangsu', cities: [
        { code: '320100', name: '南京市', nameEn: 'Nanjing' },
        { code: '320200', name: '无锡市', nameEn: 'Wuxi' },
        { code: '320300', name: '徐州市', nameEn: 'Xuzhou' },
        { code: '320400', name: '常州市', nameEn: 'Changzhou' },
        { code: '320500', name: '苏州市', nameEn: 'Suzhou' },
        { code: '320600', name: '南通市', nameEn: 'Nantong' },
        { code: '320700', name: '连云港市', nameEn: 'Lianyungang' },
        { code: '320800', name: '淮安市', nameEn: 'Huaian' },
        { code: '320900', name: '盐城市', nameEn: 'Yancheng' },
        { code: '321000', name: '扬州市', nameEn: 'Yangzhou' },
        { code: '321100', name: '镇江市', nameEn: 'Zhenjiang' },
        { code: '321200', name: '泰州市', nameEn: 'Taizhou' },
        { code: '321300', name: '宿迁市', nameEn: 'Suqian' },
      ]}
    ]
  },
  {
    code: '35',
    name: '福建省',
    nameEn: 'Fujian',
    provinces: [
      { code: '350000', name: '福建省', nameEn: 'Fujian', cities: [
        { code: '350100', name: '福州市', nameEn: 'Fuzhou' },
        { code: '350200', name: '厦门市', nameEn: 'Xiamen' },
        { code: '350300', name: '莆田市', nameEn: 'Putian' },
        { code: '350400', name: '三明市', nameEn: 'Sanming' },
        { code: '350500', name: '泉州市', nameEn: 'Quanzhou' },
        { code: '350600', name: '漳州市', nameEn: 'Zhangzhou' },
        { code: '350700', name: '南平市', nameEn: 'Nanping' },
        { code: '350800', name: '龙岩市', nameEn: 'Longyan' },
        { code: '350900', name: '宁德市', nameEn: 'Ningde' },
      ]}
    ]
  },
  {
    code: '43',
    name: '湖南省',
    nameEn: 'Hunan',
    provinces: [
      { code: '430000', name: '湖南省', nameEn: 'Hunan', cities: [
        { code: '430100', name: '长沙市', nameEn: 'Changsha' },
        { code: '430200', name: '株洲市', nameEn: 'Zhuzhou' },
        { code: '430300', name: '湘潭市', nameEn: 'Xiangtan' },
        { code: '430400', name: '衡阳市', nameEn: 'Hengyang' },
        { code: '430500', name: '邵阳市', nameEn: 'Shaoyang' },
        { code: '430600', name: '岳阳市', nameEn: 'Yueyang' },
        { code: '430700', name: '常德市', nameEn: 'Changde' },
        { code: '430800', name: '张家界市', nameEn: 'Zhangjiajie' },
        { code: '430900', name: '益阳市', nameEn: 'Yiyang' },
        { code: '431000', name: '郴州市', nameEn: 'Chenzhou' },
        { code: '431100', name: '永州市', nameEn: 'Yongzhou' },
        { code: '431200', name: '怀化市', nameEn: 'Huaihua' },
        { code: '431300', name: '娄底市', nameEn: 'Loudi' },
      ]}
    ]
  },
  {
    code: '42',
    name: '湖北省',
    nameEn: 'Hubei',
    provinces: [
      { code: '420000', name: '湖北省', nameEn: 'Hubei', cities: [
        { code: '420100', name: '武汉市', nameEn: 'Wuhan' },
        { code: '420200', name: '黄石市', nameEn: 'Huangshi' },
        { code: '420300', name: '十堰市', nameEn: 'Shiyan' },
        { code: '420500', name: '宜昌市', nameEn: 'Yichang' },
        { code: '420600', name: '襄阳市', nameEn: 'Xiangyang' },
        { code: '420700', name: '鄂州市', nameEn: 'Ezhou' },
        { code: '420800', name: '荆门市', nameEn: 'Jingmen' },
        { code: '420900', name: '孝感市', nameEn: 'Xiaogan' },
        { code: '421000', name: '荆州市', nameEn: 'Jingzhou' },
        { code: '421100', name: '黄冈市', nameEn: 'Huanggang' },
        { code: '421200', name: '咸宁市', nameEn: 'Xianning' },
        { code: '421300', name: '随州市', nameEn: 'Suizhou' },
      ]}
    ]
  },
];

export const usRegions: Region[] = [
  { code: 'AL', name: '阿拉巴马州', nameEn: 'Alabama' },
  { code: 'AK', name: '阿拉斯加州', nameEn: 'Alaska' },
  { code: 'AZ', name: '亚利桑那州', nameEn: 'Arizona' },
  { code: 'CA', name: '加利福尼亚州', nameEn: 'California' },
  { code: 'CO', name: '科罗拉多州', nameEn: 'Colorado' },
  { code: 'FL', name: '佛罗里达州', nameEn: 'Florida' },
  { code: 'GA', name: '佐治亚州', nameEn: 'Georgia' },
  { code: 'HI', name: '夏威夷州', nameEn: 'Hawaii' },
  { code: 'IL', name: '伊利诺伊州', nameEn: 'Illinois' },
  { code: 'NY', name: '纽约州', nameEn: 'New York' },
];

export const jpRegions: Region[] = [
  { code: '13', name: '东京都', nameEn: 'Tokyo' },
  { code: '27', name: '大阪府', nameEn: 'Osaka' },
  { code: '28', name: '京都府', nameEn: 'Kyoto' },
  { code: '12', name: '神奈川县', nameEn: 'Kanagawa' },
  { code: '11', name: '埼玉县', nameEn: 'Saitama' },
  { code: '23', name: '爱知县', nameEn: 'Aichi' },
];

export const gbRegions: Region[] = [
  { code: 'ENG', name: '英格兰', nameEn: 'England' },
  { code: 'SCT', name: '苏格兰', nameEn: 'Scotland' },
  { code: 'WLS', name: '威尔士', nameEn: 'Wales' },
  { code: 'NIR', name: '北爱尔兰', nameEn: 'Northern Ireland' },
];

export const countryRegionMap: Record<string, Region[]> = {
  CN: chinaRegions,
  US: usRegions,
  JP: jpRegions,
  GB: gbRegions,
};

export const countries = [
  { code: 'CN', name: '中国', nameEn: 'China', flag: '🇨🇳' },
  { code: 'US', name: '美国', nameEn: 'United States', flag: '🇺🇸' },
  { code: 'JP', name: '日本', nameEn: 'Japan', flag: '🇯🇵' },
  { code: 'GB', name: '英国', nameEn: 'United Kingdom', flag: '🇬🇧' },
];
