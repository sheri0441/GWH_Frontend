import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";

const OverLayerNote = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "#00000021",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: 99,
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          padding: "2rem 1rem",
          textAlign: "center",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default OverLayerNote;
