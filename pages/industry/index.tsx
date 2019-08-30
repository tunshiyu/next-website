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

export default function Industry() {
  const banner = {
    img: '/static/industry/banner@2x.png',
    text: '大数据解决方案',
    subtext: '工业大数据',
  };
  const prefix = '/static/industry/solutions';
  const solutions = [
    {
      img: `${prefix}/工业1@2x.png`,
      text: '生产控制实时化',
    },
    {
      img: `${prefix}/工业2@2x.png`,
      text: '成本控制精细化',
    },
    {
      img: `${prefix}/工业3@2x.png`,
      text: '质量追溯物联化',
    },
  ];
  const products = [
    { img: '/static/major/数融平台@2x.png', title: '数融平台', subtitle: 'Pipeline 数据管道' },
    { img: '/static/major/数融魔方@2x.png', title: '数融魔方', subtitle: '分析平台 | 算法平台' },
    { img: '/static/major/数融智能@2x.png', title: '数融智能', subtitle: '车辆跟踪识别' },
  ];
  const partners = [
    { img: '/static/industry/partners/1.png', text: '大海集团', url: '/' },
    { img: '/static/industry/partners/2.png', text: '神威药业 ', url: '/' },
  ];
  return (
    <>
      <Head>
        <title>工业大数据-雷数科技</title>
        <meta
          name="description"
          content="打通工业企业数据孤岛构建大数据平台，实现设备状态监控预警、生产参数优化、大数据实时分析， 帮助工业企业挖掘数据的价值"
        />
        <meta name="keywords" content="大数据,AI,物联网,融资租赁" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.bootcss.com/normalize/8.0.1/normalize.min.css"
        />
      </Head>
      <Layout>
        <div className={styles.page}>
          <Header selectedKeys={['3-1-2']} />
          <Banner banner={banner} />
          <SolutionIntro
            solutions={solutions}
            subtitle="大数据+物联网+AI+融资租赁"
            desc="打通工业企业数据孤岛构建大数据平台，实现设备状态监控预警、生产参数优化、大数据实时分析， 帮助工业企业挖掘数据的价值"
          />
          <Architecture img="/static/industry/architecture.png" />
          <MajorProducts products={products} />
          <Partners partners={partners} title="合作客户" />
          <ContactUs />
          <Footer />
        </div>
      </Layout>
    </>
  );
}
