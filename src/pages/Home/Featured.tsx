import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ProductCard from "../../components/ProductCard";
import SectionHeader from "../../utils/SectionHeader";
import ErrorMessage from "../../utils/ErrorMessage";
import { Product } from "../../model/Product";
import ProductCardSkeleton from "../../utils/ProductCardSkeleton";
import axios from "axios";

const Featured = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [featuredList, setFeaturedList] = useState<Product[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);

  const fetchFeaturedProducts = async () => {
    setIsLoading(true);
    const response = await axios({
      url: import.meta.env.VITE_API_URL + "/products/featured",
    });

    if (response.status === 200) {
      setFeaturedList(response.data);
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
          <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </>
        ) : hasError ? (
          <ErrorMessage />
        ) : (
          featuredList.map((pro) => {
            return <ProductCard key={pro.id} product={pro} />;
          })
        )}
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Featured;
