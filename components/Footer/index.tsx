import React from 'react';
import Link from 'next/link';
import styles from './index.module.less';

export default function Footer() {
  const links = [
    {
      title: '产品中心',
      links: [
        { url: '/', text: '数融平台' },
        { url: '/', text: '数融魔方' },
        { url: '/', text: '数融智能' },
      ],
    },
    {
      title: '解决方案',
      links: [
        { url: '/', text: '大数据' },
        { url: '/', text: '金融科技' },
        { url: '/', text: '智慧园区' },
        { url: '/', text: '智慧供应链' },
      ],
    },
    {
      title: '关于雷数',
      links: [
        { url: '/', text: '公司简介' },
        { url: '/', text: '公司新闻' },
        { url: '/', text: '人才招聘' },
      ],
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.left}>
            <img alt="雷数科技" src="/static/logo@2x.png" className={styles.logo} />
            <div className={styles.info}>浙江省杭州市余杭区文一西路杭师大科技园E座1806室</div>
            <div className={styles.info}>0571-26270118</div>
            <div className={styles.info}>leishu@thundersdata.com</div>
          </div>
          <div className={styles.right}>
            {links.map((item, index) => (
              <div key={index} className={styles.column}>
                <div className={styles.title}>{item.title}</div>
                <ul className={styles.links}>
                  {item.links.map((ele, key) => (
                    <li key={key} className={styles.linkWrap}>
                      <Link href={ele.url}>
                        <a className={styles.link}>{ele.text}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.copyright}>
          版权所有 ©️ 2017-2018 All Rights Reserved 浙ICP备17054225号-1
        </div>
      </div>
    </div>
  );
}
