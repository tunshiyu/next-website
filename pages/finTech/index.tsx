import React from 'react';
import styles from './index.module.less';
import Head from 'next/head';
import Layout from '@components/Layout';
import Header from '@components/Header';
import Banner from '@components/Banner';
import ContactUs from '@components/ContactUs';
import Footer from '@components/Footer';
import SolutionIntro from '@components/SolutionIntro';
import Advantages from '@pages/bigData/components/Advantages';
import Platform from '@components/Platform';

export default function FinTech() {
  const banner = {
    img: '/static/finTech/banner@2x.png',
    text: '金融科技解决方案',
  };
  const prefix = '/static/finTech/solutions';
  const solutions = [
    {
      img: `${prefix}/融资租赁@2x.png`,
      text: '融资租赁金融科技',
      subtext:
        '通过大数据、区块链、融资租赁技术，构建融资租赁金融科技平台，使线下资产上链为安全的数字资产，促进中小企业的融资',
    },
    {
      img: `${prefix}/供应链@2x.png`,
      text: '供应链金融科技',
      subtext:
        '通过大数据、区块链、风控建模技术，构建供应链金融科技平台，基于核心企业的信用，中小企业的资产凭证转化为上下游中小企业的融资能力',
    },
    {
      img: `${prefix}/物流@2x.png`,
      text: '物流金融科技',
      subtext:
        '通过大数据、风控建模、物联网及智能算法技术，构建物流金融科技平台，基于中小企业优质库存，助力银行仓单质押融资业务,提高中小企业融资能力',
    },
  ];
  const advantages = [
    {
      img: '/static/finTech/advantages/优势1@2x.png',
      texts: ['覆盖从顶层规划到落地实施的', '全生命周期的解决方案'],
    },
    {
      img: '/static/finTech/advantages/优势2@2x.png',
      texts: ['大平台小应用，一次平台搭建', '应用长期可快速迭代开发'],
    },
    {
      img: '/static/finTech/advantages/优势3@2x.png',
      texts: ['解决方案经过行业', '标杆企业的充分验证'],
    },
  ];

  const platform = {
    title: '数融平台',
    subtitle: '极简灵活的一站式大数据平台',
    img: '/static/finTech/数融平台@2x.png',
    href: '/srPlatform',
  };
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
          <Header selectedKeys={['3-2']} />
          <Banner banner={banner} />
          <SolutionIntro solutions={solutions} />
          <Advantages advantages={advantages} />
          <Platform {...platform} />
          <ContactUs />
          <Footer />
        </div>
      </Layout>
    </>
  );
}
