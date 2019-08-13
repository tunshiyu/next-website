import React from 'react';
import styles from './index.module.less';
import Head from 'next/head';
import Layout from '@components/Layout';
import Header from '@components/Header';
import ContactUs from '@components/ContactUs';
import Footer from '@components/Footer';
import Banner from '@components/Banner';

export default function Recruitment() {
  const banner = {
    img: '/static/recruitment/banner@2x.png',
    text: '人才招聘',
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
          <Header selectedKeys={['7']} />
          <Banner banner={banner} />
          <ContactUs />
          <Footer />
        </div>
      </Layout>
    </>
  );
}
