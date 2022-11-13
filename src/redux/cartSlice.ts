import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartState } from "../types/countriesstate";
import { CountryItem } from "../types/country";

const initialState: CartState = {
  countrylist: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CountryItem>) => {
      state.countrylist.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.countrylist = state.countrylist.filter(
        (country) => country.name.official !== action.payload
      );
    },
  },
});

export default cartSlice.reducer;
export const { add, remove } = cartSlice.actions;
