/*
 * @文件描述: 使用场景
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-07-30 11:59:39
 * @LastEditors: 于效仟
 * @LastEditTime: 2019-08-23 17:47:51
 */
import React, { useState } from 'react';
import styles from './index.module.less';

export default function Scenarios() {
  const [flag, handleFlag] = useState(true);
  // 点击按钮滑动距离
  const slideDistance = '525px';
  // 场景
  const scenarios = ['物流', '工业', '供应链', '酒店', '智慧城市', '机场', '光伏系能源'];
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
          {scenarios.map((scenario, index) => (
            <li key={index}>{scenario}</li>
          ))}
        </ul>
        <div className={flag ? styles.btnLeft : styles.btnRight} onClick={slide}></div>
      </div>
    </div>
  );
}
