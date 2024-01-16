import { Link } from "react-router-dom";
import style from "./ProductCart.module.css";
import { Box, Typography, useTheme } from "@mui/material";

const ProductCart = () => {
  const theme = useTheme();

  return (
    <Link to={"/"} className={style.productCartLink}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          padding: { xs: "0.5rem 1rem", md: "1rem 1.5rem" },
        }}
      >
        <img
          src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
          alt=""
          style={{ width: "100%" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginInline: "auto",
          marginTop: "0.75rem",
        }}
      >
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            fontSize: "1rem",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            textAlign: "center",
            paddingInline: { xs: "0.5rem", sm: "1rem", md: "1.5rem" },
            marginInline: "auto",
          }}
        >
          Jon Hardy Women's Legends Naga Gold & Silver Dragon Station Chain
          Braceleth
        </Typography>
        <Typography sx={{ textAlign: "center", fontWeight: "500" }}>
          22.5$
        </Typography>
      </Box>
    </Link>
  );
};

export default ProductCart;
