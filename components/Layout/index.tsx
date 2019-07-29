import React from 'react';
import Head from 'next/head';

const Layout: React.FC = props => {
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
          overflow: auto;
        }
        img {
          display: block;
        }
      `}</style>
      {props.children}
    </>
  );
};
export default Layout;
