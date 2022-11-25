import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import { forSaleReducer } from '../features/forsale/forSaleSlice';


export const store = configureStore({
  reducer: {
    forSale: forSaleReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
