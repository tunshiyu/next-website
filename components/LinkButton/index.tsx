import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import styles from './index.module.less';

interface LinkButtonProps {
  text: string;
  href: string;
  className?: React.CSSProperties;
  onClick?: () => void;
  type: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, href, className, onClick, type }) => (
  <Link href={href}>
    <a className={classnames(styles[type], className)} onClick={onClick}>
      {text}
    </a>
  </Link>
);
LinkButton.defaultProps = {
  type: 'primary',
};

export default LinkButton;
