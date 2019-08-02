import React from 'react';
import styles from './index.module.less';
import { MajorProductItem } from 'interfaces';

export default function MajorProducts({ products }: { products: MajorProductItem[] }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>主要产品</div>
      <div className={styles.body}>
        {products.map((product, index) => (
          <div className={styles.product} key={index}>
            <img alt={product.title} src={product.img} className={styles.img} />
            <div className={styles.title}>{product.title}</div>
            <div className={styles.subtitle}>{product.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
