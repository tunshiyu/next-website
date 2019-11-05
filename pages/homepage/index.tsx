import React from 'react';
import Head from 'next/head';
import styles from './index.module.less';
import Banner from '@components/Banner';
import Footer from '@components/Footer';
import Layout from '@components/Layout';
import Header from '@components/Header';

export default function Homepage() {
  const banners = [
    {
      img: '/static/homepage/banners/1.png',
      keywords: ['第一页'],
    },
    {
      img: '/static/homepage/banners/2.png',
      keywords: ['第二页'],
    },
    {
      img: '/static/homepage/banners/3.png',
      keywords: ['第三页'],
    },
    {
      img: '/static/homepage/banners/4.png',
      keywords: ['第四页'],
    },
  ];

  return (
    <>
      <Head>
        <title>首页</title>
        <link rel="icon" href="/static/tdlogo.png"></link>
        <meta
          name="description"
          content="杭州雷数科技有限公司成立于2017年底, 是一家专注于大数据商业智能服务的技术领先型科技公司，由来自微软、阿里等顶尖大数据、人工智能企业的资深互联网专家与行业实战专家共同创立"
        />
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
          <Footer />
        </div>
      </Layout>
    </>
  );
}
