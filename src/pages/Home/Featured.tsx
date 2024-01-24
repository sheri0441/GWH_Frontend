import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ProductCart from "../../components/ProductCard";
import SectionHeader from "../../utils/SectionHeader";
import ErrorMessage from "../../utils/ErrorMessage";
import LoadingAnimation from "../../utils/LoadingAnimation";
import { Product } from "../../model/Product";

const Featured = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [featuredList, setFeaturedList] = useState<Product[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);

  const fetchFeaturedProducts = async () => {
    setIsLoading(true);
    const response = await fetch(`${import.meta.env.VITE_API}products`);
    const result = await response.json();

    if (response.ok) {
      setFeaturedList(result);
    } else {
      setHasError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  return (
    <Box>
      <SectionHeader>FEATURED PRODUCTS</SectionHeader>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: "1.125rem",
          paddingTop: { xs: "1rem", md: "1.5rem" },
          marginBottom: { xs: "2rem", md: "8rem" },
        }}
      >
        {isLoading ? (
          <Box sx={{ display: "block", width: "20px", marginInline: "auto" }}>
            <LoadingAnimation />
          </Box>
        ) : hasError ? (
          <ErrorMessage />
        ) : (
          featuredList.map((pro, index) => {
            if (index < 4) {
              return <ProductCart key={pro.id} product={pro} />;
            }
          })
        )}
      </Box>
    </Box>
  );
};

export default Featured;
