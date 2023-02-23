import React from 'react';
import styles from './Banner.module.css';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <section className={styles.content}>
        <p className={styles.subtitle}>No fees.</p>
        <p className={styles.subtitle}>No minimum deposit.</p>
        <p className={styles.subtitle}>High interest rates.</p>
        <p className={styles.text}>Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
}
