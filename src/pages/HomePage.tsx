import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { useAppSelector } from "../app/hooks";
import Countries from "../components/Countries";

const HomePage = () => {
  const { loading, countrylist, filtered } = useAppSelector(
    (state) => state.countrylist
  );

  let renderedcountries = filtered.length > 0 ? filtered : countrylist;

  return (
    <div>
      {loading ? (
        <Box
          sx={{
            pt: 50,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Countries countrylist={renderedcountries} />
      )}
    </div>
  );
};
export default HomePage;
