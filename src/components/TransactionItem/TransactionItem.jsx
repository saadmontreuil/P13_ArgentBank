import React, { useState } from 'react';
import { RiPencilFill } from 'react-icons/ri';
import styles from './TransactionItem.module.css';

export default function TransactionItem({ detail }) {
  const [note, setNote] = useState({ value: '', show: '' });
  const [open, setOpen] = useState(false);
  const [pen, setPen] = useState(false);
  const handleChange = (e) => {
    setNote({ value: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    setNote({ show: note.value });
  };
  return (
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
  );
}
