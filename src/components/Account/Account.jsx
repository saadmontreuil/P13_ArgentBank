import React from 'react'
import styles from './Account.module.css'
import { Link } from 'react-router-dom'

export default function Account({name, amount, desc}) {
  return (
    <section className={styles.account}>
    <div className={styles.content}>
      <h3 className={styles.title} >
        {name}
      </h3>
      <p className={styles.amount}>{"$" + amount}</p>
      <p className={styles.description}>{desc}</p>
    </div>
    <div className={styles.cta}>
        <Link to="/user" className={styles.link}>
            <button className={styles.button}>View transactions</button>
        </Link>
    </div>
  </section>
  )
}
