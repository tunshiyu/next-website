import React, { useEffect, useState } from 'react';
import styles from './index.module.less';
import classnames from 'classnames';
import Menu, { SubMenu, MenuItem } from 'rc-menu';
import Link from 'next/link';
import LinkButton from '@components/LinkButton';

export default function Header() {
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
    window.scrollTo(0, 0);
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
        <Menu mode="horizontal" className={styles.menu} selectedKeys={['1']}>
          <MenuItem key="1">
            <Link href="/homepage">
              <a>首页</a>
            </Link>
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
              <Link href="/homepage">
                <a>数融平台</a>
              </Link>
            </MenuItem>
            <MenuItem key="2-2">
              <Link href="/homepage">
                <a>数融魔方</a>
              </Link>
            </MenuItem>
            <MenuItem key="2-3">
              <Link href="/homepage">
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
                  <span>大数据解决方案</span>
                </span>
              }
            >
              <MenuItem key="3-1-1">
                <Link href="/homepage">
                  <a>物流大数据</a>
                </Link>
              </MenuItem>
              <MenuItem key="3-1-2">
                <Link href="/homepage">
                  <a>工业大数据</a>
                </Link>
              </MenuItem>
              <MenuItem key="3-1-3">
                <Link href="/homepage">
                  <a>供应链大数据</a>
                </Link>
              </MenuItem>
              <MenuItem key="3-1-4">
                <Link href="/homepage">
                  <a>酒店大数据</a>
                </Link>
              </MenuItem>
              <MenuItem key="3-1-5">
                <Link href="/homepage">
                  <a>智慧城市</a>
                </Link>
              </MenuItem>
              <MenuItem key="3-1-6">
                <Link href="/homepage">
                  <a>机场大数据</a>
                </Link>
              </MenuItem>
            </SubMenu>
            <SubMenu
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
                <Link href="/homepage">
                  <a>物流金融科技</a>
                </Link>
              </MenuItem>
            </SubMenu>
            <MenuItem key="3-3">
              <Link href="/homepage">
                <a>智慧园区解决方案</a>
              </Link>
            </MenuItem>
            <MenuItem key="3-4">
              <Link href="/homepage">
                <a>智慧供应链解决方案解决方案</a>
              </Link>
            </MenuItem>
          </SubMenu>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <span>
                  合作案例
                  <i className="iconfont td-arrowdown" />
                </span>
              </span>
            }
            key="4"
            popupClassName={styles.popupMenu}
          >
            <MenuItem key="4-1">
              <Link href="/homepage">
                <a>大海集团</a>
              </Link>
            </MenuItem>
            <MenuItem key="4-2">
              <Link href="/homepage">
                <a>山东高速</a>
              </Link>
            </MenuItem>
          </SubMenu>
          <MenuItem key="5">
            <Link href="/homepage">
              <a>支持服务</a>
            </Link>
          </MenuItem>
          <MenuItem key="6">
            <Link href="/homepage">
              <a>关于雷数</a>
            </Link>
          </MenuItem>
        </Menu>
        <LinkButton text="立即咨询" href="/homepage" className={styles.btn} />
      </div>
    </div>
  );
}
