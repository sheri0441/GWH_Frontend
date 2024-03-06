import { Box, Skeleton, Stack } from "@mui/material";

const MainProductSkeleton = () => {
  return (
    <Box sx={{ display: { xs: "block", md: "flex" }, gap: "3rem" }}>
      <Stack
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Skeleton variant="rectangular" height={500} />
      </Stack>
      <Stack
        sx={{
          width: "100%",
          maxHeight: "580px",
          marginTop: { xs: "1rem", md: "2rem" },
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="rectangular" height={50} />
        <Skeleton variant="rectangular" height={100} />
        <Skeleton variant="rectangular" height={75} />
        <Skeleton variant="rectangular" height={75} />
      </Stack>
    </Box>
  );
};

export default MainProductSkeleton;
