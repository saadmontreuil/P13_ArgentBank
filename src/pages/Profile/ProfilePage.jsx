import React from 'react';
import Account from '../../components/Account/Account';
import Header from '../../components/Header/Header';
import styles from './Profile.module.css';
import Accounts from '../../data/Accounts.json';

export default function ProfilePage() {
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
