import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import ExtractImage from "../../../utils/ExtractImage";

interface Props {
  product: {
    image: string;
    title: string;
    price: number;
    id: string;
  };
}

const ProductItem = ({ product: { image, title, price, id } }: Props) => {
  const theme = useTheme();

  return (
    <Link to={`/products/id/${id}`} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          width: "100%",
          "&:hover": {
            backgroundColor: theme.palette.secondary.light,
          },
          padding: "1rem",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            maxWidth: "50px",
            backgroundColor: "white",
            objectFit: "contain",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "100%" }}
            src={ExtractImage(image)}
            alt={title}
          />
        </Box>
        <Box sx={{ maxWidth: "300px" }}>
          <Typography sx={{ color: theme.palette.primary.main }}>
            {title}
          </Typography>
          <Typography
            sx={{
              color: theme.palette.primary.main,
              fontWeight: "600",
            }}
          >
            {price}$
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default ProductItem;
