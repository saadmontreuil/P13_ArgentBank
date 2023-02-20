import React from 'react'
import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className={styles.button}> Edit Name</button>
    </div>
  )
}
