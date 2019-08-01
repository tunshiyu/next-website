import React from 'react';
import styles from './index.module.less';
import LinkButton from '@components/LinkButton';

export default function Platform({
  title,
  subtitle,
  href,
  img,
}: {
  img: string;
  title: string;
  subtitle?: string;
  href?: string;
}) {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${img})` }}>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
        {href && <LinkButton text="查看详情" type="primary" href={href} />}
      </div>
    </div>
  );
}
