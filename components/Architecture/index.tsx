import React from 'react';
import styles from './index.module.less';

export default function Architecture({ img }: { img: string }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>解决方案架构</div>
      <img alt="解决方案架构图" src={img} className={styles.img} />
    </div>
  );
}
