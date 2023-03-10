import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Account from '../../components/Account/Account';
import styles from './Profile.module.css';
import Accounts from '../../data/Accounts.json';
import { profileUser, updateUser } from '../../service/apiRequest';
import { updateProfil } from '../../service/redux/authSlice';

export default function ProfilePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  // const [userProfileData, setUserProfileData] = useState(null);
  const userProfileData = useSelector((state) => state.auth);
  const [isEditingName, setIsEditingName] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      const fetchData = async () => {
        try {
          const response = await profileUser(token);
          console.log(response);
          dispatch(updateProfil(response.body));
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [token]);

  const handleSaveName = () => {
    updateUser(userProfileData.firstName, userProfileData.lastName, token)
      .then((response) => {
        console.log(response);
        setIsEditingName(false);
      }).catch((error) => {
        console.log(error);
      });
  };

  const handleCancelNameEdit = () => {
    setIsEditingName(false);
  };
  const handleFirstNameChange = (e) => {
    dispatch(updateProfil({ ...userProfileData, firstName: e.target.value }));
  };

  const handleLastNameChange = (e) => {
    dispatch(updateProfil({ ...userProfileData, lastName: e.target.value }));
  };
  console.log(userProfileData);

  return (
    <div className="main">
      <div className={styles.dark}>
        <div className={styles.header}>
          <h1>
            Welcome back
            <br />
          </h1>
          {isEditingName ? (
            <div className={styles.editName}>
              <div className={styles.inputName}>
                <input
                  type="text"
                  value={userProfileData.firstName}
                  onChange={handleFirstNameChange}
                />
                <input
                  type="text"
                  value={userProfileData.lastName}
                  onChange={handleLastNameChange}
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
