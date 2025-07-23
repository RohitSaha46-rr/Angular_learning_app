
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';


interface User {
  id: string;
  username: string;
}

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('token');
    }
  }
});
export const selectUser = (state: RootState) => state.auth.user;

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
