import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  token: null,
  firstName: null,
  lastName: null,
  isLogged: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      const { email, token } = action.payload;
      state.email = email;
      state.token = token;
      state.isLogged = true;
    },
    logout(state) {
      state.email = null;
      state.token = null;
      state.firstName = null;
      state.lastName = null;
      state.isLogged = false;
    },
    updateProfil(state, action) {
      const { firstName, lastName } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
    },
  },
});

export const { login, logout, updateProfil } = authSlice.actions;
export default authSlice.reducer;
