import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import style from "./NewArrivalCard.module.css";

const NewArrivalCard = ({
  product: { imageURL, id, title, discount, price },
}: {
  product: {
    imageURL: string;
    id: string;
    title: string;
    discount: number;
    price: number;
  };
}) => {
  const theme = useTheme();
  return (
    <Link to={`./products/${id}`} className={style.arrivalCard}>
      <Box
        sx={{
          width: "127px",
          backgroundColor: theme.palette.background.default,
          display: "flex",
          alignItems: "center",
          paddingInline: "0.5rem",
          aspectRatio: "1 / 2",
        }}
      >
        <img style={{ width: "100%" }} src={imageURL} alt="" />
      </Box>
      <Box>
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            fontSize: "1rem",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              backgroundColor: "#0009",
              textDecoration: "none",
              color: theme.palette.background.default,
              width: "fit-content",
              padding: "0.125rem 0.5rem",
              fontSize: { xs: "0.5rem", md: "0.75rem" },
            }}
          >
            New Arrival
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              marginLeft: "auto",
              display: "block",
              width: "fit-content",
            }}
          >
            {discount ? price - discount / 100 : price}$
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default NewArrivalCard;
