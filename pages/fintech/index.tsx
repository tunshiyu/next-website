import React from 'react';
import styles from './index.module.less';
import Head from 'next/head';
import Layout from '@components/Layout';
import Header from '@components/Header';
import Banner from '@components/Banner';
import Footer from '@components/Footer';

export default () => {
  const banner = {
    img: '/static/fintech/banner@2x.png',
    text: '金融科技解决方案',
    subtext: '副标题',
  };

  return (
    <>
      <Head>
        <title>金融科技解决方案</title>
        <meta name="description" content="金融科技解决方案" />
        <meta name="keywords" content="融资租赁金融科技,供应链金融科技,物流金融科技" />
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
          <Footer />
        </div>
      </Layout>
    </>
  );
};
