import React from 'react';
import styles from './index.module.less';
import classnames from 'classnames';
import { ProductItem } from 'interfaces';

export default function Products({ products }: { products: ProductItem[] }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>产品介绍</div>
      <div className={styles.body}>
        {products.map((product, index) => (
          <div
            key={index}
            className={classnames(styles.product, index % 2 !== 0 ? styles.odd : styles.even)}
          >
            {product.hasVideo ? (
              <video
                src="https://td-prod-public.oss-cn-hangzhou.aliyuncs.com/td/1565057422372018116.mp4"
                className={styles.img}
                webkit-playsinline="true"
                x5-video-player-fullscreen="true"
                x5-video-player-type="h5"
                controls
              ></video>
            ) : (
              <img alt={product.title} src={product.img} className={styles.img} />
            )}
            <div className={styles.content}>
              <div>
                <span className={styles.index}>{++index}</span>
                <span className={styles.title}>{product.title}</span>
              </div>
              <div className={styles.desc}>{product.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
