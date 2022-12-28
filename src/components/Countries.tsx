import { Link } from "react-router-dom";
import { UseAppDispatch, useAppSelector } from "../app/hooks";

import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { add, remove } from "../redux/cartSlice";
import { CountryItem } from "../types/country";
import { sortAtoZ } from "../redux/countriesSlice";
import Typography from "@mui/material/Typography";

interface Props {
  countrylist: CountryItem[];
}

const Countries = ({ countrylist }: Props) => {
  const dispatch = UseAppDispatch();

  const { cartcountrylist } = useAppSelector((state) => state.cart);

  const handleFavorite = (country: CountryItem) => {
    if (
      cartcountrylist.find(
        (item) => item.name.official === country.name.official
      )
    ) {
      dispatch(remove(country.name.official));
    } else {
      dispatch(add(country));
    }
  };

  const sortCountries = () => {
    dispatch(sortAtoZ());
  };

  const displaycountries = countrylist.map((country) => (
    <TableRow key={country.name.official}>
      <TableCell>
        <img
          src={country.flags.png}
          alt={`${country.name.official} flag`}
          width="100px"
        />
      </TableCell>
      <TableCell>
        <Link to={`/countries/${country.name.official}`}>
          <Typography sx={{ m: 1, fontWeight: "bold" }}>
            {country.name.official}
          </Typography>
        </Link>
      </TableCell>
      <TableCell>{country.region}</TableCell>
      <TableCell>{country.capital?.join(", ")}</TableCell>
      <TableCell>{country.population}</TableCell>{" "}
      <TableCell>
        <IconButton color="secondary" onClick={() => handleFavorite(country)}>
          <FavoriteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  ));

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Flag</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>
                Name
                <IconButton
                  onClick={() => {
                    sortCountries();
                  }}
                >
                  <SortByAlphaIcon />
                </IconButton>
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Region</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Capital</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Population</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Favorites</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{displaycountries}</TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Countries;
