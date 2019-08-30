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
    img: '/static/srintel/banner@2x.png',
    text: '数融智能',
    subtext: '场景化垂直化的智能组件平台',
  };
  const productIntro = {
    text:
      '数融智能平台主要包含用户画像系统、设备状态监控、视频结构化分析、区块链金融科技等智能组件， 深度服务于工业、物流、供应链和金融科技领域，实现工业物流的场景化垂直化智能管理运营， 并基于交易数据、物流数据、货物数据等数据为生态圈内的用户提供金融科技服务',
  };
  const products = [
    {
      img: '/static/srintel/products/1.png',
      title: '设备状态监控',
      subtitle: '机器设备的实时的智能监控预警',
      desc:
        '通过各类设备参数的来计算机器状态指标并进行展示和监控预警，并实时掌控机器的生产状态，便于及时排查维修，降低故障发生率，减少设备故障损失和误工损失',
    },
    {
      img: '/static/srintel/products/2.png',
      title: '生产流程追溯',
      subtitle: '产品各环节生产要素的智能追踪',
      desc:
        '通过连接生产各个环节的原材料、半成品、成品之间的编号，可查询产品的每个生产环节的相关的人员、机器、原辅料信息，便于排查产品质量出现问题产生的原因',
    },
    {
      img: '/static/srintel/products/3.png',
      title: '产品质量画像',
      subtitle: '中间环节产品的生产质量可视化',
      desc:
        '通过成品质量参数指标、成品位置关系、各环节产品编号来复原中间环节产品的生产加工质量，便于排查质量问题原因',
    },
    {
      img: '/static/srintel/products/4.png',
      title: '车辆识别跟踪',
      subtitle: '车辆特征和动向的智能识别追踪',
      desc:
        '提供车型识别、车辆检测、车流统计、车辆外观损伤识别等车辆分析相关技术服务，用于园区、道路、仓库的车辆监控分析',
    },
    {
      img: '/static/srintel/products/5.png',
      title: '区块链金融科技',
      subtitle: '基于大数据区块链的金融平台',
      desc:
        '提供资产数据上链服务，使线下资产上链为安全的数字资产，提高金融机构的风险管理能力，促进中小企业的融资',
    },
    {
      img: '/static/srintel/products/6.png',
      title: '用户画像系统',
      subtitle: '用户360度的多维画像分析',
      desc:
        '基于用户数据通过分析算法构建用户标签体系，提供用户特征标签，迅速对客户、供应商、仓库、机场等主体的智能化标签圈选搜索',
    },
  ];

  const prefix = '/static/srcube/partners';
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
        <title>数融智能-雷数科技</title>
        <meta name="description" content="场景化垂直化的智能组件平台" />
        <meta name="keywords" content="画像系统,设备状态监控,视频结构化分析,区块链金融科技" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.bootcss.com/normalize/8.0.1/normalize.min.css"
        />
      </Head>
      <Layout>
        <div className={styles.page}>
          <Header selectedKeys={['2-3']} />
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
