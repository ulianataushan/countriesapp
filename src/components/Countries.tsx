import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { CountryItem } from "../types/country";

const Countries = () => {
  const url: string = "https://restcountries.com/v3.1/all";
  const [countrylist, setcountrylist] = useState<CountryItem[]>([]);

  useEffect(() => {
    fetch(url)
      .then((data) => {
        if (!data.ok) {
          console.log(data);
        }
        return data.json();
      })
      .then((data: CountryItem[]) => setcountrylist(data))
      .catch((error) => console.log("Error: " + error));
  }, [url]);

  const displaycountries = countrylist.map((country) => (
    <li key={country.name.official}>
      <img src={country.flags.png} alt="flag" />
      <br />
      <Link to={`/countries/${country.name.official}`}>
        {country.name.official}
      </Link>
      <p>{country.region}</p>
      <p>{country.capital}</p>
      <p>{country.population}</p>
    </li>
  ));

  return (
    <div>
      <ul>{countrylist.length > 0 && displaycountries}</ul>
    </div>
  );
};

export default Countries;
