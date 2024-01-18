import { Box, Container, Typography } from "@mui/material";
import FilterBar from "./FilterBar";
import ProductsList from "./ProductsList";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const [product, setProduct] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    setProduct(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Box sx={{ paddingTop: "6.5rem", paddingBottom: "6.5rem" }}>
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            textAlign: "center",
            fontWeight: "600",
          }}
          component={"h1"}
        >
          Products
        </Typography>
        <FilterBar />
        <ProductsList productList={product} />
      </Box>
    </Container>
  );
};

export default ProductsPage;
