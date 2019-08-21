/*
 * @文件描述:人才招聘
 * @公司: thundersdata
 * @作者: 于效仟
 * @Date: 2019-08-20 19:05:23
 * @LastEditors: 于效仟
 * @LastEditTime: 2019-08-21 11:28:26
 */
import React, { useState } from 'react';
import styles from './index.module.less';
import Head from 'next/head';
import Layout from '@components/Layout';
import Header from '@components/Header';
import ContactUs from '@components/ContactUs';
import Footer from '@components/Footer';
import Banner from '@components/Banner';
import Drawer from '@components/Drawer';
import { technicals, products, designs, operatings } from '../../constant';

export default function Recruitment() {
  const banner = {
    img: '/static/recruitment/banner@2x.png',
    text: '人才招聘',
  };
  // 全部职位
  const all = technicals.concat(products, designs, operatings);
  const btnNodes = [
    {
      text: '全部',
      node: all,
    },
    {
      text: '技术类',
      node: technicals,
    },
    {
      text: '产品类',
      node: products,
    },
    {
      text: '设计类',
      node: designs,
    },
    {
      text: '运营类',
      node: operatings,
    },
  ];
  const [activeKey, handleActiveKey] = useState(0);
  const [data, handleData] = useState(all);
  return (
    <>
      <Head>
        <title>杭州雷数科技有限公司</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.bootcss.com/normalize/8.0.1/normalize.min.css"
        />
      </Head>
      <Layout>
        <div className={styles.page}>
          <Header selectedKeys={['7']} notScrollToTop />
          <Banner banner={banner} />
          <div className={styles.wrap}>
            {/* 职位类型  */}
            <div className={styles.type}>
              <span className={styles.text}>职位类型:</span>
              <div className={styles.btns}>
                {btnNodes.map((item, index) => {
                  return (
                    <a
                      key={index}
                      className={activeKey === index ? styles.active : ''}
                      onClick={() => {
                        handleActiveKey(index);
                        handleData(item.node);
                      }}
                    >
                      {item.text}
                    </a>
                  );
                })}
              </div>
            </div>
            {/* 招聘岗位-抽屉模块 */}
            {data.map((item, index) => {
              return <Drawer key={index} {...item} />;
            })}
          </div>
          <ContactUs />
          <Footer />
        </div>
      </Layout>
    </>
  );
}
