/*
 * @文件描述: 使用场景
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-07-30 11:59:39
 * @LastEditors: 于效仟
 * @LastEditTime: 2019-08-23 17:23:12
 */
import React, { useState } from 'react';
import styles from './index.module.less';

export default function Scenarios() {
  const [flag, handleFlag] = useState(true);
  // 点击按钮滑动距离
  const slideDistance = '525px';
  function slide() {
    if (flag) {
      document.getElementById('slideList')!.style.transform = `translateX(-${slideDistance})`;
    } else {
      document.getElementById('slideList')!.style.transform = 'translateX(0)';
    }
    handleFlag(!flag);
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>使用场景</div>
      <div className={styles.wrap}>
        <ul className={styles.list} id="slideList">
          <li>物流</li>
          <li>工业</li>
          <li>供应链</li>
          <li>酒店</li>
          <li>智慧城市</li>
          <li>机场</li>
          <li>光伏系能源</li>
        </ul>
        <div className={flag ? styles.btnLeft : styles.btnRight} onClick={slide}></div>
      </div>
    </div>
  );
}
