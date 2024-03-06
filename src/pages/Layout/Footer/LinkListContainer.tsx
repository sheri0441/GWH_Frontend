import { List, useTheme } from "@mui/material";
import { ReactNode } from "react";

const LinkListContainer = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  return (
    <List
      component={"nav"}
      sx={{
        textAlign: { xs: "center", md: "left" },
        display: "flex",
        flexDirection: { xs: "column" },
        gap: "0.75rem",
        "&>li": {
          textAlign: { xs: "center", md: "left" },
          display: "block",
          padding: "0",
        },
        "&>li>a": {
          color: theme.palette.background.default,
          textDecoration: "none",
        },
        "&>li>a:hover": {
          color: theme.palette.primary.main,
          textDecoration: "none",
        },
      }}
    >
      {children}
    </List>
  );
};

export default LinkListContainer;
