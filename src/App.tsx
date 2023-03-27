import "./App.css";

import { Routes, Route } from "react-router-dom";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import { Header } from "./components/Header";
import HomePage from "./pages/HomePage";
import SingleCountryPage from "./pages/SingleCountryPage";
import CartPage from "./pages/CartPage";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#E0E0E0",
      },
      secondary: {
        main: "#e6aed6",
      },
      text: {
        primary: "#E0E0E0",
        secondary: "#1B264F",
      },
      background: {
        default: "#111111",
      },
    },
    typography: {
      fontFamily: "font-family: 'Nanum Gothic', sans-serif",
      fontSize: 17,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/countries/:name" element={<SingleCountryPage />} />
          <Route path="/favorites" element={<CartPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
