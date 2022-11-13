import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import countrylistReducer from "./../redux/countriesSlice";
import cartReducer from "./../redux/cartSlice";

const store = configureStore({
  reducer: {
    countrylist: countrylistReducer,
    cart: cartReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
