import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1';

export function loginUser(email, password) {
  const requestBody = {
    email,
    password,
  };

  const headers = {
    'Content-Type': 'application/json',
    accept: 'application/json',
  };

  return axios.post(`${BASE_URL}/user/login`, requestBody, { headers })
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export const profileUser = (token) => axios.post(`${BASE_URL}/user/profile`, {}, {
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
  .then((response) => {
    console.log(response);
    return response.data;
  })
  .catch((error) => {
    console.error(error);
    throw error;
  });

// axios.get('http://example.com/api/v1/users', {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
