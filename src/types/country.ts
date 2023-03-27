export interface CountryName {
  common: string;
  official: string;
}

export interface CountryLanguage {
  [key: string]: string;
}

export interface CountryItem {
  name: CountryName;
  region: string;
  languages?: CountryLanguage;
  capital?: string[];
  population: number;
  flags: {
    png: string;
  };
  maps: {
    googleMaps: string;
  };
  area: number;
}

export interface SingleCountryItem {
  name: CountryName;
  region: string;
  languages: CountryLanguage;
  capital: string[];
  population: number;
  timezones: string[];
  continents: string[];
  area: number;
  flags: string[];
  maps: {
    googleMaps: string;
  };
}
