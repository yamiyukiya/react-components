import React from 'react';
import styles from './Wrapper.less';

type Props = { label: string; time: string };

export const Wrapper: SFC<Props> = ({ label, time, children }) => (
  <section className={styles.root}>
    <div className={styles.front}>
      <h3 className={styles.label} id={label}>
        {label}
      </h3>
      <time className={styles.time}>{time}</time>
    </div>
    <div className={styles.content}>{children}</div>
  </section>
);
