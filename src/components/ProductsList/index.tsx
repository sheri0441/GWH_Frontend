import { Box, Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductCart from "../ProductCard";
import { Product } from "../../model/Product";

interface Props {
  productList: Product[];
  numberOfPages: number | undefined;
  currentPage: number;
}

const ProductsList = ({
  productList,
  numberOfPages = 0,
  currentPage,
}: Props) => {
  const navigate = useNavigate();

  let arrayOfPages = [];

  for (let i = 0; i < numberOfPages; i++) {
    arrayOfPages.push(i + 1);
  }

  const handleChange = (event: React.ChangeEvent<unknown>) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    navigate(`/products/page/${(event.target as HTMLButtonElement).innerText}`);
  };

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
        {productList?.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </Box>

      <Box
        sx={{ marginInline: "auto", width: "fit-content", marginTop: "1rem" }}
      >
        <Pagination
          page={Number.isNaN(currentPage) ? 1 : currentPage}
          count={numberOfPages}
          variant="outlined"
          shape="rounded"
          size="large"
          onChange={handleChange}
          color="secondary"
        />
      </Box>
    </Box>
  );
};

export default ProductsList;
