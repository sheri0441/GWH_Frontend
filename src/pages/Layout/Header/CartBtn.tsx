import { Box, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTheme } from "@mui/material/styles";
import { useAppSelector } from "../../../app/hooks";
import IconSecondaryBtn from "../../../utils/buttons/IconSecondaryBtn";

const CartBtn = ({ showCartHandler }: { showCartHandler: Function }) => {
  const theme = useTheme();
  const cartItems = useAppSelector((state) => state.login.user.cart);

  return (
    <Box sx={{ position: "relative" }}>
      <IconSecondaryBtn Type={ShoppingCartIcon} clickEvent={showCartHandler} />
      <Box
        sx={{
          background: `${theme.palette.primary.main}`,
          position: "absolute",
          top: "-6px",
          right: "-10px",
          zIndex: "1",
          width: "20px",
          height: "20px",
          pointerEvents: "none",
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            fontSize: "0.75rem",
            color: `${theme.palette.background.default}`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          component={"span"}
        >
          {cartItems.length > 10
            ? cartItems.length > 100
              ? "+1"
              : cartItems.length
            : `0${cartItems.length}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default CartBtn;
