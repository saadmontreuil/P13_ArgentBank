import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';
import { logout } from '../../service/redux/authSlice';
import logo from '../../images/logo.png';
import styles from './NavBar.module.css';

export default function NavBar() {
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img className={styles.logo} alt="argent bank logo" src={logo} />
      </Link>
      <div className={styles.signIn}>
        <FaUserCircle />
        {token ? (
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
