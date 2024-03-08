import axios from "axios";
import { Cart } from "../../model/Cart";
import { formInputs } from "../../model/FormInput";

export const submitOrder = async (
  data: formInputs,
  cart: Cart[],
  totalPrice: number
) => {
  const isPayingCash = data.payment === "cash";

  const dataForm = {
    ...data,
    productList: cart,
    totalPrice: totalPrice,
  };

  if (isPayingCash) {
    console.log("Customer paying cash");
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/order/cash",
        dataForm
      );
      console.log(response);
    } catch (error) {}
  } else {
    console.log("customer paying in card.");
  }

  console.log(dataForm);
};
