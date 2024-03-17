import { Box, Typography, useTheme } from "@mui/material";
import SummaryItem from "./SummaryItem";
import { useEffect, useState } from "react";
import { Cart } from "../../model/Cart";
import axios from "axios";

const OrderSummary = ({
  shippingCost,
  cart,
  hideDeleteBtn = false,
  totalPrice,
  setTotalPrice,
}: {
  shippingCost: number;
  cart: Cart[];
  hideDeleteBtn?: boolean;
  totalPrice: number;
  setTotalPrice: Function;
}) => {
  const theme = useTheme();
  const [subTotal, setSubTotal] = useState<number>(0.0);
  const [productWithDetail, setProductWithDetail] = useState<CartProduct[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);

  const getProductDetails = async () => {
    setHasError(false);
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/products/cart",
        cart
      );
      if (response.status === 200) {
        setProductWithDetail(response.data);
        calculateTotalCost(response.data);
      } else {
        setHasError(true);
      }
    } catch (error) {
      setHasError(true);
    }
  };

  const calculateTotalCost = (cart: CartProduct[]) => {
    let sub = 0;

    for (let i = 0; i < cart.length; i++) {
      sub = sub + Number(cart[i].price * cart[i].quantity);
    }

    setSubTotal(sub);

    const totalCost = sub + shippingCost;
    setTotalPrice(Number(totalCost));
  };

  useEffect(() => {
    getProductDetails();
  }, [cart, shippingCost]);

  return (
    <Box sx={{ marginTop: "1.5rem", gridColumn: { md: "1 / 3" } }}>
      <Typography
        component={"h2"}
        sx={{
          textAlign: "center",
          fontSize: "1.25rem",
          fontWeight: 600,
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.background.default,
          padding: "0.25rem",
        }}
      >
        Order Summary
      </Typography>
      {cart.length === 0 ? (
        <Box>
          <Typography>There is no item in your card.</Typography>
        </Box>
      ) : (
        <Box
          sx={{
            padding: "0.75rem 0",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {productWithDetail.map((item) => (
            <SummaryItem
              hideDeleteBtn={hideDeleteBtn}
              key={item.id}
              item={item}
            />
          ))}
        </Box>
      )}
      <Box
        sx={{
          borderTop: `2px solid ${theme.palette.secondary.main}`,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            maxWidth: "200px",
            textAlign: "right",
            marginLeft: "auto",
          }}
        >
          <Typography>Sub-Total:</Typography>
          <Typography>{subTotal}$</Typography>
          <Typography>Shipping:</Typography>
          <Typography>{shippingCost}$</Typography>
          <Typography sx={{ fontWeight: 600 }}>Net-Total:</Typography>
          <Typography sx={{ fontWeight: 600 }}>{totalPrice}$</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OrderSummary;
