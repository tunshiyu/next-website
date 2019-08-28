import React from 'react';
import styles from './index.module.less';
import { PartnerItem } from 'interfaces';

export default function Partners({ title, partners }: { title: string; partners: PartnerItem[] }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>{title}</div>
      {/* 当合作伙伴小于7个时，使用居中布局 */}
      <div className={partners.length < 7 ? styles.oneLinecontent : styles.content}>
        {partners.length > 0 &&
          partners.map((partner, index) => {
            if (partner.url) {
              return (
                <a key={index}>
                  <img className={styles.img} src={partner.img} alt={partner.text || ''} />
                </a>
              );
            }
            return (
              <img className={styles.img} key={index} alt={partner.text || ''} src={partner.img} />
            );
          })}
      </div>
    </div>
  );
}
