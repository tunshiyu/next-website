/*
 * @文件描述:人才招聘模块-抽屉组件
 * @公司: thundersdata
 * @作者: 于效仟
 * @Date: 2019-08-21 10:55:51
 * @LastEditors: 于效仟
 * @LastEditTime: 2019-08-21 14:01:47
 */
import React, { useState } from 'react';
import styles from './index.module.less';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

interface DrawerProps {
  position: string;
  conditions: string;
  dutys: string[];
  skills: string[];
  upTitle: string;
  subTitle: string;
}

export default function Drawer(props: DrawerProps) {
  const [opened, toggleOpen] = useState(false);
  const { position, conditions, dutys, skills, upTitle, subTitle } = props;

  return (
    <div className={styles.drawerWrap}>
      <div className={styles.drawer}>
        <div>
          <p className={styles.position}>{position}</p>
          <p className={styles.conditions}>{conditions}</p>
        </div>
        <span className={styles.symbol}>
          {opened ? (
            <IoIosArrowUp size={20} color="#666666" onClick={() => toggleOpen(!opened)} />
          ) : (
            <IoIosArrowDown size={20} color="#666666" onClick={() => toggleOpen(!opened)} />
          )}
        </span>
      </div>

      {opened && (
        <>
          <div className={styles.line}></div>
          <div className={styles.content}>
            <div className={styles.title}>{upTitle}:</div>
            {dutys.map((item, index) => (
              <p key={index} className={styles.text}>
                {item}
              </p>
            ))}
            <div className={styles.title}>{subTitle}:</div>
            {skills.map((item, index) => (
              <p key={index} className={styles.text}>
                {item}
              </p>
            ))}
            <div className={styles.title}>简历投递:</div>
            <div>
              <a href="javascript:;" className={styles.hr}>
                hr@thundersdata.com
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
