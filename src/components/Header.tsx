import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  Stack,
  TextField,
  Box,
} from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";

import { UseAppDispatch } from "../app/hooks";
import { fetchCountries, search } from "../redux/countriesSlice";

export const Header = () => {
  const dispatch = UseAppDispatch();

  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <PublicIcon sx={{ display: { xs: "none", md: "flex" } }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Countries App
          </Typography>
          <TextField
            id="filled-search"
            label="Search"
            type="search"
            variant="filled"
            size="small"
            color="primary"
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
            }}
            value={input}
            onChange={(e: any) => {
              setInput(e.target.value);
              dispatch(search(input));
            }}
          />
          <Stack direction="row" spacing={2}>
            <Link to={"/"}>
              <Button variant="contained" startIcon={<HomeIcon />}>
                Home
              </Button>
            </Link>
            <Link to={"/favorites"}>
              <Button variant="contained" endIcon={<FavoriteIcon />}>
                Favorites
              </Button>
            </Link>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
