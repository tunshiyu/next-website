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

export default function Airplane() {
  const banner = {
    img: '/static/airplane/banner@2x.png',
    text: '大数据解决方案',
    subtext: '机场大数据',
  };
  const prefix = '/static/airplane/solutions';
  const solutions = [
    {
      img: `${prefix}/机场1@2x.png`,
      text: '客户管理实时化',
    },
    {
      img: `${prefix}/机场2@2x.png`,
      text: '客户服务智能化',
    },
    {
      img: `${prefix}/机场3@2x.png`,
      text: '客户营销精准化',
    },
  ];
  const partners = [
    { img: '/static/airplane/partners/上海机场@2x.png', text: '上海机场', url: '/' },
    { img: '/static/airplane/partners/白云机场@2x.png', text: '白云机场 ', url: '/' },
  ];
  return (
    <>
      <Head>
        <title>机场大数据-雷数科技</title>
        <meta
          name="description"
          content="打通机场数据孤岛，构建大数据平台，通过大数据分析、智能机场应用、精准画像推荐技术，提高机场的运营管理效率，提升机场客户体验和服务质量"
        />
        <meta name="keywords" content="大数据,分析可视化,精准推荐,移动应用" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.bootcss.com/normalize/8.0.1/normalize.min.css"
        />
      </Head>
      <Layout>
        <div className={styles.page}>
          <Header selectedKeys={['3-1-6']} />
          <Banner banner={banner} />
          <SolutionIntro
            solutions={solutions}
            subtitle="大数据+分析可视化+精准推荐+移动应用 "
            desc="打通机场数据孤岛，构建大数据平台，通过大数据分析、智能机场应用、精准画像推荐技术，提高机场的运营管理效率，提升机场客户体验和服务质量"
          />
          <Architecture img="/static/airplane/architecture.png" />
          <Partners partners={partners} title="合作客户" />
          <ContactUs />
          <Footer />
        </div>
      </Layout>
    </>
  );
}
