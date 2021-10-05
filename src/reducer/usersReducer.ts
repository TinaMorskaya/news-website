import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface UserState {
  email: string;
  name: string;
  token: string;
}

const initialState: UserState = {
  email: '',
  token: '',
  name: 'Smiling patty',
};

export const usersReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      const { email, token } = action.payload;
      state.email = email;
      state.token = token;
    },
    updateProfile: (state, action: PayloadAction<any>) => {
      const { email, token, name } = action.payload;
      state.email = email;
      state.token = token;
      state.name = name
    },
  },
});

export const { updateProfile, login } = usersReducer.actions;

export const userSelector = (state: RootState) => state.user;

export default usersReducer.reducer;
