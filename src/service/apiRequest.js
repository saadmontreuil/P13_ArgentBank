import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1';

export default function loginUser(email, password) {
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
