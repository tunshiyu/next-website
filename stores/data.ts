/*
 * @文件描述: 数据相关存储
 * @公司: thundersdata
 * @作者: 于效仟
 * @Date: 2019-10-16 16:20:02
 * @LastEditors: 于效仟
 * @LastEditTime: 2019-10-21 10:18:30
 */
import { DatasStore } from '../interfaces/datas';

const datasStore: DatasStore = {
  homepageBanners: [],

  // 获取首页banner图
  async getHomeBanners() {
    this.homepageBanners = await new Promise(resolve =>
      setTimeout(() => {
        resolve([
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
      }, 100),
    );
    return this.homepageBanners;
  },
};

export default datasStore;
