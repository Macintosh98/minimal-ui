import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import authenticationReducer from './pages/authentication/authenticationSlice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    authentication: authenticationReducer
  }
});
