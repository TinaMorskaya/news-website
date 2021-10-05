import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersReducer';
import searchReducer from './searchReducer';

export const store = configureStore({
  reducer: {
    user: usersReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
