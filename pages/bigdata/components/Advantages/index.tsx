import React from 'react';
import styles from './index.module.less';

interface AdvantageItem {
  img: string;
  texts: string[];
}
export default function Advantages({ advantages = [] }: { advantages: AdvantageItem[] }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>方案优势</div>
      <div className={styles.body}>
        {advantages.map((item, index) => (
          <div className={styles.advantage} key={index}>
            <img alt="方案优势" src={item.img} className={styles.img} />
            {item.texts.map((text, key) => (
              <div key={key} className={styles.text}>
                {text}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
