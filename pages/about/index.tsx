import React from 'react';
import styles from './index.module.less';
import Head from 'next/head';
import Layout from '@components/Layout';
import Header from '@components/Header';
import ContactUs from '@components/ContactUs';
import Footer from '@components/Footer';
import Advantage from './components/Advantage';
import Journey from './components/Journey';
import News from './components/News';

export default function About() {
  const advantages = [
    {
      img: '/static/about/advantages/优势1@2x.png',
      title: '顶尖的技术团队',
      subtitle: '名企名校阵容，保障研发实力业界领先',
    },
    {
      img: '/static/about/advantages/优势2@2x.png',
      title: '高速的业务增长',
      subtitle: '2018年订单2000万，预计2019年订单破亿',
    },
    {
      img: '/static/about/advantages/优势3@2x.png',
      title: '丰富的行业实践',
      subtitle: '涵盖能源、制造、医疗、政务、 机场、酒店、地产等行业',
    },
  ];
  // 公司新闻
  const newsOptions = [
    {
      imgUrl: '/static/news/newsDetail.png',
      title: '雷数科技荣获阿里巴巴诸神之战浙江赛区冠军',
      time: '2018-12-12',
      newsId: 1,
    },
    {
      imgUrl: '/static/news/newsDetail.png',
      title: '雷数科技荣获阿里巴巴诸神之战浙江赛区冠军',
      time: '2018-12-12',
      newsId: 1,
    },
    {
      imgUrl: '/static/news/newsDetail.png',
      title: '雷数科技荣获阿里巴巴诸神之战浙江赛区冠军',
      time: '2018-12-12',
      newsId: 1,
    },
  ];
  return (
    <>
      <Head>
        <title>公司简介-雷数科技</title>
        <meta
          name="description"
          content="杭州雷数科技有限公司成立于2017年底, 是一家专注于大数据商业智能服务的技术领先型科技公司，由来自微软、阿里等顶尖大数据、人工智能企业的资深互联网专家与行业实战专家共同创立"
        />
        <meta
          name="keywords"
          content="大数据商业智能服务,顶尖技术团队，高速的业务增长,丰富的行业实践"
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
          <Header selectedKeys={['6-1']} />
          <img src="/static/about/banner@2x.png" alt="关于雷数" style={{ width: '100%' }} />
          <Advantage advantages={advantages} />
          <Journey />
          {/* 公司新闻 */}
          <News options={newsOptions} />
          <ContactUs />
          <Footer />
        </div>
      </Layout>
    </>
  );
}
