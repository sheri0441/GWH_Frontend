import { Box, Divider } from "@mui/material";
import OverLayer from "../../../utils/OverLayer";
import ProductItemCart from "../../../utils/ProductItemCart";
import PrimaryBtn from "../../../utils/buttons/PrimaryBtn";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

interface Props {
  showCart: boolean;
  showCartHandler: Function;
}

const product = {
  title:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempore consequuntur sapiente reiciendis consequatur similique et. Recusandae fugiat natus aperiam!",
  quantity: 3,
  price: 221,
  imageURL: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
};

const ShopCart = ({ showCart, showCartHandler }: Props) => {
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
          height: "calc(100% - 60px)",
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
          <ProductItemCart product={product} />
          <ProductItemCart product={product} />
          <ProductItemCart product={product} />
          <ProductItemCart product={product} />
          <ProductItemCart product={product} />
          <ProductItemCart product={product} />
          <ProductItemCart product={product} />
          <ProductItemCart product={product} />
          <ProductItemCart product={product} />
          <ProductItemCart product={product} />
          <ProductItemCart product={product} />
          <ProductItemCart product={product} />
          <ProductItemCart product={product} />
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
