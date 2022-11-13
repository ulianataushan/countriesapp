import React from "react";
import { useAppSelector } from "../app/hooks";

const CartPage = () => {
  const { countrylist } = useAppSelector((state) => state.cart);
  const displayfavorites = countrylist.map((country) => (
    <li key={country.name.official}>
      <img src={country.flags.png} alt="flag" />
      <p>{country.name.official}</p>
      <p>{country.region}</p>
      <p>{country.capital}</p>
      <p>{country.population}</p>
    </li>
  ));

  return (
    <div>
      <ul>{displayfavorites}</ul>
    </div>
  );
};

export default CartPage;
