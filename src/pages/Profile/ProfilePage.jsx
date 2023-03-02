import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Account from '../../components/Account/Account';
import styles from './Profile.module.css';
import Accounts from '../../data/Accounts.json';
import { profileUser, updateUser } from '../../service/apiRequest';

export default function ProfilePage() {
  const navigate = useNavigate();
  const [userProfileData, setUserProfileData] = useState(null);
  const [isEditingName, setIsEditingName] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      const fetchData = async () => {
        try {
          const response = await profileUser(token);
          console.log(userProfileData);
          setUserProfileData(response.body);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, []);

  const handleSaveName = () => {
    const token = localStorage.getItem('token');
    updateUser(firstName, lastName, token)
      .then((response) => {
        console.log(response);
        setUserProfileData((prevData) => ({ ...prevData, firstName, lastName }));
        setIsEditingName(false);
      }).catch((error) => {
        console.log(error);
      });
  };

  const handleCancelNameEdit = () => {
    setIsEditingName(false);
    setFirstName(userProfileData.firstName);
    setLastName(userProfileData.lastName);
  };

  return (
    <div className="main">
      <div className={styles.dark}>
        <div className={styles.header}>
          {isEditingName ? (
            <div className={styles.editName}>
              <div className={styles.inputName}>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className={styles.editButton}>
                <button className={styles.button} type="button" onClick={handleSaveName}>Save</button>
                <button className={styles.button} type="button" onClick={handleCancelNameEdit}>Cancel</button>
              </div>
            </div>
          ) : (
            <>
              <h1>
                Welcome back
                <br />
                {userProfileData?.firstName} {userProfileData?.lastName}!
              </h1>
              <button type="submit" className={styles.button} onClick={() => setIsEditingName(true)}> Edit Name</button>
            </>
          )}
        </div>
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
