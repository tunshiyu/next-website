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

export default function SupplyChain() {
  const banner = {
    img: '/static/supplyChain/banner@2x.png',
    text: '大数据解决方案',
    subtext: '供应链大数据',
  };
  const prefix = '/static/supplyChain/solutions';
  const solutions = [
    {
      img: `${prefix}/供应链1@2x.png`,
      text: '供应链全流程可视化分析',
    },
    {
      img: `${prefix}/供应链2@2x.png`,
      text: '智能算法全环节优化',
    },
    {
      img: `${prefix}/供应链3@2x.png`,
      text: '整合金融资源“激活供应链”',
    },
  ];
  const products = [
    { img: '/static/major/数融平台@2x.png', title: '数融平台', subtitle: 'Pipeline 数据管道' },
    { img: '/static/major/数融魔方@2x.png', title: '数融魔方', subtitle: '分析平台 | 算法平台' },
  ];
  const partners = [
    { img: '/static/supplyChain/partners/1.png', text: '山东大厦', url: '/' },
    { img: '/static/supplyChain/partners/2.png', text: '富春控股 ', url: '/' },
    { img: '/static/supplyChain/partners/3.png', text: '南海玉华 ', url: '/' },
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
            subtitle="大数据+大数据分析+算法建模+可视化+供应链金融科技"
            desc="打通供应链数据孤岛构建大数据平台，从产地、仓库、物流、销售终端全场景的数字化智能化，通过大数据可视化、分析预测、算法建模、金融科技等技术，优化供应链各个环节，达到决策智能、降本增效、提升服务质量的目标"
          />
          <Architecture img="/static/supplyChain/architecture.png" />
          <MajorProducts products={products} />
          <Partners partners={partners} title="合作客户" />
          <ContactUs />
          <Footer />
        </div>
      </Layout>
    </>
  );
}
