import { Box } from "@mui/material";
import SectionHeader from "../../../utils/SectionHeader";
import CategoryCard from "./CategoryCard";

const category = {
  name: "pants",
  imageURL: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  id: "1254sag5",
};

const Categories = () => {
  return (
    <Box sx={{ paddingBottom: "4rem" }}>
      <SectionHeader>Categories</SectionHeader>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4,1fr)" },
          gap: "1.125rem",
          paddingTop: "2rem",
        }}
      >
        <CategoryCard category={category} />
        <CategoryCard category={category} />
        <CategoryCard category={category} />
        <CategoryCard category={category} />
      </Box>
    </Box>
  );
};

export default Categories;
