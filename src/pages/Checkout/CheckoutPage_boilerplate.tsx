import { Box, Container } from "@mui/material";
import PageTitle from "../../utils/PageTitle";
import OrderSummary from "./OrderSummary";
import CheckOutForm from "./CheckOutForm";
import { useEffect, useState } from "react";
import { formInputs } from "../../model/FormInput";
import { submitOrder } from "./submitOrder";
import { Cart } from "../../model/Cart";

const CheckoutPage_boilerplate = ({ cart }: { cart: Cart[] }) => {
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [submitDisable, setSubmitDisable] = useState<boolean>(false);

  const shippingCostHandler = (cost: number) => {
    setShippingCost(cost);
  };

  const submitHandler = (data: formInputs) =>
    submitOrder(data, cart, totalPrice);

  useEffect(() => {
    if (cart.length === 0) {
      setSubmitDisable(true);
    }
  }, [cart]);

  return (
    <Container>
      <Box
        sx={{
          paddingTop: "6.5rem",
          paddingBottom: "6.5rem",
        }}
      >
        <PageTitle>Check Out</PageTitle>
        <Box
          sx={{
            display: { md: "grid" },
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
          }}
        >
          <OrderSummary
            cart={cart}
            shippingCost={shippingCost}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            hideDeleteBtn={cart.length === 1 ? true : false}
          />
          <CheckOutForm
            isDisable={submitDisable}
            shippingCostHandler={shippingCostHandler}
            submitHandler={submitHandler}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default CheckoutPage_boilerplate;
