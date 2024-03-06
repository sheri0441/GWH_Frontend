import { Box, Container } from "@mui/material";
import PageTitle from "../../../utils/PageTitle";
import OrderSummary from "../OrderSummary";
import CheckOutForm from "../CheckOutForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cart } from "../../../model/Cart";
import { formInputs } from "../../../model/FormInput";
import { submitOrder } from "../submitOrder";

const SingleProduct = () => {
  const { id, quantity = 1 } = useParams();
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [submitDisable, setSubmitDisable] = useState<boolean>(false);
  const [cart, setCart] = useState<Cart[]>([
    {
      product: {
        id: 0,
        title: "",
        price: 0,
        description: "",
        images: [],
        creationAt: "",
        updatedAt: "",
        category: {
          id: 0,
          name: "",
          image: "",
          creationAt: "",
          updatedAt: "",
        },
      },
      quantity: 0,
    },
  ]);

  const shippingCostHandler = (cost: number) => {
    setShippingCost(cost);
  };

  const fetchProduct = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API}products/${id}`);
      const result = await response.json();
      setCart([
        {
          product: result,
          quantity: Number(quantity),
        },
      ]);
    } catch (error) {}
  };

  const submitHandler = (data: formInputs) =>
    submitOrder(data, cart, totalPrice);

  useEffect(() => {
    fetchProduct();
  }, []);

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
            hideDeleteBen={true}
            cart={cart}
            shippingCost={shippingCost}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
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

export default SingleProduct;
