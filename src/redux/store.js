import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/courseReducer'; 

const store = configureStore({
  reducer: rootReducer,
});

export default store;