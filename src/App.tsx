import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Countries from "./components/Countries";
import SingleCountry from "./components/SingleCountry";

function App() {
  return (
    <div className="App">
      <header>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/countries/:id" element={<SingleCountry />} />
      </Routes>
    </div>
  );
}

export default App;
