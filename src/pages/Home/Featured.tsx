import { Box } from "@mui/material";
import ProductCart from "../../components/ProductCart";
import SectionHeader from "../../utils/SectionHeader";

const product = {
  imageURL: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  title:
    "Jon Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Braceleth",
  price: 22.5,
  discount: 10,
  id: "as1516",
};

const Featured = () => {
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
          paddingTop: { sx: "1rem", md: "1.5rem" },
          marginBottom: { sx: "2rem", md: "8rem" },
        }}
      >
        <ProductCart product={product} />
        <ProductCart product={product} />
        <ProductCart product={product} />
        <ProductCart product={product} />
      </Box>
    </Box>
  );
};

export default Featured;
