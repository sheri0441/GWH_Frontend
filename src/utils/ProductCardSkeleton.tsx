import { Skeleton, Stack } from "@mui/material";

const ProductCardSkeleton = () => {
  return (
    <Stack>
      <Skeleton sx={{ width: "100%", height: "100px" }} variant="rectangular" />
    </Stack>
  );
};

export default ProductCardSkeleton;
