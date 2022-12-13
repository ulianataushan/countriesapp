import React from "react";

import "./App.css";
import { Header } from "./components/Header";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleCountryPage from "./pages/SingleCountryPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries/:name" element={<SingleCountryPage />} />
        <Route path="/favorites" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
