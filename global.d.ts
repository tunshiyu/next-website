/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-07-22 19:44:52
 * @LastEditors: 陈杰
 * @LastEditTime: 2019-07-29 22:05:59
 */
declare module '*.less';

declare module 'rc-menu' {
  interface TitleEventEntity {
    key: string;
    domEvent: Event;
  }
  export interface MenuProps {
    mode: string;
    className?: React.CSSProperties;
    selectedKeys: string[];
  }
  export interface SubMenuProps {
    title: string | JSX.Element;
    onTitleClick?: (e: TitleEventEntity) => void;
    popupClassName?: React.CSSProperties;
    expandIcon?: React.ReactNode;
  }
  export default class Menu extends React.Component<MenuProps> {}
  export class SubMenu extends React.Component<SubMenuProps> {}
  export class MenuItem extends React.Component {}
}
