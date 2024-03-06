import { Box, Tooltip, Typography } from "@mui/material";
import IconSecondaryBtn from "./buttons/IconSecondaryBtn";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch, useAppSelector } from "../app/hooks";
// import { filterById } from "../feature/loginSlice";
import ExtractImage from "./ExtractImage";
import { setCartInfo, updateCart } from "../feature/loginSlice";

const ProductItemCart = ({
  cartItem,
}: {
  cartItem: {
    title: string;
    image: string;
    price: number;
    quantity: number;
    id: string;
  };
}) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((store) => store.login.user.cart);
  const isLogin = useAppSelector((store) => store.login.isLogin);

  const deleteItem = () => {
    let cartList = [...cart].filter((item) => item.productId !== cartItem.id);
    if (isLogin) {
      dispatch(updateCart(cartList));
    } else {
      dispatch(setCartInfo(cartList));
      localStorage.setItem("cart", JSON.stringify(cartList));
    }
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr 1fr",
        gap: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "2.5rem",
          aspectRatio: "1 / 1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginInline: "auto",
        }}
      >
        <img
          style={{ width: "100%" }}
          src={ExtractImage(cartItem.image)}
          alt={cartItem.title}
        />
      </Box>
      <Box>
        <Box sx={{ overflow: "hidden" }}>
          <Tooltip title={cartItem.title}>
            <Typography
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                fontSize: "0.75rem",
              }}
            >
              {cartItem.title}
            </Typography>
          </Tooltip>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "0.75rem" }}>
            {cartItem.quantity}
          </Typography>
          <Typography sx={{ fontSize: "0.75rem", fontWeight: 600 }}>
            X
          </Typography>
          <Typography sx={{ fontSize: "0.75rem" }}>
            {cartItem.price}$
          </Typography>
          <Typography sx={{ fontSize: "0.75rem", fontWeight: 600 }}>
            =
          </Typography>
          <Typography sx={{ fontSize: "0.75rem" }}>
            {(cartItem.quantity * cartItem.price).toFixed(2)}$
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginInline: "auto" }}>
        <IconSecondaryBtn
          Type={DeleteIcon}
          clickEvent={deleteItem}
          danger={true}
        />
      </Box>
    </Box>
  );
};

export default ProductItemCart;
