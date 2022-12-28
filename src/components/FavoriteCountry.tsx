import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import ListItem from "@mui/material/ListItem";

import { CountryItem } from "../types/country";

interface FavoriteCountryProps {
  country: CountryItem;
}

export const FavoriteCountry = (props: FavoriteCountryProps) => {
  const { country } = props;
  return (
    <ListItem sx={{ justifyContent: "center" }} key={country.name.official}>
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 5,
          m: 5,
        }}
      >
        <img src={country.flags.png} alt="flag" />
        <Typography component="p" sx={{ m: 1, fontWeight: "bold" }}>
          {country.name.official}
        </Typography>
        <Typography component="p" sx={{ fontWeight: "meduim" }}>
          Region: {country.region}
        </Typography>
        <Typography component="p" sx={{ fontWeight: "meduim" }}>
          Capital: {country.capital}
        </Typography>
        <Typography component="p" sx={{ fontWeight: "meduim" }}>
          Population: {country.population}
        </Typography>
      </Card>
    </ListItem>
  );
};
