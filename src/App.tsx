import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Countries from "./components/Countries";
import SingleCountry from "./components/SingleCountry";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/countries/:id" element={<SingleCountry />} />
      </Routes>
    </div>
  );
}

export default App;
