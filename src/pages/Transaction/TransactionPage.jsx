import React, { useState } from 'react';
import { RiArrowGoBackFill, RiPencilFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import Transactions from '../../data/transactions.json';
import styles from './Transaction.module.css';

function Transaction() {
  const [note, setNote] = useState({ value: '', show: '' });
  const [open, setOpen] = useState(false);
  const [pen, setPen] = useState(false);
  const navigate = useNavigate();

  const getBack = () => {
    navigate('/profile');
  };

  const handleChange = (e) => {
    setNote({ value: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    setNote({ show: note.value });
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
          <section className={styles.transactionItem} key={detail.id}>
            <div className={styles.transactionContent}>
              <div>{detail.date}</div>
              <div>{detail.description}</div>
              <div>{detail.amount}</div>
              <div>{detail.balance}</div>
              <button className={styles.button} type="button" onClick={() => setOpen(!open)}>
                {!open ? 'Open' : 'Close'}
              </button>
            </div>

            {open && (
            <div className={styles.details}>
              <div>Transaction Type: {detail.type}</div>
              <div>Category: {detail.category} <RiPencilFill /></div>
              <div>
                Note:{' '}
                <button className={styles.pen} type="button" onClick={() => setPen(!pen)}>
                  <RiPencilFill />
                </button>
                <div>{note.show}</div>
                {pen && (
                <div>
                  <div className={styles.input}>
                    <input type="text" onChange={(e) => handleChange(e)} value={note.value} />
                  </div>
                  <button className={styles.button} type="submit" onClick={submit}>Submit</button>
                </div>
                )}
              </div>
            </div>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}

export default Transaction;
