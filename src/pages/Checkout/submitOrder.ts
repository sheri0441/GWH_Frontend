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
    console.log("Customer paying cash");
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/order/cash",
        dataForm
      );
      console.log(response);
    } catch (error) {
      throw error;
    }
  } else {
    console.log("customer paying in card.");

    try {
      const stripe = await loadStripe(
        "pk_test_51OlMmvFcaM6wp1wiuPej288uNrLxCeOwSW1s2roS0nIe3PgVD4nedSCYHgH49AW1uNha900brdgYScQvCrbrbych00kVtxURdk"
      );
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
      console.log(session);
      const result = stripe!.redirectToCheckout({
        sessionId: session.id,
      });
      // if (result.) {
      //   console.log(result.error);
      // }
    } catch (error) {}
  }

  console.log(dataForm);
};
