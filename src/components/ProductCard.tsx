import { Link } from "react-router-dom";
import style from "./ProductCard.module.css";
import { Box, Tooltip, Typography, useTheme } from "@mui/material";

const ProductCart = ({
  product: { image, id, title, discount, price },
}: {
  product: {
    image: string;
    id: number;
    title: string;
    discount?: number;
    price: number;
  };
}) => {
  const theme = useTheme();

  return (
    <Link to={`./products/${id}`} className={style.productCartLink}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          padding: {
            xs: "0.5rem 1rem",
            md: "1rem 1.5rem",
          },
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "250px", sm: "300px" },
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
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
        <Tooltip title={title} arrow>
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
            {title}
          </Typography>
        </Tooltip>
        <Typography sx={{ textAlign: "center", fontWeight: "500" }}>
          {discount ? (
            <>
              <Typography
                component={"span"}
                sx={{
                  textDecoration: "line-through",
                  fontSize: "0.75rem",
                  marginRight: "0.25rem",
                }}
              >
                {price}
              </Typography>
              {(price * discount) / 100}$
            </>
          ) : (
            `${price}$`
          )}
        </Typography>
      </Box>
    </Link>
  );
};

export default ProductCart;
