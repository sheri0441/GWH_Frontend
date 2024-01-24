import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import SectionHeader from "../../../utils/SectionHeader";
import CategoryCard from "./CategoryCard";
import ErrorMessage from "../../../utils/ErrorMessage";
import LoadingAnimation from "../../../utils/LoadingAnimation";
import { Category } from "../../../model/Category";

const Categories = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);

  const fetchCategory = async () => {
    setIsLoading(true);
    const response = await fetch(`${import.meta.env.VITE_API}categories`);
    const result = await response.json();

    if (response.ok) {
      setCategoryList(result);
    } else {
      setHasError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <Box sx={{ paddingBottom: "4rem", marginTop: "4rem" }}>
      <SectionHeader>Categories</SectionHeader>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4,1fr)" },
          gap: "1.125rem",
          paddingTop: "2rem",
        }}
      >
        {isLoading ? (
          <Box sx={{ display: "block", width: "20px", marginInline: "auto" }}>
            <LoadingAnimation />
          </Box>
        ) : hasError ? (
          <ErrorMessage />
        ) : (
          categoryList.map((cat) => {
            return <CategoryCard key={cat.id} category={cat} />;
          })
        )}
      </Box>
    </Box>
  );
};

export default Categories;
