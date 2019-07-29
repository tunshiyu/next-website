import React from 'react';
import Slider, { Settings } from 'react-slick';
import styles from './index.module.less';
import { BannerItem } from 'interfaces';

export default function Banner({ banners }: { banners: BannerItem[] }) {
  const settings: Settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 2000,
    pauseOnHover: false,
    appendDots: dots => (
      <div>
        <ul className={styles.slickDots}>{dots}</ul>
      </div>
    ),
  };
  return (
    <Slider {...settings}>
      {banners.length > 0 &&
        banners.map((item, index) => (
          <div key={index}>
            <div
              className={styles.banner}
              style={{
                backgroundImage: `url(${item.img})`,
              }}
            >
              {item.keywords.length > 0 && (
                <div className={styles.keywords}>
                  {item.keywords.map(keyword => (
                    <span key={keyword}>{keyword}</span>
                  ))}
                </div>
              )}
              {item.text && <div className={styles.text}>{item.text}</div>}
            </div>
          </div>
        ))}
    </Slider>
  );
}
