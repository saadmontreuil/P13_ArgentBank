import React from 'react'
import styles from './SignIn.module.css'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default function SignIn() {
  return (
    <section class={styles.content}>
    <FaUserCircle/>
    <h1>Sign In</h1>
    <form>
      <div class={styles.input}>
        <label for="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div class={styles.input}>
        <label for="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div class={styles.remember}>
        <input type="checkbox" id="remember-me" />
        <label for="remember-me">
          Remember me
        </label>
        
      </div>
      {/* <a href="./user.html" class="button">Sign In</a> */}
      <Link to="/user" className={styles.link}>
        <button class={styles.button}>Sign In</button>
      </Link>


    </form>
  </section>
  )
}
