import React from 'react';
import styles from './index.module.less';
import Head from 'next/head';
import Layout from '@components/Layout';
import Header from '@components/Header';
import Banner from '@components/Banner';
import Footer from '@components/Footer';
export default () => {
  const banner = {
    img: '/static/bigdata/banner@2x.png',
    text: '大数据解决方案',
    subtext: '副标题',
  };
  return (
    <>
      <Head>
        <title>大数据解决方案</title>
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
          <Footer />
        </div>
      </Layout>
    </>
  );
};
