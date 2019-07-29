import React from 'react';
import styles from './index.module.less';
import LinkButton from '@components/LinkButton';

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>如需了解详情，您可留言咨询，我们将为您提供更多信息和资料</div>
      <LinkButton text="立即咨询" href="/" />
    </div>
  );
}
