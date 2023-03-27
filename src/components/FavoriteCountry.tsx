import {
  Box,
  Card,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  ListItem,
} from "@mui/material";

import { CountryItem } from "../types/country";

interface FavoriteCountryProps {
  country: CountryItem;
}

export const FavoriteCountry = (props: FavoriteCountryProps) => {
  const { country } = props;

  const formatThousands = (number: number) =>
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <ListItem sx={{ justifyContent: "center" }} key={country.name.official}>
      <Card
        variant="outlined"
        sx={{
          background: "#111111",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pt: 5,
          pr: 18,
          pl: 18,
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width="100%"
        >
          <Typography fontSize={30}>{country.name.official}</Typography>
          <Link fontSize={25} href={country.maps.googleMaps}>
            Visit →
          </Link>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width="100%"
          gap={10}
        >
          <Box
            component="img"
            sx={{
              width: 600,
              mt: 5,
            }}
            alt="flag"
            src={country.flags.png}
          />
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Capital</TableCell>
                <TableCell>{country.capital?.join(", ")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Region</TableCell>
                <TableCell>{country.region}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Area</TableCell>
                <TableCell>{formatThousands(country.area)} km²</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Population</TableCell>
                <TableCell>{formatThousands(country.population)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Card>
    </ListItem>
  );
};
