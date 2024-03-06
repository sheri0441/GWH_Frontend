import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const ProductsPageLayout = () => {
  return (
    <Container>
      <Box sx={{ paddingTop: "6.5rem", paddingBottom: "6.5rem" }}>
        <Outlet />
      </Box>
    </Container>
  );
};

export default ProductsPageLayout;
