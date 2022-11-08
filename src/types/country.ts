export interface CountryItem {
  name: CountryName;
  region: string;
  languages: CountryLanguage;
  capital: string[];
  population: number;
  flags: {
    png: string;
  };
}

export type CountryCapital = string;

export interface CountryName {
  common: string;
  official: string;
}

export interface CountryLanguage {
  [key: string]: string;
}

export interface SingleCountryItem {
  name: CountryName;
  region: string;
  languages: CountryLanguage;
  capital: string[];
  population: number;
  flags: string[];
}
