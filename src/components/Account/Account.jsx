import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Account.module.css';

export default function Account({ name, amount, desc }) {
  return (
    <section className={styles.account}>
      <div className={styles.content}>
        <h3 className={styles.title}>
          {name}
        </h3>
        <p className={styles.amount}>{`$${amount}`}</p>
        <p className={styles.description}>{desc}</p>
      </div>
      <div className={styles.cta}>
        <Link to="/user" className={styles.link}>
          <button type="submit" className={styles.button}>View transactions</button>
        </Link>
      </div>
    </section>
  );
}

Account.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
};
