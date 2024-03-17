import { Typography } from "@mui/material";
import { ReactNode } from "react";

const PageTitle = ({ children }: { children: ReactNode }) => {
  return (
    <Typography
      sx={{
        fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
        textAlign: "center",
        fontWeight: "600",
        maxWidth: "600px",
        marginInline: "auto",
      }}
      component={"h1"}
    >
      {children}
    </Typography>
  );
};

export default PageTitle;
