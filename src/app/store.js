import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import { forSaleReducer } from '../features/forsale/forSaleSlice';
import { loginReducer } from '../features/login/loginSlice';


export const store = configureStore({
  reducer: {
    forSale: forSaleReducer,
    login: loginReducer,
  },
});
