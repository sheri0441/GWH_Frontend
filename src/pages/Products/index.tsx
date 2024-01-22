import { Box, Container, Typography } from "@mui/material";
import FilterBar from "./FilterBar";
import ProductsList from "./ProductsList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingAnimation from "../../utils/LoadingAnimation";
import ErrorMessage from "../../utils/ErrorMessage";

const ProductsPage = () => {
  const [numberOfPages, setNumberOfPages] = useState<number>();
  const [currentPageProducts, setCurrentPageProducts] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  const { num } = useParams();

  const currentPage = num || "1";

  const fetchData = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const result = await response.json();

    if (response.ok) {
      const chunkSize = 12;

      const chunks = [];

      for (let i = 0; i < result.length; i += chunkSize) {
        const chunk = result.slice(i, i + chunkSize);
        chunks.push(chunk);
      }

      setNumberOfPages(chunks.length);

      setCurrentPageProducts(chunks[Number(currentPage) - 1]);
    } else {
      setHasError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

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
        {isLoading ? (
          <Box
            sx={{ width: "100px", marginInline: "auto", marginTop: "100px" }}
          >
            <LoadingAnimation />
          </Box>
        ) : hasError ? (
          <ErrorMessage />
        ) : (
          <ProductsList
            productList={currentPageProducts}
            numberOfPages={numberOfPages}
            currentPage={Number(num)}
          />
        )}
      </Box>
    </Container>
  );
};

export default ProductsPage;
