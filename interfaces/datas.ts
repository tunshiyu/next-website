/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 于效仟
 * @Date: 2019-10-16 16:56:48
 * @LastEditors: 于效仟
 * @LastEditTime: 2019-10-16 19:11:18
 */

import { BannerItem } from './index';

export interface DatasStore {
  homepageBanners: BannerItem[];
  getHomeBanners: () => void;
}
