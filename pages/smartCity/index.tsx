import React from 'react';
import styles from './index.module.less';
import Head from 'next/head';
import Layout from '@components/Layout';
import Header from '@components/Header';
import Banner from '@components/Banner';
import ContactUs from '@components/ContactUs';
import Footer from '@components/Footer';
import SolutionIntro from '@components/SolutionIntro';
import Architecture from '@components/Architecture';
import Partners from '@components/Partners';

export default function SmartCity() {
  const banner = {
    img: '/static/smartCity/banner@2x.png',
    text: '大数据解决方案',
    subtext: '智慧城市大数据',
  };
  const prefix = '/static/smartCity/solutions';
  const solutions = [
    {
      img: `${prefix}/智慧城市1@2x.png`,
      text: '城市管理运营数字化',
    },
    {
      img: `${prefix}/智慧城市2@2x.png`,
      text: '数据共享协同线上化',
    },
    {
      img: `${prefix}/智慧城市3@2x.png`,
      text: '扶贫精准可持续运营',
    },
  ];
  const partners = [
    { img: '/static/smartCity/partners/承德@2x.png', text: '河北承德', url: '/' },
    { img: '/static/smartCity/partners/上海@2x.png', text: '上海 ', url: '/' },
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
          <Header selectedKeys={['3-4']} />
          <Banner banner={banner} />
          <SolutionIntro
            solutions={solutions}
            subtitle="大数据+共享交换+分析可视化+精准扶贫+光伏扶贫"
            desc="打通城市数据孤岛，构建大数据平台和共享交换平台，通过大数据分析、精准扶贫系统、光伏区块链技术， 提高城市智能管理能力，并实现可持续运营"
          />
          <Architecture img="/static/smartCity/architecture.png" />
          <Partners partners={partners} title="合作客户" />
          <ContactUs />
          <Footer />
        </div>
      </Layout>
    </>
  );
}
