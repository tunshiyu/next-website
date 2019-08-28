/*
 * @文件描述:header
 * @ 属性 :
 * selectedKeys:active的参照,值为菜单对应的key
 * notScrollToTop: 有些情况不触发跳到顶部，则传该属性
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-08-20 19:05:22
 * @LastEditors: 于效仟
 * @LastEditTime: 2019-08-28 17:35:39
 */
import React, { useEffect, useState } from 'react';
import styles from './index.module.less';
import classnames from 'classnames';
import Menu, { SubMenu, MenuItem } from 'rc-menu';
import Link from 'next/link';
import Router from 'next/router';
import LinkButton from '@components/LinkButton';

export default function Header({
  selectedKeys = [],
  notScrollToTop,
}: {
  selectedKeys: string[];
  notScrollToTop?: boolean;
}) {
  const [scrollCls, changeScrollCls] = useState('');

  function doScroll() {
    const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollTop > 0) {
      changeScrollCls(styles.sticky);
    } else {
      changeScrollCls('');
    }
  }

  useEffect(() => {
    !notScrollToTop && window.scrollTo(0, 0);
  });

  useEffect(() => {
    window.addEventListener('scroll', doScroll);

    return () => {
      window.removeEventListener('scroll', doScroll);
    };
  });

  return (
    <div className={classnames(styles.container, scrollCls)}>
      <div className={styles.content}>
        <Link href="/homepage">
          <img
            src={scrollCls ? '/static/sticky-logo@2x.png' : '/static/logo-header@2x.png'}
            alt="杭州雷数科技有限公司"
            className={styles.logo}
          />
        </Link>
        <Menu mode="horizontal" className={styles.menu} selectedKeys={selectedKeys}>
          <MenuItem key="1">
            <div className={styles.linkWrap}>
              <Link href="/homepage">
                <a>首页</a>
              </Link>
            </div>
          </MenuItem>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <span>
                  产品服务
                  <i className="iconfont td-arrowdown" />
                </span>
              </span>
            }
            key="2"
            popupClassName={styles.popupMenu}
          >
            <MenuItem key="2-1">
              <Link href="/srPlatform">
                <a>数融平台</a>
              </Link>
            </MenuItem>
            <MenuItem key="2-2">
              <Link href="/srCube">
                <a>数融魔方</a>
              </Link>
            </MenuItem>
            <MenuItem key="2-3">
              <Link href="/srIntel">
                <a>数融智能</a>
              </Link>
            </MenuItem>
          </SubMenu>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <span>
                  解决方案
                  <i className="iconfont td-arrowdown" />
                </span>
              </span>
            }
            key="3"
            popupClassName={styles.popupMenu}
          >
            <SubMenu
              key="3-1"
              popupClassName={styles.popupMenu}
              expandIcon={
                <i className={classnames('iconfont', 'td-arrowright', styles.arrowRight)} />
              }
              title={
                <span className="submenu-title-wrapper">
                  <span onClick={() => Router.push('/bigData')} style={{ cursor: 'pointer' }}>
                    大数据解决方案
                  </span>
                </span>
              }
            >
              <MenuItem key="3-1-1">
                <Link href="/logistics">
                  <a>物流大数据</a>
                </Link>
              </MenuItem>
              <MenuItem key="3-1-2">
                <Link href="/industry">
                  <a>工业大数据</a>
                </Link>
              </MenuItem>
              <MenuItem key="3-1-3">
                <Link href="/supplyChain">
                  <a>供应链大数据</a>
                </Link>
              </MenuItem>
              <MenuItem key="3-1-4">
                <Link href="/hotel">
                  <a>酒店大数据</a>
                </Link>
              </MenuItem>
              <MenuItem key="3-1-5">
                <Link href="/smartCity">
                  <a>智慧城市</a>
                </Link>
              </MenuItem>
              <MenuItem key="3-1-6">
                <Link href="/airplane">
                  <a>机场大数据</a>
                </Link>
              </MenuItem>
            </SubMenu>
            {/* 金融科技解决方案的子页面暂无完整方案，暂时关闭，只开启父级MenuItem */}
            {/* <SubMenu
              key="3-2"
              popupClassName={styles.popupMenu}
              expandIcon={
                <i className={classnames('iconfont', 'td-arrowright', styles.arrowRight)} />
              }
              title={
                <span className="submenu-title-wrapper">
                  <span>金融科技解决方案</span>
                </span>
              }
            >
              <MenuItem key="3-2-1">
                <Link href="/homepage">
                  <a>融资租赁金融科技</a>
                </Link>
              </MenuItem>
              <MenuItem key="3-2-2">
                <Link href="/homepage">
                  <a>供应链金融科技</a>
                </Link>
              </MenuItem>
              <MenuItem key="3-2-3">
                <Link href="/finTech">
                  <a>物流金融科技</a>
                </Link>
              </MenuItem>
            </SubMenu> */}
            <MenuItem key="3-2">
              <Link href="/finTech">
                <a>金融科技解决方案</a>
              </Link>
            </MenuItem>
            <MenuItem key="3-3">
              <Link href="/smartPark">
                <a>智慧园区解决方案</a>
              </Link>
            </MenuItem>
            <MenuItem key="3-4">
              <Link href="/smartChain">
                <a>智慧供应链解决方案</a>
              </Link>
            </MenuItem>
          </SubMenu>
          {/* <MenuItem key="5">
            <div className={styles.linkWrap}>
              <Link href="/homepage">
                <a>支持服务</a>
              </Link>
            </div>
          </MenuItem> */}
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <span>
                  关于雷数
                  <i className="iconfont td-arrowdown" />
                </span>
              </span>
            }
            key="6"
            popupClassName={styles.popupMenu}
          >
            <MenuItem key="6-1">
              <div className={styles.linkWrap}>
                <Link href="/about">
                  <a>公司简介</a>
                </Link>
              </div>
            </MenuItem>
            <MenuItem key="6-2">
              <div className={styles.linkWrap}>
                <Link href="/recruitment">
                  <a>人才招聘</a>
                </Link>
              </div>
            </MenuItem>
          </SubMenu>
        </Menu>
        <LinkButton type="primary" text="立即咨询" href="/homepage" className={styles.btn} />
      </div>
    </div>
  );
}
