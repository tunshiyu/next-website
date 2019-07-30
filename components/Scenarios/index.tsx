/*
 * @文件描述: 使用场景
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-07-30 11:59:39
 * @LastEditors: 陈杰
 * @LastEditTime: 2019-07-30 13:38:17
 */
import React from 'react';
import styles from './index.module.less';
import { ScenarioItem } from 'interfaces';
import Slider, { Settings } from 'react-slick';

export default function Scenarios({ scenarios }: { scenarios: ScenarioItem[] }) {
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

  return (
    <div className={styles.container}>
      <div className={styles.header}>使用场景</div>
      <div className={styles.body}>
        <Slider {...settings}>
          {scenarios.map((scenario, index) => (
            <div key={index}>
              <img src={scenario.img} alt={scenario.text} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
