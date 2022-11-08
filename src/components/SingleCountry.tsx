import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { SingleCountryItem } from "../types/country";

const SingleCountry = () => {
  const { id } = useParams();

  const [countrydata, setcountrydata] = useState<SingleCountryItem[]>([]);

  const countryurl = `https://restcountries.com/v3/name/${id}?fullText=true`;

  useEffect(() => {
    fetch(countryurl)
      .then((data) => {
        if (!data.ok) {
          console.log(data);
        }
        return data.json();
      })
      .then((data: SingleCountryItem[]) => setcountrydata(data))
      .catch((error) => console.log("Error: " + error));
  }, [countryurl]);

  const countryobject = countrydata[0];

  const displaycountry = () => {
    if (countrydata.length === 0) {
      return (
        <>
          <p>Loading...</p>
        </>
      );
    } else if (countrydata.length > 0) {
      console.log(countryobject);
      return (
        <>
          <img src={countryobject.flags[1]} alt="flag" />
          <p>{countryobject.name.official}</p>
          <p>{countryobject.region}</p>
          <p>{countryobject.capital}</p>
          <p>{countryobject.population}</p>
        </>
      );
    } else {
      return <div>Error</div>;
    }
  };
  return displaycountry();
};

export default SingleCountry;
