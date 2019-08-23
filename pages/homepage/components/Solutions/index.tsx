import React, { useState } from 'react';
import classnames from 'classnames';
import Slider, { Settings } from 'react-slick';
import styles from './index.module.less';

export default function Solutions() {
  const [activeKey, onKeyChange] = useState(0);

  const menus = ['大数据', '金融科技', '智慧园区', '智慧供应链'];

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
    // slidesToShow: 2,
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

  const banners = [
    [
      {
        img: '/static/homepage/solutions/banner01@2x.jpg',
        text: '赋能传统企业',
        keywords: ['大数据+', 'AI+', '物联网+', '区块链+', '金融+'],
      },
      {
        img: '/static/homepage/solutions/banner01@2x.jpg',
        text: '赋能传统企业',
        keywords: ['大数据+', 'AI+', '物联网+', '区块链+', '金融+'],
      },
      {
        img: '/static/homepage/solutions/banner01@2x.jpg',
        text: '赋能传统企业',
        keywords: ['大数据+', 'AI+', '物联网+', '区块链+', '金融+'],
      },
      {
        img: '/static/homepage/solutions/banner01@2x.jpg',
        text: '赋能传统企业',
        keywords: ['大数据+', 'AI+', '物联网+', '区块链+', '金融+'],
      },
      {
        img: '/static/homepage/solutions/banner01@2x.jpg',
        text: '赋能传统企业',
        keywords: ['大数据+', 'AI+', '物联网+', '区块链+', '金融+'],
      },
      {
        img: '/static/homepage/solutions/banner01@2x.jpg',
        text: '赋能传统企业',
        keywords: ['大数据+', 'AI+', '物联网+', '区块链+', '金融+'],
      },
    ],
    [
      {
        img: '/static/homepage/solutions/banner01@2x.jpg',
        text: '赋能传统企业',
        keywords: ['大数据+', 'AI+', '物联网+', '区块链+', '金融+'],
      },
      {
        img: '/static/homepage/solutions/banner01@2x.jpg',
        text: '赋能传统企业',
        keywords: ['大数据+', 'AI+', '物联网+', '区块链+', '金融+'],
      },
      {
        img: '/static/homepage/solutions/banner01@2x.jpg',
        text: '赋能传统企业',
        keywords: ['大数据+', 'AI+', '物联网+', '区块链+', '金融+'],
      },
      {
        img: '/static/homepage/solutions/banner01@2x.jpg',
        text: '赋能传统企业',
        keywords: ['大数据+', 'AI+', '物联网+', '区块链+', '金融+'],
      },
    ],
    [
      {
        img: '/static/homepage/solutions/banner01@2x.jpg',
        text: '赋能传统企业',
        keywords: ['大数据+', 'AI+', '物联网+', '区块链+', '金融+'],
      },
    ],
    [
      {
        img: '/static/homepage/solutions/banner01@2x.jpg',
        text: '赋能传统企业',
        keywords: ['大数据+', 'AI+', '物联网+', '区块链+', '金融+'],
      },
    ],
  ];

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
            <div key={index}>
              <img src={item.img} className={styles.img} />
            </div>
          ))}
      </Slider>
    </div>
  );
}
