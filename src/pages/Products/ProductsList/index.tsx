import { Box, Typography, useTheme } from "@mui/material";
import ProductCart from "../../../components/ProductCard";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface Props {
  productList: Product[];
  currentPage: string;
}

const ProductsList = ({ productList, currentPage }: Props) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        marginTop: { xs: "1rem", md: "2rem" },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, minmax(0, 1fr))",
            sm: "repeat(3, minmax(0, 1fr))",
            md: "repeat(4, minmax(0, 1fr))",
          },
          gap: { xs: "1rem", md: "1.5rem" },
        }}
      >
        {productList.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </Box>
      <Box
        sx={{
          marginInline: "auto",
          width: "fit-content",
          marginTop: "1.5rem",
        }}
      >
        <Link
          to={"/product/1"}
          style={{ textDecoration: "none", color: "#000" }}
        >
          <Typography
            sx={{
              textDecoration: "underline",
              "&:hover": {
                color: theme.palette.primary.main,
                textDecoration: "underline",
              },
            }}
          >
            1
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default ProductsList;
