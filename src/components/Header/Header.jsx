// import React, { useState, useEffect } from 'react';
// import styles from './Header.module.css';
// import { updateUser } from '../../service/apiRequest';

// export default function Header() {
//   const [userProfileData, setUserProfileData] = useState(null);
//   const [isEditingName, setIsEditingName] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem('userProfileData'));
//     if (data) {
//       setUserProfileData(data);
//       setFirstName(data.firstName);
//       setLastName(data.lastName);
//     }
//   }, [localStorage.getItem('userProfileData')]);

//   const handleSaveName = () => {
//     const token = localStorage.getItem('token');
//     updateUser(firstName, lastName, token)
//       .then((response) => {
//         console.log(response);
//         setUserProfileData((prevData) => ({ ...prevData, firstName, lastName }));
//         setIsEditingName(false);
//       }).catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleCancelNameEdit = () => {
//     setIsEditingName(false);
//     setFirstName(userProfileData.firstName);
//     setLastName(userProfileData.lastName);
//   };

//   return (
//     <div className={styles.header}>
//       {isEditingName ? (
//         <div className={styles.editName}>
//           <div className={styles.inputName}>
//             <input
//               type="text"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//             <input
//               type="text"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//             />
//           </div>
//           <div className={styles.editButton}>
//  <button className={styles.button} type="button" onClick={handleSaveName}>Save</button>
//  <button className={styles.button} type="button" onClick={handleCancelNameEdit}>Cancel</button>
//           </div>
//         </div>
//       ) : (
//         <>
//           <h1>
//             Welcome back
//             <br />
//             {userProfileData?.firstName} {userProfileData?.lastName}!
//           </h1>
// <button type="submit" className=
// {styles.button} onClick={() => setIsEditingName(true)}> Edit Name</button>
//         </>
//       )}
//     </div>
//   );
// }
