import { React, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { login } from '../../service/redux/authSlice';
import { loginUser } from '../../service/apiRequest';

import styles from './Login.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ status: false, message: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(login({ email: '', token }));
      navigate('/profile');
    }
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    loginUser(email, password)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          dispatch(login({ email, token: response.body.token }));
          localStorage.setItem('token', response.body.token);
          navigate('/profile');
        } else {
          setError({ status: true, message: response.message });
        }
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
