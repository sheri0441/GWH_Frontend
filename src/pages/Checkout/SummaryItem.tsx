import { Box, Typography, useTheme } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setCartInfo, updateCart } from "../../feature/loginSlice";
import IconSecondaryBtn from "../../utils/buttons/IconSecondaryBtn";
import ExtractImage from "../../utils/ExtractImage";

const SummaryItem = ({
  item,
  hideDeleteBtn = false,
}: {
  item: CartProduct;
  hideDeleteBtn: boolean;
}) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((store) => store.login.user.cart);
  const isLogin = useAppSelector((store) => store.login.isLogin);
  const deleteItem = () => {
    let cartList = [...cart].filter((pro) => item.id !== pro.productId);

    if (isLogin) {
      dispatch(updateCart(cartList));
    } else {
      dispatch(setCartInfo(cartList));
    }
  };

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
            src={ExtractImage(item.image)}
            alt={item.title}
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
          {item.title}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          width: "100%",
          marginLeft: "auto",
        }}
      >
        {!hideDeleteBtn && (
          <IconSecondaryBtn
            Type={DeleteIcon}
            clickEvent={deleteItem}
            danger={true}
          />
        )}

        <Typography
          sx={{
            textAlign: "right",
            marginLeft: "auto",
          }}
        >
          {item.quantity} X {item.price}$ =
          <strong>{item.quantity * item.price}$ </strong>
        </Typography>
      </Box>
    </Box>
  );
};

export default SummaryItem;
