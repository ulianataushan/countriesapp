import { useAppSelector } from "../app/hooks";
import Countries from "../components/Countries";

const HomePage = () => {
  const { loading, countrylist, filtered } = useAppSelector(
    (state) => state.countrylist
  );

  let renderedCountries = filtered.length > 0 ? filtered : countrylist;

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Countries countrylist={renderedCountries} />
      )}
    </div>
  );
};
export default HomePage;
