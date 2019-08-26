import React from 'react';
import Head from 'next/head';
import styles from './index.less';

const Layout: React.FC = props => {
  // 平滑滚到顶部函数
  function handleScrollTop() {
    let scrollToTop = window.setInterval(function() {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 50);
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 2);
  }

  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/static/menu.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="//at.alicdn.com/t/font_1322153_nxxj5gfzvq9.css"
        />
      </Head>
      <style jsx global>{`
        html {
          overflow: -moz-hidden-unscrollable;
          height: 100%;
        }

        body::-webkit-scrollbar {
          display: none;
        }

        body {
          -ms-overflow-style: none;
          height: 100%;
          width: calc(100vw + 18px);
          overflow-y: auto;
          overflow-x: hidden;
        }
        img {
          display: block;
        }
        @media screen and (min-width: 1280px) {
          html {
            font-size: 14px;
          }
        }
        @media screen and (max-width: 1280px) {
          html {
            font-size: 12px;
          }
        }
      `}</style>
      {props.children}
      <ul className={styles.fixedMenu}>
        <li>
          <div className={styles.fixedText}>微信咨询</div>
          <div className={styles.tel}>*******</div>
        </li>
        <li>
          <div className={styles.fixedText}>联系电话</div>
          <div className={styles.tel}>*******</div>
        </li>
        <li onClick={handleScrollTop}>
          <div className={styles.fixedText}>TOP</div>
        </li>
      </ul>
    </>
  );
};
export default Layout;
