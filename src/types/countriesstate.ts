import { CountryItem, SingleCountryItem } from "./country";

export type CountriesState = {
  countrylist: CountryItem[];
  filtered: CountryItem[];
  loading: boolean;
  error: boolean;
  countryitem: SingleCountryItem[];
};

export type CartState = {
  countrylist: CountryItem[];
};
