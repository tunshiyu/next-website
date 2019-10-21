/*
 * @文件描述: 核心store配置
 * @公司: thundersdata
 * @作者: 于效仟
 * @Date: 2019-10-16 16:19:28
 * @LastEditors: 于效仟
 * @LastEditTime: 2019-10-16 19:05:09
 */
import datasStore from './data';
import Icestore from '@ice/store';
import logger from '@ice/store-logger';

const middlewares = [];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const icestore = new Icestore();
const stores = {
  datasStore,
};
// icestore.applyMiddleware(middlewares);
Object.keys(stores).forEach(key => icestore.registerStore(key, stores[key]));
export default icestore;
