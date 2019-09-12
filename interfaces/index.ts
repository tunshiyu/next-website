/*
 * @文件描述: 接口定义
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-07-24 18:05:41
 * @LastEditors: 于效仟
 * @LastEditTime: 2019-09-12 11:47:51
 */

export interface Banner {
  img: string;
  text: string;
  subtext?: string;
}
/** 轮播图/banner */
export interface BannerItem {
  // 附标题是单行文本时
  text?: string;
  // 附标题是多行文本时
  texts?: string[];
  keywords: string[];
  img: string;
  // 用于添加文字中的符号
  symbol?: boolean;
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

/**产品介绍 */
export interface ProductItem {
  img?: string;
  title: string;
  desc: string;
  hasVideo?: boolean;
}

/**使用场景 */
export interface ScenarioItem {
  text: string;
  img: string;
}

/**方案介绍 */
export interface SolutionItem {
  img: string;
  text: string;
  subtext?: string;
  href?: string;
}

/**主要产品 */
export interface MajorProductItem {
  img: string;
  title: string;
  subtitle: string;
}
