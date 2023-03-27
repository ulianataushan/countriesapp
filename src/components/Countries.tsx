import { Link } from "react-router-dom";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { UseAppDispatch, useAppSelector } from "../app/hooks";
import { sortByName } from "../redux/countriesSlice";
import { add, remove } from "../redux/cartSlice";
import { CountryItem } from "../types/country";

interface Props {
  countrylist: CountryItem[];
}

const Countries = ({ countrylist }: Props) => {
  const dispatch = UseAppDispatch();

  const { cartcountrylist } = useAppSelector((state) => state.cart);

  const formatThousands = (number: number) =>
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const sortCountries = () => {
    dispatch(sortByName());
  };

  const liked = (country: CountryItem) => cartcountrylist.includes(country);

  const handleFavorite = (country: CountryItem) => {
    if (liked(country)) {
      dispatch(remove(country.name.official));
    } else {
      dispatch(add(country));
    }
  };

  const displaycountries = countrylist.map((country) => (
    <TableRow key={country.name.official}>
      <TableCell>
        <Link to={`/countries/${country.name.official}`}>
          <img
            src={country.flags.png}
            alt={`${country.name.official} flag`}
            width="100px"
            height="70px"
          />
        </Link>
      </TableCell>
      <TableCell>
        <Link
          to={`/countries/${country.name.official}`}
          style={{ textDecoration: "none" }}
        >
          <Typography color="primary" sx={{ m: 1 }}>
            {country.name.official}
          </Typography>
        </Link>
      </TableCell>
      <TableCell>{country.capital?.join(", ")}</TableCell>
      <TableCell>{formatThousands(country.area)} km²</TableCell>
      <TableCell>
        <IconButton color="primary" onClick={() => handleFavorite(country)}>
          {liked(country) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </TableCell>
    </TableRow>
  ));

  return (
    <Paper sx={{ pt: 10, pl: 20, pr: 20, background: "#111111" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>FLAG</TableCell>
              <TableCell>
                NAME
                <IconButton
                  color="primary"
                  size="small"
                  sx={{ ml: 1 }}
                  onClick={() => {
                    sortCountries();
                  }}
                >
                  <SortByAlphaIcon />
                </IconButton>
              </TableCell>
              <TableCell>CAPITAL</TableCell>
              <TableCell width="20%">AREA</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{displaycountries}</TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Countries;
