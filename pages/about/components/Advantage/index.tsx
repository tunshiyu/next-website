import React from 'react';
import styles from './index.module.less';
import { AdvantageItem } from 'interfaces';

export default function Advantage({ advantages }: { advantages: AdvantageItem[] }) {
  return (
    <div className={styles.container}>
      {advantages &&
        advantages.map((item, index) => (
          <div className={styles.advantage} key={index}>
            <img alt="团队优势" src={item.img} className={styles.img} />
            <div className={styles.title}>{item.title}</div>
            <div className={styles.subtitle}>{item.subtitle}</div>
          </div>
        ))}
    </div>
  );
}
