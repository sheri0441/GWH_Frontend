import { useParams } from "react-router-dom";
import CheckoutPage_boilerplate from "../CheckoutPage_boilerplate";

const SingleProduct = () => {
  const { id, quantity = "1" } = useParams();

  const cart = [
    {
      productId: id ? id : "",
      quantity: parseInt(quantity),
    },
  ];

  return <CheckoutPage_boilerplate cart={cart} />;
};

export default SingleProduct;
