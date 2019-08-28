/*
 * @文件描述:公司新闻模块封装
 * options: 必传 配置项
 * options对象的属性：
 * imgUrl: 新闻图片url;
 * title: 新闻标题;
 * time: 新闻时间;
 * newsId: 新闻id;
 * @公司: thundersdata
 * @作者: 于效仟
 * @Date: 2019-08-21 16:18:31
 * @LastEditors: 于效仟
 * @LastEditTime: 2019-08-28 17:13:29
 */
import React from 'react';
import styles from './index.module.less';
import Router from 'next/router';

export interface NewsData {
  imgUrl: string;
  title: string;
  time: string;
  newsId: number;
}

export interface NewsDataProps {
  options: NewsData[];
}

export default function News(props: NewsDataProps) {
  function toNews(newsId: number) {
    Router.push({
      pathname: '/newsDetail',
      query: { newsId: newsId },
    });
  }
  return (
    <>
      <div className={styles.titleText}>公司新闻</div>
      <div className={styles.newsWrap}>
        {props.options &&
          props.options.map((option: NewsData, index) => (
            <div key={index} className={styles.newsCard}>
              <img
                src={option.imgUrl}
                alt=""
                className={styles.img}
                onClick={() => toNews(option.newsId)}
              />
              <div className={styles.title} onClick={() => toNews(option.newsId)}>
                {option.title}
              </div>
              <div className={styles.time}>{option.time}</div>
            </div>
          ))}
      </div>
    </>
  );
}
