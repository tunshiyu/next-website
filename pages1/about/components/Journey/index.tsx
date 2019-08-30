import React from 'react';
import styles from './index.module.less';

export default function Journey() {
  const journey = [
    { time: '2017年10月', desc: '雷数科技有限公司注册成立' },
    { time: '2018年02月', desc: '智能工业云平台研发' },
    {
      time: '2018年03月',
      desc:
        '创始人闫安受国家发改委经济体制和管理研究所邀请 参加“人工智能的产业化应用和解决方案”研讨会',
    },
    { time: '2018年05月', desc: '机场云项目服务上线' },
    { time: '2018年06月', desc: '雷数科技估值1亿元，获天使轮600万元投资' },
    { time: '2018年08月', desc: '孵化的新能源区块链项目估值1亿元 并获得天使轮200万元投资' },
    {
      time: '2018年09月',
      desc: '全资子公司山东镭数获济南高新区2250万元投资， 发展共享仓储、智慧物流平台',
    },
    { time: '2018年10月', desc: '新能源区块链已上链； 荣获阿里巴巴诸神之战浙江总冠军' },
    {
      time: '2018年11月',
      desc: '荣获阿里巴巴诸神之战全球亚军； 新能源区块链与蚂蚁金服达成战略合作，支付宝小程序上线',
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>发展历程</div>
      <div className={styles.line} />
      <div className={styles.body}>
        <div className={styles.journey} />
        {journey.map((item, index) => (
          <div className={styles.journey} key={index}>
            {index % 2 === 0 && <div className={styles.before} />}
            <div className={styles.content}>
              <div className={styles.time}>{item.time}</div>
              <div className={styles.desc}>{item.desc}</div>
            </div>
            {index % 2 === 1 && <div className={styles.after} />}
          </div>
        ))}
      </div>
    </div>
  );
}
