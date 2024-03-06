import { Skeleton, Stack } from "@mui/material";

const CartSkeleton = () => {
  return (
    <Stack
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr 1fr",
        gap: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Skeleton variant="rectangular" height={50} />
      <Skeleton variant="rectangular" height={50} />
      <Skeleton variant="rectangular" height={50} />
    </Stack>
  );
};

export default CartSkeleton;
