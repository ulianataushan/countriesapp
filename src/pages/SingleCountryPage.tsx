import { useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  Box,
  Card,
  CircularProgress,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

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
        <Box
          sx={{
            pt: 50,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      );
    }

    const formatThousands = (number: number) =>
      number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    const card = (
      <>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width="100%"
        >
          <Typography fontSize={30}>{countryobject.name.official}</Typography>
          <Link fontSize={25} href={countryobject.maps.googleMaps}>
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
              width: 900,
              mt: 5,
            }}
            alt="flag"
            src={countryobject.flags[1]}
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
                <TableCell>{countryobject.capital?.join(", ")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Region</TableCell>
                <TableCell>{countryobject.region}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Area</TableCell>
                <TableCell>{formatThousands(countryobject.area)} km²</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Population</TableCell>
                <TableCell>
                  {formatThousands(countryobject.population)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </>
    );

    return (
      <Card
        variant="outlined"
        sx={{
          background: "#111111",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          ml: 17,
          mr: 17,
          p: 5,
        }}
      >
        {card}
      </Card>
    );
  };
  return displaycountry();
};

export default SingleCountryPage;
