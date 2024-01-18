import { Box } from "@mui/material";
import ProductCart from "../../../components/ProductCard";

// const product = {
//   imageURL: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//   title:
//     "Jon Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Braceleth",
//   price: 22.5,
//   discount: 10,
//   id: "as1516",
// };

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
}

const ProductsList = ({ productList }: Props) => {
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
            xs: "repeat(2,1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: { xs: "1rem", md: "1.5rem" },
          alignItems: "stretch",
        }}
      >
        {productList.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
};

export default ProductsList;
