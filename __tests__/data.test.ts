import data from '../stores/data';

describe('data', () => {
  test('getHomeBanners success', async () => {
    await data.getHomeBanners();
    expect(data.homepageBanners).toEqual([
      {
        img: '/static/homepage/banners/1.png',
        text: '赋能传统企业',
        keywords: ['大数据', 'AI', '物联网', '区块链', '金融'],
        symbol: true,
      },
      {
        img: '/static/homepage/banners/2.png',
        texts: ['数字化', '可视化', '金融化', '全链路价值提升'],
        keywords: ['供应链大数据解决方案'],
      },
      {
        img: '/static/homepage/banners/3.png',
        texts: ['物联化', '透明化', '职能化', '助力中国智造'],
        keywords: ['工业大数据解决方案'],
      },
      {
        img: '/static/homepage/banners/4.png',
        texts: ['可追溯', '高效率', '低成本', '实现全程降本增效'],
        keywords: ['物流大数据解决方案'],
      },
      {
        img: '/static/homepage/banners/0.png',
        text: '',
        keywords: [],
      },
    ]);
  });
});
