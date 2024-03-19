import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Cart } from "../../model/Cart";
import { formInputs } from "../../model/FormInput";

export const submitOrder = async (
  data: formInputs,
  cart: Cart[],
  totalPrice: number,
  navigate: Function
) => {
  const dataForm = {
    ...data,
    productList: cart,
    totalPrice: totalPrice,
  };

  const isPayingCash = data.payment === "cash";
  if (isPayingCash) {
    try {
      await axios.post(import.meta.env.VITE_API_URL + "/order/cash", dataForm);
      navigate(location.pathname + "?status=success");
    } catch (error) {
      throw error;
    }
  } else {
    try {
      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/order/card",
        dataForm,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const session = response.data;

      stripe!.redirectToCheckout({
        sessionId: session.id,
      });
    } catch (error) {
      throw error;
    }
  }
};
