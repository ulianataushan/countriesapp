import { Link } from "react-router-dom";

import { UseAppDispatch, useAppSelector } from "../app/hooks";
import { add, remove } from "../redux/cartSlice";
import { CountryItem } from "../types/country";

interface Props {
  countrylist: CountryItem[];
}

const Countries = ({ countrylist }: Props) => {
  const dispatch = UseAppDispatch();

  const { cartcountrylist } = useAppSelector((state) => state.cart);

  const handleFavorite = (country: CountryItem) => {
    if (
      cartcountrylist.find(
        (item) => item.name.official === country.name.official
      )
    ) {
      dispatch(remove(country.name.official));
    } else {
      dispatch(add(country));
    }
  };

  const displaycountries = countrylist.map((country) => (
    <tr key={country.name.official}>
      <td>
        <img
          src={country.flags.png}
          alt={`${country.name.official} flag`}
          width="100px"
        />
      </td>
      <td>
        <Link to={`/countries/${country.name.official}`}>
          {country.name.official}
        </Link>
      </td>
      <td>{country.region}</td>
      <td>{country.capital?.join(", ")}</td>
      <td>{country.population}</td>{" "}
      <td>
        <button onClick={() => handleFavorite(country)}>♡</button>
      </td>
    </tr>
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Region</th>
            <th>Capital</th>
            <th>Population</th>
            <th>Favorites</th>
          </tr>
        </thead>
        <tbody>{displaycountries}</tbody>
      </table>
    </div>
  );
};

export default Countries;
