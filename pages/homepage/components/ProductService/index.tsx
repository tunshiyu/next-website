import React from 'react';
import classnames from 'classnames';
import styles from './index.module.less';
import { ProductServiceItem } from 'interfaces';
import LinkButton from '@components/LinkButton';

export default function ProductService({ services }: { services: ProductServiceItem[] }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>产品服务</div>
      <div className={styles.body}>
        {services.map((service, index) => (
          <div
            key={index}
            className={classnames(styles.service, index % 2 !== 0 ? styles.odd : styles.even)}
          >
            <img alt={service.title} src={service.img} className={styles.img} />
            <div className={styles.content}>
              <div className={styles.title}>{service.title}</div>
              <div className={styles.subtitle}>{service.subtitle}</div>
              <div className={styles.desc}>{service.description}</div>
              <LinkButton text="了解详情" href={service.url} className={styles.link} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
