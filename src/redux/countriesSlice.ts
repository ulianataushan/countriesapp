import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CountriesState } from "../types/countriesstate";
import { CountryItem, SingleCountryItem } from "../types/country";

const initialState: CountriesState = {
  countrylist: [],
  filtered: [],
  loading: false,
  error: false,
  countryitem: [],
};

const countriesSlice = createSlice({
  name: "countrylist",
  initialState,
  reducers: {
    sort: (state, action: PayloadAction<string>) => {
      state.countrylist = state.countrylist.sort((a, b) => (a > b ? 1 : -1));
    },
    search: (state, action: PayloadAction<string>) => {
      state.filtered = [];
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
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.error = true;
      state.countrylist = [];
    });
    builder.addCase(fetchCountries.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCountry.fulfilled, (state, action) => {
      state.countryitem = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchCountry.rejected, (state, action) => {
      state.error = true;
      state.countryitem = [];
    });
    builder.addCase(fetchCountry.pending, (state, action) => {
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
  async (id: string) => {
    const response = await fetch(
      `https://restcountries.com/v3/name/${id}?fullText=true`
    );

    const data: SingleCountryItem[] = await response.json();
    return data;
  }
);

export default countriesSlice.reducer;
export const { sort, search } = countriesSlice.actions;
