/*
 * @文件描述:新闻详情页
 * newsId: 新闻id;
 * @公司: thundersdata
 * @作者: 于效仟
 * @Date: 2019-08-21 19:31:58
 * @LastEditors: 于效仟
 * @LastEditTime: 2019-08-29 17:42:27
 */
import React from 'react';
import styles from './index.module.less';
import Head from 'next/head';
import Layout from '@components/Layout';
import ContactUs from '@components/ContactUs';
import Footer from '@components/Footer';
import Header from '@components/Header';

// 暂时数据，后期通过接口获取文章内容
const text = (
  <div className={styles.newStyle}>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;10月25日，经过5个多月的激烈角逐，由阿里巴巴创新中心、杭州未来科技城管委会、良仓加速器共同举办的“2018阿里巴巴诸神之战全球创客大赛浙江赛区总决赛”在梦想小镇吹响争夺「浙江战神」的号角，经一天精彩对决，本次大赛圆满收官。
    </p>
    <img src="/static/news/newsDetail.png" alt="" />
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;杭州未来科技城管委会招商局局长李洁、阿里巴巴集团总裁办总监马力骏等领导出席了本次大赛；复星投资、厚达资本、赛伯乐投资、宁波基石投资、和梓基金、金库资本、苑博资本、凯昇资本、海德资本、科发资本、元禾原点、沃富金信、阿米巴资本、良米基金、前海合一资本应邀担任本次总决赛评委。
    </p>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;经过一天精彩对决，最终，雷数科技以80.25分胜出，成为浙江赛区冠军；婷婷唱古文项目为浙江赛区亚军，冠亚军获得全球总决赛通行证晋级阿里巴巴诸神之战全球创客大赛全球总决赛（11月14日、15日，杭州·梦想小镇）。认识医生、哈哈智能、易工家、蜜蜂帮帮、佑宝孕育、赛赋科技、全车通获得优胜奖，云医慧、葫芦回收、宾晨科技、频率科技、六度智囊、EZland园林大师、万维识别、管通天下、奇谷科技、奇盾科技、赛狐科技获得入围奖。
      优胜奖的项目将获得由杭州未来科技城提供的人工智能小镇相关政策，冠军还将获得30万元杭州未来科技城专项资金奖励，以及阿里云提供的15W人民币云产品使用资源，良仓加速器也为获奖项目提供免费入驻政策。
    </p>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;随着下半年浙江创业圈盛宴的落幕，阿里巴巴诸神之战全球总决赛即将强势来袭！11月14日、15日，在杭州未来科技城将汇聚全球顶尖创新力量！百家投资机构将投入这座正在全力奔跑的城市，为创新创业的发展汇集智慧，共推全球创投行业的创新发展。
    </p>
  </div>
);

//还未有接口，模拟后台数据
const data = {
  title: '雷数科技荣获阿里巴巴诸神之战浙江总决赛',
  time: '2018-10-25 18:47',
  content: text,
  aheadUrl: '',
  aheadTitle: '上一篇文章title',
  nextUrl: '',
  nextTitle: '下一篇文章title',
};
const { title, time, content, aheadUrl, aheadTitle, nextUrl, nextTitle } = data || {
  title: '数据暂无',
  time: '数据暂无',
  content: <div>数据暂无</div>,
  aheadUrl: '',
  aheadTitle: '',
  nextUrl: '',
  nextTitle: '',
};
export default class News extends React.Component {
  public static async getInitialProps(context: { query: { newsId: number } }) {
    // 拿到新闻ID，发送异步请求
    return { newsId: context.query.newsId };
  }

  public render() {
    return (
      <>
        <Head>
          <title>新闻详情-雷数科技</title>
          <meta name="description" content="新闻详情" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.bootcss.com/normalize/8.0.1/normalize.min.css"
          />
        </Head>
        <Layout>
          <div className={styles.wrap}>
            <Header selectedKeys={['6']} />
            <div className={styles.bgImg}></div>
            <div className={styles.newsWrap}>
              <div className={styles.newsCard}>
                <p className={styles.title}>{title}</p>
                <p className={styles.time}>{time}</p>
                <hr className={styles.line} />
                {content}
              </div>
            </div>
            <div className={styles.linkCard}>
              <a href={aheadUrl} className={styles.linkText}>
                <p>上一篇: {aheadTitle}</p>
              </a>
              <a href={nextUrl} className={styles.linkText}>
                <p>下一篇: {nextTitle}</p>
              </a>
            </div>
            <ContactUs />
            <Footer />
          </div>
        </Layout>
      </>
    );
  }
}
