/*
 * @文件描述:人才招聘
 * @公司: thundersdata
 * @作者: 于效仟
 * @Date: 2019-08-20 19:05:23
 * @LastEditors: 于效仟
 * @LastEditTime: 2019-10-28 10:16:48
 */
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
    text: '加入我们',
    subtext:
      '我们是一个充满活力的团队，热爱大数据，并在这条路上专注耕耘多年，未来我们期待和你一起砥砺前行',
  };

  return (
    <>
      <Head>
        <title>人才招聘-雷数科技</title>
        <meta name="description" content="人才招聘" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.bootcss.com/normalize/8.0.1/normalize.min.css"
        />
      </Head>
      <Layout>
        <div className={styles.page}>
          <Header selectedKeys={['6-2']} />
          <Banner banner={banner} />
          <div className={styles.wrap}>
            <div className={styles.joinCard}>
              <span className={styles.title}>社会招聘</span>
              <span className={styles.text}>
                我们为你提供绽放才华的舞台，和我们并肩作战，一起用大数据赋能企业，服务客户。
              </span>
              <div
                className={styles.btn}
                onClick={() =>
                  window.open(
                    'https://www.zhipin.com/gongsir/592f45f10d17ded01nZ93Ni9Ew~~.html?ka=company-jobs',
                    '_blank',
                  )
                }
              >
                申请社招岗位
              </div>
            </div>
            <span className={styles.subText}>
              * 或在邮件中写明投递岗位，将简历直接发送至
              <span className={styles.emailTetx}>hr@thundersdata.com</span>
            </span>
          </div>
          <ContactUs />
          <Footer />
        </div>
      </Layout>
    </>
  );
}
