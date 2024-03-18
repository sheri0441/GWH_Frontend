import { Box, Typography } from "@mui/material";
import LoadingAnimation from "../utils/LoadingAnimation";

const LoadingPage = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Box sx={{ width: "100px", marginInline: "auto" }}>
          <LoadingAnimation />
        </Box>
        <Typography
          sx={{
            textAlign: "center",
          }}
        >
          Connecting to the server.
        </Typography>
      </Box>
    </Box>
  );
};

export default LoadingPage;
