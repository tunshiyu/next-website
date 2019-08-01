import React from 'react';
import styles from './index.module.less';
import Head from 'next/head';
import Layout from '@components/Layout';
import Header from '@components/Header';
import Banner from '@components/Banner';
import Partners from '@components/Partners';
import ContactUs from '@components/ContactUs';
import Footer from '@components/Footer';
import ProductIntro from '@components/ProductIntro';
import Products from '@components/Products';
import Scenarios from '@components/Scenarios';

export default () => {
  const banner = {
    img: '/static/srCube/banner@2x.png',
    text: '数融魔方',
    subtext: '灵活简便的数据应用平台',
  };
  const productIntro = {
    text:
      '数融魔方平台主要包含数据分析工具、算法平台、可视化大屏、应用API等子产品， 是自主研发的一款数据应用服务平台，可通过可视化图形配置界面即可自主实现可视化上商业分析、机器学习算法建模， 并通过动态交互式大屏实时掌握业务发展全貌，实现决策职能化！',
  };
  const products = [
    {
      img: '/static/srCube/products/1.png',
      title: '分析平台',
      desc: '商业智能分析，帮企业揭秘数据背后的规律和价值',
    },
    {
      img: '/static/srCube/products/2.png',
      title: '算法平台',
      desc: '智能算法建模，传统企业也可以使用的人工智能',
    },
  ];
  const scenarios = [{ img: '', text: '' }];

  const prefix = '/static/srCube/partners';
  const partners = [
    { img: `${prefix}/1.png`, text: '大海集团' },
    { img: `${prefix}/2.png`, text: '山东大厦' },
    { img: `${prefix}/3.png`, text: '上海机场' },
    { img: `${prefix}/4.png`, text: '白云机场' },
    { img: `${prefix}/5.png`, text: '山东高速' },
    { img: `${prefix}/6.png`, text: '富春控股' },
    { img: `${prefix}/7.png`, text: '首都机场' },
  ];

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
          <Header selectedKeys={['2-2']} />
          <Banner banner={banner} />
          <ProductIntro {...productIntro} />
          <Products products={products} />
          <Scenarios scenarios={scenarios} />
          <Partners title="合作客户" partners={partners} />
          <ContactUs />
          <Footer />
        </div>
      </Layout>
    </>
  );
};
