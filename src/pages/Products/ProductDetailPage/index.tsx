import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Skeleton, Stack, Typography } from "@mui/material";
import { Product } from "../../../model/Product";
import { ProductDetail } from "../../../model/ProductDetail";
import ProductCardSkeleton from "../../../utils/ProductCardSkeleton";
import ProductCart from "../../../components/ProductCard";
import MainProduct from "./MainProduct";
import MainProductSkeleton from "./MainProductSkeleton";
import NotFound404 from "./NotFound404";

const ProductDetailPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [product, setProduct] = useState<ProductDetail>({
    id: "",
    title: "",
    price: 0,
    description: "",
    image: "",
    category: "",
  });

  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);

  const { id } = useParams();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios({
        url: import.meta.env.VITE_API_URL + `/products/id/${id}`,
      });

      if (response.status === 200) {
        setProduct(response.data.main);
        setSimilarProducts(response.data.similar);
      } else {
        setHasError(true);
      }
    } catch (error) {
      setHasError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return isLoading ? (
    <>
      <MainProductSkeleton />
      <Box
        sx={{
          marginTop: { xs: "2rem", md: "3rem" },
        }}
      >
        <Skeleton
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        />
        <Stack
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: "1.125rem",
          }}
        >
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </Stack>
      </Box>
    </>
  ) : hasError ? (
    <NotFound404 />
  ) : (
    <>
      <MainProduct product={product} />
      {similarProducts.length !== 0 && (
        <Box
          sx={{
            marginTop: { xs: "2rem", md: "3rem" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: 500,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Similar Products
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
            }}
          >
            {similarProducts.map((pro) => (
              <ProductCart key={pro.id} product={pro} />
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};

export default ProductDetailPage;
