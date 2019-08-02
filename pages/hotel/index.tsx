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

export default function Hotel() {
  const banner = {
    img: '/static/hotel/banner@2x.png',
    text: '大数据解决方案',
    subtext: '酒店大数据',
  };
  const prefix = '/static/hotel/solutions';
  const solutions = [
    {
      img: `${prefix}/酒店1@2x.png`,
      text: '全业务流程管理',
    },
    {
      img: `${prefix}/酒店2@2x.png`,
      text: '智能语音采购入库',
    },
    {
      img: `${prefix}/酒店3@2x.png`,
      text: '自主化大数据分析',
    },
  ];
  const products = [
    { img: '/static/major/数融平台@2x.png', title: '数融平台', subtitle: 'Pipeline 数据管道' },
    { img: '/static/major/数融魔方@2x.png', title: '数融魔方', subtitle: '分析平台' },
    { img: '/static/major/数融智能@2x.png', title: '数融智能', subtitle: '智能采购入库' },
  ];
  const partners = [
    { img: '/static/hotel/partners/1.png', text: '山东大厦', url: '/' },
    { img: '/static/hotel/partners/2.png', text: '南海玉华 ', url: '/' },
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
            subtitle="大数据+AI+智能硬件"
            desc="打通酒店数据孤岛构建大数据平台，从采购、厨房、餐厅到客房全流程数据化智能化，提高业务流程效率， 降低人力成本，提升服务质量"
          />
          <Architecture img="/static/hotel/architecture.png" />
          <MajorProducts products={products} />
          <Partners partners={partners} title="合作客户" />
          <ContactUs />
          <Footer />
        </div>
      </Layout>
    </>
  );
}
