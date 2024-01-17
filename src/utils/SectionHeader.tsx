import { Typography } from "@mui/material";
import { ReactNode } from "react";

const SectionHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Typography
      sx={{
        textTransform: "uppercase",
        fontWeight: 600,
        fontSize: "2rem",
        textAlign: "center",
        marginTop: { sx: "2rem", md: "8rem" },
      }}
    >
      {children}
    </Typography>
  );
};

export default SectionHeader;
