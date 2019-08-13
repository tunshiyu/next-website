import React from 'react';
import styles from './index.module.less';
import Head from 'next/head';
import Layout from '@components/Layout';
import Header from '@components/Header';
import ContactUs from '@components/ContactUs';
import Footer from '@components/Footer';
import Advantage from './components/Advantage';
import Journey from './components/Journey';

export default function About() {
  const advantages = [
    {
      img: '/static/about/advantages/优势1@2x.png',
      title: '顶尖的技术团队',
      subtitle: '名企名校阵容,保障研发实力业界领先',
    },
    {
      img: '/static/about/advantages/优势2@2x.png',
      title: '高速的业务增长',
      subtitle: '2018年订单2000万,预计2019年订单破亿',
    },
    {
      img: '/static/about/advantages/优势3@2x.png',
      title: '丰富的行业实践',
      subtitle: '涵盖能源、制造、医疗、政务、 机场、酒店、地产等行业',
    },
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
          <Header selectedKeys={['6']} />
          <img src="/static/about/banner@2x.png" alt="关于雷数" style={{ width: '100%' }} />
          <Advantage advantages={advantages} />
          <Journey />
          <ContactUs />
          <Footer />
        </div>
      </Layout>
    </>
  );
}
