import axios from "axios";
import { Cart } from "../../model/Cart";
import { formInputs } from "../../model/FormInput";
import { loadStripe } from "@stripe/stripe-js";

export const submitOrder = async (
  data: formInputs,
  cart: Cart[],
  totalPrice: number
) => {
  const dataForm = {
    ...data,
    productList: cart,
    totalPrice: totalPrice,
  };

  const isPayingCash = data.payment === "cash";
  if (isPayingCash) {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/order/cash",
        dataForm
      );
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

  console.log(dataForm);
};
