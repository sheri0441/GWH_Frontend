import { Box, Typography, useTheme } from "@mui/material";
import SummaryItem from "./SummaryItem";
import { useEffect, useState } from "react";
import { Cart } from "../../model/Cart";

const OrderSummary = ({
  shippingCost,
  cart,
  hideDeleteBen = false,
  totalPrice,
  setTotalPrice,
}: {
  shippingCost: number;
  cart: Cart[];
  hideDeleteBen?: boolean;
  totalPrice: number;
  setTotalPrice: Function;
}) => {
  const theme = useTheme();
  const [subTotal, setSubTotal] = useState<number>(0.0);

  const costCalculator = (cartItem: Cart[]) => {
    let total = 0;
    for (let i = 0; i < cartItem.length; i++) {
      total = total + Number(cartItem[i].product.price * cartItem[i].quantity);
    }
    setSubTotal(Number(total));
    calculateTotalCost(total);
  };

  const calculateTotalCost = (sub: number) => {
    const totalCost = sub + shippingCost;
    setTotalPrice(Number(totalCost));
  };

  useEffect(() => {
    costCalculator(cart);
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
          {cart.map((item) => (
            <SummaryItem
              hideDeleteBtn={hideDeleteBen}
              key={item.product.id}
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
