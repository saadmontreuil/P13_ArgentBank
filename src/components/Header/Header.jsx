import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [userProfileData, setUserProfileData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userProfileData'));
    if (data) {
      setUserProfileData(data);
    }
  }, []);
  return (
    <div className={styles.header}>
      <h1>
        Welcome back
        <br />
        {userProfileData?.firstName} {userProfileData?.lastName}!
      </h1>
      <button type="submit" className={styles.button}> Edit Name</button>
    </div>
  );
}
