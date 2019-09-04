import React, { useEffect } from 'react';
import styles from './index.module.less';
import { PartnerItem } from 'interfaces';

export default function Partners({ title, partners }: { title: string; partners: PartnerItem[] }) {
  // 当图片小于7个不能占满一行时，获取伙伴数量并设置到样式对象上储存以供less读取
  useEffect(() => {
    partners.length < 7 && document.body.style.setProperty('--length', `${partners.length}`);
  });
  return (
    <div className={styles.container}>
      <div className={styles.header}>{title}</div>
      {/* 当合作伙伴小于7个时 */}
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
