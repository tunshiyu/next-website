import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import styles from './index.module.less';

export default function LinkButton({
  text,
  href,
  className,
  onClick,
}: {
  text: string;
  href: string;
  className?: React.CSSProperties;
  onClick?: () => void;
}) {
  return (
    <Link href={href}>
      <a className={classnames(styles.link, className)} onClick={onClick}>
        {text}
      </a>
    </Link>
  );
}
