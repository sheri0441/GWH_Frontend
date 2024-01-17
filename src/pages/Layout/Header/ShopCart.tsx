import { Box, Divider } from "@mui/material";
import OverLayer from "../../../utils/OverLayer";
import ProductItemCart from "../../../utils/ProductItemCart";
import PrimaryBtn from "../../../utils/buttons/PrimaryBtn";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";

interface Props {
  showCart: boolean;
  showCartHandler: Function;
}

const ShopCart = ({ showCart, showCartHandler }: Props) => {
  const cart = useAppSelector((state) => state.login.user.cart);

  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <OverLayer
      showOverLayer={showCart}
      overLayerHandler={showCartHandler}
      title={"shopping cart"}
    >
      <Box
        sx={{
          minHeight: "calc(100% - 60px)",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Box
          sx={{
            marginTop: 1,
            marginBottom: 1,
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column",
            minHeight: "calc(100vh - 160px)",
            height: "calc(100dvh - 160px)  ",
            gap: 2,
            "&::-webkit-scrollbar": {
              width: "0.4rem",
            },
            "&::-webkit-scrollbar-track": {
              "-webkit-box-shadow": "none",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.secondary.light,
              outline: "none",
            },
          }}
        >
          {cart.map((product) => (
            <ProductItemCart key={product.id} product={product} />
          ))}
        </Box>
        <Box>
          <Divider sx={{ marginBottom: 1 }} />
          <PrimaryBtn clickEvent={() => navigate("/checkout")}>
            Checkout
          </PrimaryBtn>
        </Box>
      </Box>
    </OverLayer>
  );
};

export default ShopCart;
