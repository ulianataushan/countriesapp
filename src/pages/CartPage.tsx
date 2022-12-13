import { useAppSelector } from "../app/hooks";
import { FavoriteCountry } from "../components/FavoriteCountry";

const CartPage = () => {
  const { cartcountrylist } = useAppSelector((state) => state.cart);

  return (
    <div>
      <ul>
        {cartcountrylist.map((country) => (
          <FavoriteCountry country={country} />
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
