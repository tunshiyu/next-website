import React from 'react';
import Link from 'next/link';
import styles from './index.module.less';
import { PartnerItem } from 'interfaces';

export default function Partners({ title, partners }: { title: string; partners: PartnerItem[] }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>{title}</div>
      <div className={styles.content}>
        {partners.length > 0 &&
          partners.map((partner, index) => {
            if (partner.url) {
              return (
                <Link key={index} href="">
                  <a>
                    <img className={styles.img} src={partner.img} alt={partner.text || ''} />
                  </a>
                </Link>
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
