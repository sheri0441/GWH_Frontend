import { Link } from "react-router-dom";
import style from "./ProductCard.module.css";
import { Box, Tooltip, Typography } from "@mui/material";
import ExtractImage from "../utils/ExtractImage";
import { Product } from "../model/Product";

const ProductCard = ({
  product: { image, id, title, price },
  discount = 0,
}: {
  product: Product;
  discount?: number;
}) => {
  return (
    <Link to={`/products/id/${id}`} className={style.productCartLink}>
      <Box
        sx={{
          backgroundColor: "white",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          aspectRatio: "1 / 1",
        }}
      >
        <img
          src={ExtractImage(image)}
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
          marginTop: "1rem",
          width: "100%",
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
              width: "100%",
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

export default ProductCard;
