import { Skeleton, Stack } from "@mui/material";

const CategoryCardSkeleton = () => {
  return (
    <Stack>
      <Skeleton sx={{ minHeight: "150px" }} variant="rectangular" />
    </Stack>
  );
};

export default CategoryCardSkeleton;
