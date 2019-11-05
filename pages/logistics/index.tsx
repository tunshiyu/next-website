import React from 'react';
import styles from './index.module.less';
import Head from 'next/head';
import Layout from '@components/Layout';
import Header from '@components/Header';
import Banner from '@components/Banner';
import Footer from '@components/Footer';

export default function Logistics() {
  const banner = {
    img: '/static/logistics/banner@2x.png',
    text: '大数据解决方案',
    subtext: '物流大数据',
  };

  return (
    <>
      <Head>
        <title>物流大数</title>
        <meta
          name="description"
          content="通过对供应链全程的人、车、货、场等环节的智能管控，提高物流效率，提升服务质量，降低物流成本"
        />
        <meta name="keywords" content="大数据,AI,供应链金融,智能硬件" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.bootcss.com/normalize/8.0.1/normalize.min.css"
        />
      </Head>
      <Layout>
        <div className={styles.page}>
          <Header selectedKeys={['3-1-1']} />
          <Banner banner={banner} />
          <Footer />
        </div>
      </Layout>
    </>
  );
}
