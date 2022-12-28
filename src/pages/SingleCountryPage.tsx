import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Card, Typography } from "@mui/material";

import { UseAppDispatch, useAppSelector } from "../app/hooks";
import { fetchCountry } from "../redux/countriesSlice";

const SingleCountryPage = () => {
  const { name } = useParams();

  const dispatch = UseAppDispatch();

  const { countryitem } = useAppSelector((state) => state.countrylist);

  useEffect(() => {
    if (name) {
      dispatch(fetchCountry(name));
    }
  }, [dispatch, name]);

  const countryobject = countryitem[0];

  const displaycountry = () => {
    if (countryitem.length === 0) {
      return (
        <>
          <p>Loading...</p>
        </>
      );
    }

    const card = (
      <>
        <img src={countryobject.flags[1]} alt="flag" />
        <Typography component="p" sx={{ m: 1, fontWeight: "bold" }}>
          {countryobject.name.official}
        </Typography>
        <Typography component="p" sx={{ fontWeight: "meduim" }}>
          Region: {countryobject.region}
        </Typography>
        <Typography component="p" sx={{ fontWeight: "meduim" }}>
          Capital: {countryobject.capital}
        </Typography>
        <Typography component="p" sx={{ fontWeight: "meduim" }}>
          Population:{countryobject.population}
        </Typography>
      </>
    );

    return (
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 5,
          m: 10,
        }}
      >
        {card}
      </Card>
    );
  };
  return displaycountry();
};

export default SingleCountryPage;
