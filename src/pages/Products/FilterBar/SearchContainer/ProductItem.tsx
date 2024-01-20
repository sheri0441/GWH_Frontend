import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  product: {
    image: string;
    title: string;
    price: number;
    id: number;
  };
}

const ProductItem = ({ product: { image, title, price, id } }: Props) => {
  const theme = useTheme();

  return (
    <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
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
            aspectRatio: "1/1",
            backgroundColor: "white",
            padding: "0.25rem",
          }}
        >
          <img style={{ width: "100%" }} src={image} alt="" />
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
