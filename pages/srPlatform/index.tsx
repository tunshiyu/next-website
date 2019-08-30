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
    img: '/static/srplatform/banner@2x.png',
    text: '数融平台',
    subtext: '极简灵活的一站式大数据平台',
  };
  const productIntro = {
    text:
      '数融平台主要包含数据集成、数据开发、数据地图、权限管理、运维监控等子系统，是自主研发的一款数据融合产品， 可通过可视化图形配置界面即可自服务部署一条实时数据管道，并提供丰富的数据任务调度、平台运维监控、数据资源管理、权限管理等功能，帮助客户打通数据孤岛，构建数据资产平台',
    img: '/static/srplatform/architecture@2x.png',
  };
  const products = [
    {
      img: '/static/srplatform/products/1.png',
      title: '数据集成',
      desc:
        '稳定高效、弹性伸缩的数据同步平台。致力于提供复杂网络环境下、丰富的异构数据源之间数据高速稳定的数据移动及同步能力，打通数据孤岛',
    },
    {
      img: '/static/srplatform/products/2.png',
      title: '数据开发',
      desc:
        '自动化数据开发任务管理工作流程，且只需维护已配置的工作流程。节省开发的时间，提高开发的效率和质量。',
    },
    {
      img: '/static/srplatform/products/3.png',
      title: '运维监控',
      desc: '资源、数据、服务的自动化、可视化的统一监控报警监控，实现智能运维。',
    },
    {
      img: '/static/srplatform/products/4.png',
      title: '权限管理',
      desc: '实现数据、应用、菜单多层次权限管理，分级管理保障企业内部的数据安全。',
    },
    {
      img: '/static/srplatform/products/5.png',
      title: '数据地图',
      desc:
        '以数据搜索为基础，辅以强大的表使用说明、数据类目、数据血缘、字段血缘等工具，帮助数据表的使用者和拥有者们更好地管理数据、协作开发。',
    },
  ];

  const prefix = '/static/srplatform/partners';
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
        <title>数融平台-雷数科技</title>
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
          <ProductIntro {...productIntro} />
          <Products products={products} />
          <Scenarios />
          <Partners title="合作客户" partners={partners} />
          <ContactUs />
          <Footer />
        </div>
      </Layout>
    </>
  );
};
