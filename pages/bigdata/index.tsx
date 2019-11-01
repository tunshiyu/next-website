import React from 'react';
import styles from './index.module.less';
import Head from 'next/head';
import Layout from '@components/Layout';
import Header from '@components/Header';
import Banner from '@components/Banner';
import ContactUs from '@components/ContactUs';
import Footer from '@components/Footer';
import SolutionIntro from '@components/SolutionIntro';
import Advantages from './components/Advantages';
import MajorProducts from '@components/MajorProducts';
import Partners from '@components/Partners';

export default () => {
  const banner = {
    img: '/static/bigdata/banner@2x.png',
    text: '大数据解决方案',
    subtext: '提供多场景多行业的深度大数据服务方案帮助传统企业挖掘数据商业价值',
  };
  const prefix = '/static/bigdata/solutions';
  const solutions = [
    {
      img: `${prefix}/物流大数据@2x.png`,
      text: '物流大数据',
      subtext:
        '通过对供应链全程的人、车、货、场等环节的智能管控，提高物流效率，提升服务质量，降低物流成本',
      href: '/logistics',
    },
    {
      img: `${prefix}/工业大数据@2x.png`,
      text: '工业大数据',
      subtext:
        '打通工业企业数据孤岛构建大数据平台，实现设备状态监控预警、生产参数优化、大数据实时分析，帮助工业企业挖掘数据的价值',
      href: '/industry',
    },
    {
      img: `${prefix}/供应链大数据@2x.png`,
      text: '供应链大数据',
      subtext:
        '构建供应链大数据平台，实现各流程全场景的数字化，通过大数据可视化、预测、建模、金融科技等技术，优化各个环节，实现智能决策、降本增效',
      href: '/supplychain',
    },
    {
      img: `${prefix}/酒店大数据@2x.png`,
      text: '酒店大数据',
      subtext:
        '打通酒店数据孤岛构建大数据平台，从采购、厨房、餐厅到客房全流程数据化、智能化，提高业务流程效率，降低人力成本，提升服务质量',
      href: '/hotel',
    },
    {
      img: `${prefix}/智慧城市@2x.png`,
      text: '智慧城市',
      subtext:
        '打通城市数据孤岛，构建大数据平台和共享交换平台，通过大数据分析、精准扶贫系统、光伏区块链技术，提高城市智能管理能力，并实现可持续运营',
      href: '/smartcity',
    },
    {
      img: `${prefix}/机场大数据@2x.png`,
      text: '机场大数据',
      subtext:
        '打通机场数据孤岛，构建大数据平台，通过大数据分析、智能机场应用、精准画像推荐技术，提高机场的运营管理效率，提升机场客户体验和服务质量',
      href: '/airplane',
    },
  ];
  const advantages = [
    {
      img: '/static/bigdata/advantages/优势1@2x.png',
      texts: ['覆盖从顶层规划到落地实施的', '全生命周期的解决方案'],
    },
    {
      img: '/static/bigdata/advantages/优势2@2x.png',
      texts: ['大平台小应用，一次平台搭建', '应用长期可快速迭代开发'],
    },
    {
      img: '/static/bigdata/advantages/优势3@2x.png',
      texts: ['解决方案经过行业', '标杆企业的充分验证'],
    },
  ];
  const products = [
    { img: '/static/major/数融平台@2x.png', title: '数融平台', subtitle: '' },
    { img: '/static/major/数融魔方@2x.png', title: '数融魔方', subtitle: '' },
    { img: '/static/major/数融智能@2x.png', title: '数融智能', subtitle: '' },
  ];
  const partners = [
    { img: '/static/bigdata/partners/1.png', text: '大海', url: '/' },
    { img: '/static/bigdata/partners/2.png', text: '神威药业 ', url: '/' },
    { img: '/static/bigdata/partners/3.png', text: '富春 ', url: '/' },
    { img: '/static/bigdata/partners/4.png', text: '山东高速 ', url: '/' },
    { img: '/static/bigdata/partners/5.png', text: '山东大厦 ', url: '/' },
  ];

  return (
    <>
      <Head>
        <title>大数据解决方案-雷数科技</title>
        <meta name="description" content="大数据解决方案" />
        <meta
          name="keywords"
          content="物流大数据,工业大数据,供应链大数据,酒店大数据,智慧城市,机场大数据"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.bootcss.com/normalize/8.0.1/normalize.min.css"
        />
      </Head>
      <Layout>
        <div className={styles.page}>
          <Header selectedKeys={['3-1']} />
          <Banner banner={banner} />
          <SolutionIntro solutions={solutions} />
          <Advantages advantages={advantages} />
          <MajorProducts products={products} />
          <Partners partners={partners} title="合作客户" />
          <ContactUs />
          <Footer />
        </div>
      </Layout>
    </>
  );
};
