import { Box } from "@mui/material";
import ProductCardSkeleton from "../../utils/ProductCardSkeleton";

const ProductListSkeleton = () => {
  return (
    <Box
      sx={{
        marginTop: { xs: "1rem", md: "2rem" },
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2, minmax(0, 1fr))",
          sm: "repeat(3, minmax(0, 1fr))",
          md: "repeat(4, minmax(0, 1fr))",
        },
        gap: { xs: "1rem", md: "1.5rem" },
      }}
    >
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
    </Box>
  );
};

export default ProductListSkeleton;
