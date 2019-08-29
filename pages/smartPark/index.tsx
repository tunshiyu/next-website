import React from 'react';
import styles from './index.module.less';
import Head from 'next/head';
import Layout from '@components/Layout';
import Header from '@components/Header';
import Banner from '@components/Banner';
import ContactUs from '@components/ContactUs';
import Footer from '@components/Footer';
import SolutionIntro from '@components/SolutionIntro';
import Platform from '@components/Platform';
import Architecture from '@components/Architecture';
import Partners from '@components/Partners';

export default function SmartPark() {
  const banner = {
    img: '/static/smartPack/banner@2x.png',
    text: '智慧园区解决方案',
  };
  const prefix = '/static/smartPack/solutions';
  const solutions = [
    {
      img: `${prefix}/优势1@2x.png`,
      text: '智慧园区解决方案总集成',
    },
    {
      img: `${prefix}/优势2@2x.png`,
      text: '园区全场景智能化运营',
    },
    {
      img: `${prefix}/优势3@2x.png`,
      text: '多技术结合共同赋能园区生态',
    },
  ];
  const partners = [
    { img: '/static/smartPack/partners/鹊华集团@2x.png', text: '鹊华集团', url: '/' },
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
        <title>智慧园区解决方案-雷数科技</title>
        <meta
          name="description"
          content="打通园区数据孤岛构建大数据平台，通过大数据、SaaS化仓储物流管理软件、分析算法、物联网、智能算法及金融科技技术，构建智慧园区平台，智能化运营园区，提高园区管理效率，并通过供应链金融激活园区高效发展"
        />
        <meta
          name="keywords"
          content="大数据,SaaS化仓储物流管理软件,智能硬件,智能算法,可视化,供应链金融科技"
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
          <Header selectedKeys={['3-3']} />
          <Banner banner={banner} />
          <SolutionIntro
            solutions={solutions}
            subtitle="大数据+SaaS化仓储物流管理软件+ 智能硬件+智能算法+可视化+供应链金融科技"
            desc="打通园区数据孤岛构建大数据平台，通过大数据、SaaS化仓储物流管理软件、分析算法、物联网、智能算法及金融科技技术，构建智慧园区平台，智能化运营园区，提高园区管理效率，并通过供应链金融激活园区高效发展"
          />
          <Architecture img="/static/smartPack/architecture.png" />
          <Partners partners={partners} title="合作客户" />
          <Platform {...platform} />
          <ContactUs />
          <Footer />
        </div>
      </Layout>
    </>
  );
}
