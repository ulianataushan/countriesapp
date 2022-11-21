import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartState } from "../types/countriesstate";
import { CountryItem } from "../types/country";

const initialState: CartState = {
  cartcountrylist: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CountryItem>) => {
      if (!state.cartcountrylist.includes(action.payload)) {
        state.cartcountrylist.push(action.payload);
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      state.cartcountrylist = state.cartcountrylist.filter(
        (country) => country.name.official !== action.payload
      );
    },
  },
});

export default cartSlice.reducer;
export const { add, remove } = cartSlice.actions;
