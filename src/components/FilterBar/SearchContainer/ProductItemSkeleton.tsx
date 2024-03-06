import { Skeleton } from "@mui/material";

const ProductItemSkeleton = () => {
  return (
    <Skeleton sx={{ width: "100%", height: "50px" }} variant="rectangular" />
  );
};

export default ProductItemSkeleton;
