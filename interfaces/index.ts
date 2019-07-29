/*
 * @文件描述: 接口定义
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-07-24 18:05:41
 * @LastEditors: 陈杰
 * @LastEditTime: 2019-07-26 11:29:50
 */

/** 轮播图/banner */
export interface BannerItem {
  text: string;
  keywords: string[];
  img: string;
}

/**雷数优势 */
export interface AdvantageItem {
  img: string;
  title: string;
  subtitle: string;
}

/**产品服务 */
export interface ProductServiceItem {
  img: string;
  url: string;
  title: string;
  subtitle: string;
  description: string;
}

/**合作伙伴 */
export interface PartnerItem {
  img: string;
  text?: string;
  url?: string;
}
