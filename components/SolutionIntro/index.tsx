import React from 'react';
import styles from './index.module.less';
import { SolutionItem } from 'interfaces';
import LinkButton from '@components/LinkButton';

export default function SolutionIntro({ solutions }: { solutions: SolutionItem[] }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>方案介绍</div>
      <div className={styles.body}>
        {solutions.map((solution, index) => (
          <div key={index} className={styles.solution}>
            <img alt={solution.text} src={solution.img} className={styles.img} />
            <div className={styles.text}>{solution.text}</div>
            {solution.subtext && <div className={styles.subtext}>{solution.subtext}</div>}
            {solution.href && (
              <LinkButton
                type="secondary"
                className={styles.link}
                href={solution.href}
                text="查看详情"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
