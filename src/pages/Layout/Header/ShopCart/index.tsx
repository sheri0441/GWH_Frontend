import { Box, Divider, Typography } from "@mui/material";
import OverLayer from "../../../../utils/OverLayer";
import ProductItemCart from "../../../../utils/ProductItemCart";
import PrimaryBtn from "../../../../utils/buttons/PrimaryBtn";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../app/hooks";
import scrollToTop from "../../../../utils/scrollToTop";
import { useEffect, useState } from "react";
import axios from "axios";
import CartSkeleton from "./CartSkeleton";

interface Props {
  showCart: boolean;
  showCartHandler: Function;
}

const ShopCart = ({ showCart, showCartHandler }: Props) => {
  const cart = useAppSelector((state) => state.login.user.cart);
  const [cartList, setCartList] = useState([] as any[]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  const handleCheckoutClicked = () => {
    scrollToTop();
    navigate("/checkout");
    showCartHandler();
  };

  const getCartProducts = async () => {
    const response = await axios({
      method: "POST",
      url: import.meta.env.VITE_API_URL + "/products/cart",
      data: cart,
    });
    const data = response.data;

    setCartList(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getCartProducts();
  }, [cart]);

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
          {isLoading ? (
            <CartSkeleton />
          ) : cartList.length > 0 ? (
            cartList.map((cartItem) => (
              <ProductItemCart key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <Typography>You have no products in your cart. </Typography>
          )}
        </Box>
        <Box>
          <Divider sx={{ marginBottom: 1 }} />
          <PrimaryBtn clickEvent={handleCheckoutClicked} padding="0.5rem">
            Checkout
          </PrimaryBtn>
        </Box>
      </Box>
    </OverLayer>
  );
};

export default ShopCart;
