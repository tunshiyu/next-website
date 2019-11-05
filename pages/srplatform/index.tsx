/*
 * @文件描述:数融平台
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-09-14 10:00:34
 * @LastEditors: 于效仟
 * @LastEditTime: 2019-11-05 17:38:42
 */
import React from 'react';
import styles from './index.module.less';
import Head from 'next/head';
import Layout from '@components/Layout';
import Header from '@components/Header';
import Banner from '@components/Banner';
import Footer from '@components/Footer';

export default () => {
  const banner = {
    img: '/static/srplatform/banner@2x.png',
    text: '数融平台',
    subtext: '极简灵活的一站式大数据平台',
  };

  return (
    <>
      <Head>
        <title>数融平台</title>
        <meta name="description" content="极简灵活的一站式大数据平台" />
        <meta name="keywords" content="数据集成,数据开发,数据地图,权限管理,运维监控" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.bootcss.com/normalize/8.0.1/normalize.min.css"
        />
      </Head>
      <Layout>
        <div className={styles.page}>
          <Header selectedKeys={['2-1']} />
          <Banner banner={banner} />
          <Footer />
        </div>
      </Layout>
    </>
  );
};
