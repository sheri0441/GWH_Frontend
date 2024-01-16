import { Box, Typography } from "@mui/material";
import ProductCart from "../../components/ProductCart";

const Featured = () => {
  return (
    <Box>
      <Typography
        sx={{
          textTransform: "uppercase",
          fontWeight: 600,
          fontSize: "2rem",
          textAlign: "center",
          marginTop: { sx: "2rem", md: "8rem" },
        }}
      >
        FEATURED PRODUCTS
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: "1.125rem",

          paddingTop: { sx: "1rem", md: "1.5rem" },
          marginBottom: { sx: "2rem", md: "8rem" },
        }}
      >
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </Box>
    </Box>
  );
};

export default Featured;
