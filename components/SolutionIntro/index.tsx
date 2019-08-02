import React from 'react';
import styles from './index.module.less';
import { SolutionItem } from 'interfaces';
import LinkButton from '@components/LinkButton';

export default function SolutionIntro({
  solutions,
  subtitle,
  desc,
}: {
  solutions: SolutionItem[];
  subtitle?: string;
  desc?: string;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>方案介绍</div>
      {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      {desc && <div className={styles.desc}>{desc}</div>}
      <div className={styles.body}>
        {solutions.map((solution, index) => (
          <div key={index} className={styles.solution}>
            <img
              alt={solution.text}
              src={solution.img}
              className={solution.href ? styles.imgBig : styles.imgSmall}
            />
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
