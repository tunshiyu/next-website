import React from 'react';
import Head from 'next/head';
import styles from './index.module.less';
import Banner from '@components/Banner';
import Advantages from './components/Advantages';
import ProductService from './components/ProductService';
import Solutions from './components/Solutions';
import ContactUs from '@components/ContactUs';
import Footer from '@components/Footer';
import Layout from '@components/Layout';
import Partners from '@components/Partners';
import { PartnerItem } from 'interfaces';
import Header from '@components/Header';

export default function Homepage() {
  const banners = [
    {
      img: '/static/homepage/banners/banner01@2x.png',
      text: '赋能传统企业',
      keywords: ['大数据+', 'AI+', '物联网+', '区块链+', '金融+'],
    },
    {
      img: '/static/homepage/banners/banner01@2x.png',
      text: '赋能传统企业',
      keywords: ['大数据+', 'AI+', '物联网+', '区块链+', '金融+'],
    },
    {
      img: '/static/homepage/banners/banner01@2x.png',
      text: '赋能传统企业',
      keywords: ['大数据+', 'AI+', '物联网+', '区块链+', '金融+'],
    },
    {
      img: '/static/homepage/banners/banner01@2x.png',
      text: '赋能传统企业',
      keywords: ['大数据+', 'AI+', '物联网+', '区块链+', '金融+'],
    },
  ];
  const advantages = [
    {
      img: '/static/homepage/advantages/advantage1@2x.png',
      title: '方法论优势',
      subtitle:
        '独创三步走方法论：大数据平台、数据业务化、业务数据化，在诸多企业大数据项目中成功落地，并成功完成多个亿万级的项目顶层规划 ',
    },
    {
      img: '/static/homepage/advantages/advantage2@2x.png',
      title: '创新技术优势',
      subtitle: '创新性的大量引用区块链、金融科技技术帮助传统企业实现颠覆式的改造 ',
    },
    {
      img: '/static/homepage/advantages/advantage3@2x.png',
      title: '专家团队优势',
      subtitle: '创始人团队多来自微软阿里，带领实施过PB级大数据项目，具有丰富的大数据实战经验',
    },
  ];
  const services = [
    {
      img: '/static/homepage/services/product1@2x.png',
      title: '数融平台',
      subtitle: '极简灵活的一站式大数据平台',
      description: '数融平台包含数据集成、开发、运维、安全，迅速搭建企业自身数据资产平台',
      url: '/srplatform',
    },
    {
      img: '/static/homepage/services/product2@2x.png',
      title: '数融魔方',
      subtitle: '灵活简便的数据应用平台',
      description: '包含可视化分析、建模、API等，迅速实现企业商业智能分析',
      url: '/srcube',
    },
    {
      img: '/static/homepage/services/product3@2x.png',
      title: '数融智能',
      subtitle: '场景化垂直化的智能组件平台',
      description:
        '涉及工业、物流、供应链、金融领域的视频结构化分析、文本分析等智能分析组件，可快速构建企业的智能应用',
      url: '/srintel',
    },
  ];
  const prefix = '/static/homepage/partners';
  const partners: PartnerItem[] = [
    { img: `${prefix}/1.png`, text: '大海集团' },
    { img: `${prefix}/2.png`, text: '建工集团' },
    { img: `${prefix}/3.png`, text: '山东国惠' },
    { img: `${prefix}/4.png`, text: '高新财金' },
    { img: `${prefix}/5.png`, text: '山东大厦' },
    { img: `${prefix}/6.png`, text: '龙腾出行' },
    { img: `${prefix}/7.png`, text: '萧山机场' },
    { img: `${prefix}/8.png`, text: '上海机场' },
    { img: `${prefix}/9.png`, text: '白云机场' },
    { img: `${prefix}/10.png`, text: '宁波机场' },
    { img: `${prefix}/11.png`, text: '云南机场' },
    { img: `${prefix}/12.png`, text: '上海颖科' },
    { img: `${prefix}/13.png`, text: '东海租赁' },
    { img: `${prefix}/14.png`, text: '融和租赁' },
    { img: `${prefix}/15.png`, text: '山东高速' },
    { img: `${prefix}/16.png`, text: '富春控股' },
    { img: `${prefix}/17.png`, text: '金茂铝业' },
    { img: `${prefix}/18.png`, text: '拓扑' },
    { img: `${prefix}/19.png`, text: '大众融媒体' },
    { img: `${prefix}/20.png`, text: '科源售电' },
    { img: `${prefix}/21.png`, text: '黄河产业园' },
    { img: `${prefix}/22.png`, text: '齐鲁晚报' },
    { img: `${prefix}/23.png`, text: '镁卡车轮' },
    { img: `${prefix}/24.png`, text: '迈尔医疗' },
    { img: `${prefix}/25.png`, text: '国开新能源' },
    { img: `${prefix}/26.png`, text: '神威药业' },
  ];
  return (
    <>
      <Head>
        <title>杭州雷数科技有限公司</title>
        <meta name="description" content="杭州雷数科技有限公司首页" />
        <meta name="keywords" content="大数据,物联网,区块链,金融" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.bootcss.com/normalize/8.0.1/normalize.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Layout>
        <div className={styles.page}>
          <Header selectedKeys={['1']} />
          <Banner banners={banners} />
          <Advantages advantages={advantages} />
          <ProductService services={services} />
          <Solutions />
          <Partners title="合作客户" partners={partners} />
          <ContactUs />
          <Footer />
        </div>
      </Layout>
    </>
  );
}
