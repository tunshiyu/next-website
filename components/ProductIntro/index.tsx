/*
 * @文件描述: 产品介绍
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-07-30 10:47:59
 * @LastEditors: 陈杰
 * @LastEditTime: 2019-07-30 10:54:10
 */
import React from 'react';
import styles from './index.module.less';

export default function ProductIntro({ text, img }: { text: string; img?: string }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>产品简介</div>
      <div className={styles.text}>{text}</div>
      {img && <img alt="产品简介" src={img} className={styles.img} />}
    </div>
  );
}
