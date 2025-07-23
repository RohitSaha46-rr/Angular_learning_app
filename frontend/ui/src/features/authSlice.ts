// features/authSlice.ts
import { createSlice } from '@reduxjs/toolkit';

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

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
