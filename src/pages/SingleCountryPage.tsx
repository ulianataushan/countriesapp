import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { UseAppDispatch, useAppSelector } from "../app/hooks";
import { fetchCountry } from "../redux/countriesSlice";

const SingleCountryPage = () => {
  const { id } = useParams();

  const dispatch = UseAppDispatch();

  const { countryitem } = useAppSelector((state) => state.countrylist);

  useEffect(() => {
    if (id) {
      dispatch(fetchCountry(id));
    }
  }, [dispatch, id]);

  const countryobject = countryitem[0];

  const displaycountry = () => {
    if (countryitem.length === 0) {
      return (
        <>
          <p>Loading...</p>
        </>
      );
    }

    return (
      <>
        <img src={countryobject.flags[1]} alt="flag" />
        <p>{countryobject.name.official}</p>
        <p>{countryobject.region}</p>
        <p>{countryobject.capital}</p>
        <p>{countryobject.population}</p>
      </>
    );
  };
  return displaycountry();
};

export default SingleCountryPage;
