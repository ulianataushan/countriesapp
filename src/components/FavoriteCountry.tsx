import { CountryItem } from "../types/country";

interface FavoriteCountryProps {
  country: CountryItem;
}
export const FavoriteCountry = (props: FavoriteCountryProps) => {
  const { country } = props;
  return (
    <li key={country.name.official}>
      <img src={country.flags.png} alt="flag" />
      <p>{country.name.official}</p>
      <p>{country.region}</p>
      <p>{country.capital}</p>
      <p>{country.population}</p>
    </li>
  );
};
