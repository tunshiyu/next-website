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
import MajorProducts from '@components/MajorProducts';

export default function Logistics() {
  const banner = {
    img: '/static/logistics/banner@2x.png',
    text: '大数据解决方案',
    subtext: '物流大数据',
  };
  const prefix = '/static/logistics/solutions';
  const solutions = [
    {
      img: `${prefix}/物流1@2x.png`,
      text: '供应链成本持续优化',
    },
    {
      img: `${prefix}/物流2@2x.png`,
      text: '全业务过程可视化',
    },
    {
      img: `${prefix}/物流3@2x.png`,
      text: '重要环节智能监控预警',
    },
  ];
  const products = [
    { img: '/static/major/数融平台@2x.png', title: '数融平台', subtitle: 'Pipeline 数据管道' },
    { img: '/static/major/数融魔方@2x.png', title: '数融魔方', subtitle: '分析平台 | 算法平台' },
    { img: '/static/major/数融智能@2x.png', title: '数融智能', subtitle: '车辆跟踪识别' },
  ];
  const partners = [
    { img: '/static/logistics/partners/15山东高速@2x.png', text: '山东高速', url: '/' },
    { img: '/static/logistics/partners/16富春@2x.png', text: '富春控股', url: '/' },
    { img: '/static/logistics/partners/鹊华集团@2x.png', text: '鹊华集团', url: '/' },
  ];
  return (
    <>
      <Head>
        <title>物流大数据-雷数科技</title>
        <meta
          name="description"
          content="通过对供应链全程的人、车、货、场等环节的智能管控，提高物流效率，提升服务质量，降低物流成本"
        />
        <meta name="keywords" content="大数据,AI,供应链金融,智能硬件" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.bootcss.com/normalize/8.0.1/normalize.min.css"
        />
      </Head>
      <Layout>
        <div className={styles.page}>
          <Header selectedKeys={['3-1-1']} />
          <Banner banner={banner} />
          <SolutionIntro
            solutions={solutions}
            subtitle="大数据+AI+供应链金融+智能硬件"
            desc="通过对供应链全程的人、车、货、场等环节的智能管控，提高物流效率，提升服务质量，降低物流成本"
          />
          <Architecture img="/static/logistics/architecture.png" />
          <MajorProducts products={products} />
          <Partners partners={partners} title="合作客户" />
          <ContactUs />
          <Footer />
        </div>
      </Layout>
    </>
  );
}
