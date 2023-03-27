import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  InputAdornment,
  IconButton,
  Typography,
  TextField,
  Paper,
  Stack,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";

import { fetchCountries, search } from "../redux/countriesSlice";
import { UseAppDispatch } from "../app/hooks";

export const Header = () => {
  const dispatch = UseAppDispatch();

  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <Paper
      component="form"
      sx={{
        pt: 5,
        pl: 20,
        pr: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#111111",
        gap: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Typography color="primary" fontSize={35}>
            Countries App
          </Typography>
        </Link>
        <Stack direction="row">
          <Link to={"/"}>
            <IconButton color="primary" sx={{ p: "10px" }}>
              <HomeIcon />
            </IconButton>
          </Link>
          <Link to={"/favorites"}>
            <IconButton color="primary" sx={{ p: "10px" }}>
              <FavoriteIcon />
            </IconButton>
          </Link>
        </Stack>
      </Box>
      <TextField
        sx={{ width: "100%" }}
        variant="standard"
        color="primary"
        value={input}
        focused
        onChange={(e: any) => {
          setInput(e.target.value);
          dispatch(search(input));
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                color="primary"
                type="button"
                sx={{ p: "10px" }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Paper>
  );
};
