import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  const userProfileData = JSON.parse(localStorage.getItem('userProfileData'));

  return (
    <div className={styles.header}>
      <h1>
        Welcome back
        <br />
        {userProfileData.firstName} {userProfileData.lastName}!
      </h1>
      <button type="submit" className={styles.button}> Edit Name</button>
    </div>
  );
}
