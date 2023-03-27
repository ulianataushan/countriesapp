import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CountryItem, SingleCountryItem } from "../types/country";
import { CountriesState } from "../types/countriesstate";

const initialState: CountriesState = {
  countrylist: [],
  filtered: [],
  loading: false,
  error: false,
  countryitem: [],
};

let order = false;

const countriesSlice = createSlice({
  name: "countrylist",
  initialState,
  reducers: {
    sortByName: (state) => {
      if (order) {
        state.countrylist.sort((a, b) =>
          a.name.official < b.name.official ? 1 : -1
        );
      } else {
        state.countrylist.sort((a, b) =>
          a.name.official > b.name.official ? 1 : -1
        );
      }
      order = !order;
    },
    search: (state, action: PayloadAction<string>) => {
      let input = action.payload;
      if (!input) {
        state.filtered = [];
      } else {
        state.filtered = state.countrylist.filter((country) =>
          country.name.official
            .toLocaleLowerCase()
            .includes(input.toLowerCase())
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countrylist = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchCountries.rejected, (state) => {
      state.error = true;
      state.countrylist = [];
    });
    builder.addCase(fetchCountries.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCountry.fulfilled, (state, action) => {
      state.countryitem = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchCountry.rejected, (state) => {
      state.error = true;
      state.countryitem = [];
    });
    builder.addCase(fetchCountry.pending, (state) => {
      state.loading = true;
    });
  },
});

export const fetchCountries = createAsyncThunk(
  "countrylist/fetchCountries",
  async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data: CountryItem[] = await response.json();
    return data;
  }
);

export const fetchCountry = createAsyncThunk(
  "countryitem/fetchCountry",
  async (name: string) => {
    const response = await fetch(
      `https://restcountries.com/v3/name/${name}?fullText=true`
    );

    const data: SingleCountryItem[] = await response.json();
    return data;
  }
);

const countriesReducer = countriesSlice.reducer;
export default countriesReducer;
export const { sortByName, search } = countriesSlice.actions;
