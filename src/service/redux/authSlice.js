import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  token: null,
  firstName: null,
  lastName: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      const { email, token } = action.payload;
      state.email = email;
      state.token = token;
    },
    logout(state) {
      state.email = null;
      state.token = null;
      state.firstName = null;
      state.lastName = null;
    },
    updateUser(state, action) {
      const { firstName, lastName } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
    },
  },
});

export const { login, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;