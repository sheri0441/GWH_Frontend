import { useAppSelector } from "../../app/hooks";
import CheckoutPage_boilerplate from "./CheckoutPage_boilerplate";

const CheckOutPage = () => {
  const cart = useAppSelector((store) => store.login.user.cart);
  return <CheckoutPage_boilerplate cart={cart} />;
};

export default CheckOutPage;
