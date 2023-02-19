import React from 'react'
import SignIn from '../../components/SignIn/SignIn'
import styles from './Login.module.css'

export default function LoginPage() {
  return (
    <div className='main'>
        <div className={styles.dark}>
            <SignIn />
        </div>
    </div>
  )
}
