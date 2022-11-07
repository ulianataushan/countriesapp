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
    <tr key={country.name.official}>
      <td>
        <img src={country.flags.png} alt="flag" />
      </td>
      <td>
        <Link to={`/countries/${country.name.official}`}>
          {country.name.official}
        </Link>
      </td>
      <td>{country.region}</td>
      <td>{country.capital}</td>
      <td>{country.population}</td>
      <td></td>
    </tr>
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Region</th>
            <th>Capital</th>
            <th>Population</th>
            <th>Favorites</th>
          </tr>
        </thead>
        <tbody>{countrylist.length > 0 && displaycountries}</tbody>
      </table>
    </div>
  );
};

export default Countries;
