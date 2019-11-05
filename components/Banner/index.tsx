import React from 'react';
import Slider, { Settings } from 'react-slick';
import styles from './index.module.less';
import { BannerItem, Banner } from 'interfaces';
import Router from 'next/router';

export default ({ banners, banner }: { banners?: BannerItem[]; banner?: Banner }) => {
  let sliderObj: {
    slickNext: () => void;
    slickPrev: () => void;
  };
  const settings: Settings = {
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 5000,
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
    <div className={styles.bannerWrap}>
      <span className={styles.leftBtn} onClick={() => sliderObj!.slickPrev()}></span>
      <span className={styles.rightBtn} onClick={() => sliderObj!.slickNext()}></span>
      <Slider {...settings} ref={slider => (sliderObj = slider!)}>
        {banners &&
          banners.length > 0 &&
          banners.map((item, index) => (
            <div className={styles.bannersWrap} key={index}>
              <div
                className={styles.banners}
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                {item.keywords.length > 0 && (
                  <div className={styles.keywords}>
                    {item.keywords.map(keyword => (
                      <span key={keyword} className={item.symbol && styles.keyword}>
                        {keyword}
                      </span>
                    ))}
                  </div>
                )}
                {item.text && <div className={styles.text}>{item.text}</div>}
                {item.texts && (
                  <div className={styles.texts}>
                    {item.texts.map((text, index) => (
                      <span key={index}>{text}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
      </Slider>
      <div className={styles.cards}>
        <div className={styles.card}>
          <span onClick={() => Router.push('/srplatform').then(() => window.scrollTo(0, 0))}>
            数融平台
          </span>
          <span>极简灵活的一站式大数据平台</span>
        </div>
        <div className={styles.card}>
          <span onClick={() => Router.push('/srcube').then(() => window.scrollTo(0, 0))}>
            待开发
          </span>
          <span>待开发</span>
        </div>
        <div className={styles.card}>
          <span onClick={() => Router.push('/srintel').then(() => window.scrollTo(0, 0))}>
            待开发
          </span>
          <span>待开发</span>
        </div>
      </div>
      <div className={styles.mouseImg}></div>
    </div>
  );
};
