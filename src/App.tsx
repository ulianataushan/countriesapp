import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import SingleCountryPage from "./pages/SingleCountryPage";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Countries App</h1>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
        <Link to={"/favorites"}>
          <button>Favorites</button>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries/:id" element={<SingleCountryPage />} />
        <Route path="/favorites" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
