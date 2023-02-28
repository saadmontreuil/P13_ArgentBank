import React from 'react';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import Transactions from '../../data/transactions.json';
import TransactionItem from '../../components/TransactionItem/TransactionItem';
import styles from './Transaction.module.css';

function Transaction() {
  const navigate = useNavigate();

  const getBack = () => {
    navigate('/profile');
  };

  return (
    <main className={styles.transaction}>
      <button type="button" className={styles.back} onClick={getBack}>
        <RiArrowGoBackFill className={styles.backArrow} />
        <span>Back to Profile</span>
      </button>

      <div className={styles.amount}>
        <h4>Argent Bank Savings (x6712)</h4>
        <h2>$10.928.42</h2>
        <h4>Available Balance</h4>
      </div>

      <div className={styles.listTitles}>
        <span>DATE</span>
        <span>DESCRIPTION</span>
        <span>AMOUNT</span>
        <span>BALANCE</span>
      </div>
      <div className={styles.transactions}>
        {Transactions.map((detail) => (
          <TransactionItem detail={detail} key={detail.id} />
        ))}
      </div>
    </main>
  );
}

export default Transaction;
