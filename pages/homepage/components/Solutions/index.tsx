import React, { useState } from 'react';
import styles from './index.module.less';
// import Router from 'next/router';
import classnames from 'classnames';
import Slider, { Settings } from 'react-slick';
import { BANNERS } from '../../../../constant';

export default function Solutions() {
  const [activeKey, onKeyChange] = useState(0);
  const menus = ['大数据', '金融科技', '智慧园区', '智慧供应链'];
  const banners = BANNERS;

  const settings: Settings = {
    dots: true,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 2,
    appendDots: dots => (
      <div>
        <ul className={styles.slickDots}>{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          centerPadding: '280px',
          slidesToShow: 1,
        },
      },
    ],
  };
  const onePicSettings: Settings = {
    dots: true,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: '800px',
    appendDots: dots => (
      <div>
        <ul className={styles.slickDots}>{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          centerPadding: '280px',
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>解决方案</div>
      <ul className={styles.menu}>
        {menus.map((menu, index) => (
          <li
            key={index}
            className={classnames(
              styles.menuitem,
              activeKey === index ? styles.active : styles.inactive,
            )}
            onClick={() => onKeyChange(index)}
          >
            {menu}
          </li>
        ))}
      </ul>
      <Slider
        {...(banners[activeKey].length > 1 ? settings : onePicSettings)}
        className={banners[activeKey].length === 1 && styles.onePicWrap}
      >
        {banners.length > 0 &&
          banners[activeKey] &&
          banners[activeKey].map((item, index) => (
            <div
              className={styles.wrap}
              key={index}
              onClick={() => {
                // 暂时保留，跳转的点击触发后面会加到一个文本上
                // item.linkUrl && Router.push({ pathname: item.linkUrl });
              }}
            >
              <img src={item.url} className={styles.img} />
              <div className={styles.bannerText}>
                <div className={styles.title}>{item.keywords[0]}</div>
                <div className={styles.content}>{item.text}</div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}
