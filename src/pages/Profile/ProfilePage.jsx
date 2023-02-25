import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Account from '../../components/Account/Account';
import Header from '../../components/Header/Header';
import styles from './Profile.module.css';
import Accounts from '../../data/Accounts.json';
import { profileUser } from '../../service/apiRequest';

export default function ProfilePage() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      const fetchData = async () => {
        try {
          const response = await profileUser(token);
          const userProfileData = response.body;
          localStorage.setItem('userProfileData', JSON.stringify(userProfileData));
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [navigate]);

  return (
    <div className="main">
      <div className={styles.dark}>
        <Header />
        {Accounts.map((account) => (
          <Account
            key={account.id}
            name={account.name}
            amount={account.amount}
            desc={account.desc}
          />
        ))}

      </div>

    </div>

  );
}
