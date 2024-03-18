import { Box, Pagination } from "@mui/material";
import { Product } from "../../model/Product";
import ProductCart from "../ProductCard";
import { useNavigate } from "react-router-dom";
import NotFound404 from "../../pages/Products/ProductDetailPage/NotFound404";

interface Props {
  productList: Product[];
  numberOfPages: number | undefined;
  currentPage: number;
  pageUrl: string;
  sort: string;
}

const ProductsList = ({
  productList,
  numberOfPages = 0,
  currentPage = 1,
  pageUrl,
  sort,
}: Props) => {
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<unknown>) => {
    navigate(
      `${pageUrl}${(event.target as HTMLButtonElement).innerText}${sort}`
    );
  };

  return (
    <Box
      sx={{
        marginTop: { xs: "1rem", md: "2rem" },
      }}
    >
      {productList.length === 0 ? (
        <Box>
          <NotFound404 />
        </Box>
      ) : (
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
      )}

      <Box
        sx={{ marginInline: "auto", width: "fit-content", marginTop: "1rem" }}
      >
        <Pagination
          page={isNaN(currentPage) ? 1 : currentPage}
          count={numberOfPages}
          defaultPage={1}
          variant="outlined"
          shape="rounded"
          size="large"
          onChange={(e) => handleChange(e)}
          color="secondary"
        />
      </Box>
    </Box>
  );
};

export default ProductsList;
