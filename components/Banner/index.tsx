import React from 'react';
import Slider, { Settings } from 'react-slick';
import styles from './index.module.less';
import { BannerItem, Banner } from 'interfaces';

export default ({ banners, banner }: { banners?: BannerItem[]; banner?: Banner }) => {
  const settings: Settings = {
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 1500,
    speed: 2000,
    pauseOnHover: false,
    appendDots: dots => (
      <div>
        <ul className={styles.slickDots}>{dots}</ul>
      </div>
    ),
  };
  if (banner) {
    return (
      <div className={styles.banner}>
        <img alt="数融平台" src={banner.img} className={styles.img} />
        <div className={styles.content}>
          {banner.text && <div className={styles.text}>{banner.text}</div>}
          {banner.subtext && <div className={styles.subtext}>{banner.subtext}</div>}
        </div>
      </div>
    );
  }
  return (
    <Slider {...settings}>
      {banners &&
        banners.length > 0 &&
        banners.map((item, index) => (
          <div key={index}>
            <div
              className={styles.banners}
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
};
