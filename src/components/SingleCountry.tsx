import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CountryItem } from "../types/country";

const SingleCountry = () => {
  const { id } = useParams();

  const [countrydata, setcountrydata] = useState<CountryItem[]>([]);

  const countryurl = `https://restcountries.com/v2/name/${id}?fullText=true`;

  useEffect(() => {
    fetch(countryurl)
      .then((data) => {
        if (!data.ok) {
          console.log(data);
        }
        return data.json();
      })
      .then((data: CountryItem[]) => setcountrydata(data))
      .catch((error) => console.log("Error: " + error));
  }, [countryurl]);

  const countryobject = countrydata[0];

  console.log("Countryobjectname: " + countryobject.name.official);

  const displaycountry = () => {
    if (countryobject) {
      return (
        <>
          <img src={countryobject.flags.png} alt="flag" />
          <p>{countryobject.name.official}</p>
          <p>{countryobject.region}</p>
          <p>{countryobject.capital}</p>
          <p>{countryobject.population}</p>
        </>
      );
    } else {
      return (
        <>
          <p>Error</p>
        </>
      );
    }
  };

  return displaycountry();
};

export default SingleCountry;
