import React from 'react';
import styles from './index.module.less';
import { AdvantageItem } from 'interfaces';

export default function Advantages({ advantages = [] }: { advantages: AdvantageItem[] }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>雷数优势</div>
      <div className={styles.content}>
        {advantages.map((advantage, index) => (
          <div key={index} className={styles.advantage}>
            <img alt={advantage.title} src={advantage.img} className={styles.img} />
            <div className={styles.title}>{advantage.title}</div>
            <div className={styles.subtitle}>{advantage.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
