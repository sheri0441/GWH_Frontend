import { Cart } from "../../model/Cart";
import { formInputs } from "../../model/FormInput";

export const submitOrder = async (
  data: formInputs,
  cart: Cart[],
  totalPrice: number
) => {
  const cartItemList = [];
  for (let i in cart) {
    cartItemList.push({
      productId: cart[i].product.id,
      quantity: parseInt(i),
    });
  }

  const dataForm = {
    ...data,
    cartItem: cartItemList,
    totalPrice: totalPrice,
  };

  console.log(dataForm);
};
