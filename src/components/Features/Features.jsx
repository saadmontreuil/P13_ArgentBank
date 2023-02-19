import React from 'react'
import styles from './Features.module.css'

export default function Features({icon,content,title }) {
  return (
    <div className={styles.item}>
      <img className={styles.icon} src={icon} alt="icons" />
      <h3 className={styles.title}>{title}</h3>
      <p>{content}</p>
    </div>
  )
}
