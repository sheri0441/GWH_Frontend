import IconSecondaryBtn from "../../utils/buttons/IconSecondaryBtn";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Typography, useTheme } from "@mui/material";
import { Product } from "../../model/Product";
import ExtractImage from "../../utils/ExtractImage";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
// import { filterById } from "../../feature/loginSlice";

const SummaryItem = ({
  item: { product, quantity },
  hideDeleteBtn = false,
}: {
  item: { product: Product; quantity: number };
  hideDeleteBtn: boolean;
}) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((store) => store.login.user.cart);
  const isLogin = useAppSelector((store) => store.login.isLogin);
  // const deleteItem = () => {
  //   let cartList = [...cart].filter((item) => item.productId !== cartItem.id);
  //   if (isLogin) {
  //     dispatch(updateCart(cartList));
  //   } else {
  //     dispatch(setCartInfo(cartList));
  //   }
  // };

  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "grid" },
        gridTemplateColumns: "60% 30%",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: { sm: "space-between" },
        alignItems: { sm: "center" },
        gap: { xs: "0.5rem", sm: "1rem" },
        borderBottom: `1px solid ${theme.palette.secondary.light} `,
        paddingBottom: "0.25rem",
        paddingInline: { md: "0.5rem" },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "45px auto",
          gap: "1rem",
          alignItems: { sm: "center" },
        }}
      >
        <Box
          sx={{
            objectFit: "contain",
            width: { xs: "45px" },
            aspectRatio: "1 / 1",
            backgroundColor: theme.palette.background.default,
          }}
        >
          <img
            style={{ width: "100%" }}
            src={ExtractImage(product.image)}
            alt={product.title}
          />
        </Box>
        <Typography
          sx={{
            fontWeight: 500,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {product.title}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          marginLeft: "auto",
        }}
      >
        {!hideDeleteBtn && (
          <IconSecondaryBtn
            Type={DeleteIcon}
            clickEvent={() => console.log("deleteBtn")}
            danger={true}
          />
        )}

        <Typography
          sx={{
            textAlign: "right",
          }}
        >
          {quantity} X {product.price}$ ={" "}
          <strong>{quantity * product.price}$ </strong>
        </Typography>
      </Box>
    </Box>
  );
};

export default SummaryItem;
