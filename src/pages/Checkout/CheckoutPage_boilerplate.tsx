import { Box, Container, Typography } from "@mui/material";
import PageTitle from "../../utils/PageTitle";
import OrderSummary from "./OrderSummary";
import CheckOutForm from "./CheckOutForm";
import { useEffect, useState } from "react";
import { formInputs } from "../../model/FormInput";
import { submitOrder } from "./submitOrder";
import { Cart } from "../../model/Cart";
import { useNavigate } from "react-router-dom";
import LoadingAnimation from "../../utils/LoadingAnimation";
import OverLayerNote from "../../utils/OverLayerNote";
import SecondaryBtn from "../../utils/buttons/SecondaryBtn";

const CheckoutPage_boilerplate = ({ cart }: { cart: Cart[] }) => {
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [submitDisable, setSubmitDisable] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const navigate = useNavigate();

  const shippingCostHandler = (cost: number) => {
    setShippingCost(cost);
  };

  const submitHandler = (data: formInputs) => {
    setIsLoading(true);
    try {
      submitOrder(data, cart, totalPrice, navigate);
    } catch (error) {
      setHasError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (cart.length === 0) {
      setSubmitDisable(true);
    }
  }, [cart]);

  return (
    <Container>
      {isLoading && (
        <OverLayerNote>
          <Box sx={{ width: "100px" }}>
            <LoadingAnimation />
          </Box>
        </OverLayerNote>
      )}
      {hasError && (
        <OverLayerNote>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Typography sx={{ fontSize: "1.5rem" }}>Error</Typography>
            <Typography>There is some error in the backend.</Typography>
            <SecondaryBtn
              padding="0.25rem 0.5rem"
              clickEvent={() => setHasError(false)}
            >
              Ok
            </SecondaryBtn>
          </Box>
        </OverLayerNote>
      )}
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
