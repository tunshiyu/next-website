/*
 * @文件描述: 类型定义
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-08-30 09:42:38
 * @LastEditors: 于效仟
 * @LastEditTime: 2019-09-23 13:17:40
 */
export const tuple = <T extends string[]>(...args: T) => args;
export interface Pagination<T> {
  page: number;
  pageSize: number;
  total: number;
  list: T[];
}
export interface AjaxResponse<T> {
  code: number;
  data: T;
  message: string;
  success: boolean;
}
