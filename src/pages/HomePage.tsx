import React, { useState, useEffect } from "react";
import { UseAppDispatch, useAppSelector } from "../app/hooks";
import { fetchCountries, search } from "../redux/countriesSlice";

import Countries from "../components/Countries";

const HomePage = () => {
  const { loading, countrylist, filtered } = useAppSelector(
    (state) => state.countrylist
  );
  const dispatch = UseAppDispatch();

  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  let renderedCountries = filtered.length > 0 ? filtered : countrylist;

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e: any) => {
          setInput(e.target.value);
          dispatch(search(input));
        }}
      />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Countries countrylist={renderedCountries} />
      )}
    </div>
  );
};
export default HomePage;
