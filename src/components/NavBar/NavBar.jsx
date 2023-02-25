import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../../images/logo.png';
import styles from './NavBar.module.css';

export default function NavBar() {
  const userProfileData = JSON.parse(localStorage.getItem('userProfileData'));
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userProfileData');
    navigate.push('/login');
  };

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img className={styles.logo} alt="argent bank logo" src={logo} />
      </Link>
      <div className={styles.signIn}>
        <FaUserCircle />
        {userProfileData ? (
          <Link to="/" onClick={handleSignOut} className={styles.link}>
            Sign Out
          </Link>
        ) : (
          <Link to="/login" className={styles.link}>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
