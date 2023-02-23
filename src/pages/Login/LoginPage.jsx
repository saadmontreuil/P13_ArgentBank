/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import loginUser from '../../service/apiRequest';

import styles from './Login.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    loginUser(email, password)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem('token', response.body.token);
          navigate('/profile');
        }
        console.log(response.message);
        return null;
      })
      .catch((error) => {
        console.error(error);
        console.log('email ou mot de passe invalide');
      });
  }

  return (
    <div className="main">
      <div className={styles.dark}>
        <section className={styles.content}>
          <FaUserCircle />
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.input}>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={styles.input}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className={styles.remember}>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">
                Remember me
              </label>

            </div>
            <button type="submit" className={styles.button}>Sign In</button>

          </form>
        </section>
      </div>
    </div>
  );
}
