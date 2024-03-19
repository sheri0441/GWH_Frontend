import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import { Category } from "../../../model/Category";
import SectionHeader from "../../../utils/SectionHeader";
import ErrorMessage from "../../../utils/ErrorMessage";
import CategoryCard from "./CategoryCard";
import CategoryCardSkeleton from "./CategoryCardSkeleton";

const Categories = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);

  const fetchCategory = async () => {
    setIsLoading(true);

    const response = await axios({
      url: import.meta.env.VITE_API_URL + "/category",
    });

    if (response.status === 200) {
      setCategoryList(response.data);
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
          <>
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
          </>
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
