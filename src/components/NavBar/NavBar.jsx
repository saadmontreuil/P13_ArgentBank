import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import { FaUserCircle } from 'react-icons/fa'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img className={styles.logo} alt="argent bank logo" src={logo} />
      </Link>
      <div className={styles.signIn}>
      <FaUserCircle />
      <Link to="/login" className={styles.link}>
        Sign In
      </Link>
    </div>
    </nav>
  )
}
