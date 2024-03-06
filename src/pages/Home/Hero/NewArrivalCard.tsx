import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import style from "./NewArrivalCard.module.css";
import { Product } from "../../../model/Product";
import ExtractImage from "../../../utils/ExtractImage";

const NewArrivalCard = ({
  product: { image, id, title, price },
  discount = 0,
}: {
  product: Product;
  discount?: number;
}) => {
  const theme = useTheme();

  return (
    <Link to={`./products/id/${id}`} className={style.arrivalCard}>
      <Box
        sx={{
          width: "127px",
          // backgroundColor: theme.palette.background.default,
          display: "flex",
          alignItems: "center",
          aspectRatio: "1 / 1",
        }}
      >
        <img style={{ width: "100%" }} src={ExtractImage(image)} alt={title} />
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
        <Box>
          <Typography
            sx={{
              backgroundColor: "#0009",
              textDecoration: "none",
              color: theme.palette.background.default,
              width: "fit-content",
              height: "fit-content",
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
              marginTop: "auto",
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
