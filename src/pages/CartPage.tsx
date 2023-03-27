import { List } from "@mui/material";

import { FavoriteCountry } from "../components/FavoriteCountry";
import { useAppSelector } from "../app/hooks";

const CartPage = () => {
  const { cartcountrylist } = useAppSelector((state) => state.cart);

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "#111111",
      }}
    >
      {cartcountrylist.map((country) => (
        <FavoriteCountry country={country} />
      ))}
    </List>
  );
};

export default CartPage;
