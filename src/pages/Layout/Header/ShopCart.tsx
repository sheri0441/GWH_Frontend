import { Box, Divider } from "@mui/material";
import OverLayer from "../../../utils/OverLayer";
import ProductItemCart from "../../../utils/ProductItemCart";
import PrimaryBtn from "../../../utils/buttons/PrimaryBtn";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";

interface Props {
  showCart: boolean;
  showCartHandler: Function;
}

const ShopCart = ({ showCart, showCartHandler }: Props) => {
  const cart = useAppSelector((state) => state.login.user.cart);

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
            minHeight: "calc(100svh - 160px)",
            height: "calc(100dvh - 160px)  ",
            gap: 2,
          }}
        >
          {cart.map((product) => (
            <ProductItemCart key={product.id} product={product} />
          ))}
        </Box>
        <Box>
          <Divider sx={{ marginBottom: 1 }} />
          <PrimaryBtn clickEvent={() => navigate("/checkout")} padding="0.5rem">
            Checkout
          </PrimaryBtn>
        </Box>
      </Box>
    </OverLayer>
  );
};

export default ShopCart;
