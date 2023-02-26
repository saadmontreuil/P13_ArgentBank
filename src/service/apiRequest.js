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
export const updateUser = (firstName, lastName, token) => axios.put(`${BASE_URL}/user/profile`, {
  firstName,
  lastName,
}, {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});
