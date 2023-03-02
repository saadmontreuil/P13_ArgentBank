/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-no-comment-textnodes */
import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { loginUser } from '../../service/apiRequest';

import styles from './Login.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ status: false, message: '' });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/profile');
    }
  }, [navigate]);

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
      .catch(() => {
        setError({ status: true, message: 'Invalid email or password' });
      });
  }

  return (
    <div className="main">
      <div className={styles.dark}>
        <section className={styles.content}>
          <FaUserCircle />
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className={`${styles.input} ${error.status ? styles.error : ''}`}>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={`${styles.input} ${error.status ? styles.error : ''}`}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error.status && <div className={styles.errorMsg}>{error.message}</div>}
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
