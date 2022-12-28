import { List } from "@mui/material";
import { useAppSelector } from "../app/hooks";
import { FavoriteCountry } from "../components/FavoriteCountry";

const CartPage = () => {
  const { cartcountrylist } = useAppSelector((state) => state.cart);

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
      }}
    >
      {cartcountrylist.map((country) => (
        <FavoriteCountry country={country} />
      ))}
    </List>
  );
};

export default CartPage;
