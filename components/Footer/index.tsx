import React from 'react';
import Link from 'next/link';
import styles from './index.module.less';

export default function Footer() {
  const links = [
    {
      title: '产品中心',
      links: [{ url: '/srplatform', text: '数融平台' }],
    },
    {
      title: '解决方案',
      links: [{ url: '/bigdata', text: '大数据' }, { url: '/fintech', text: '金融科技' }],
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.left}>
            <img alt="雷数科技" src="/static/logo@2x.png" className={styles.logo} />
            <div className={styles.info}>浙江省***路***室</div>
            <div className={styles.info}>****-*******</div>
            <div className={styles.info}>***@**.com</div>
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
        <div className={styles.copyright}>基于nextjs和nodejs的项目模板</div>
      </div>
    </div>
  );
}
