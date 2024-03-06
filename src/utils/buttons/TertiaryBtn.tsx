import { ReactNode } from "react";
import { Button, useTheme } from "@mui/material";

const TertiaryBtn = ({
  children,
  clickEvent,
}: {
  children: ReactNode;
  clickEvent: Function;
}) => {
  const theme = useTheme();

  return (
    <Button
      variant="text"
      sx={{
        color: theme.palette.secondary.main,
        width: "fit-content",
        display: "block",

        padding: 0,
        textDecoration: "underline",
        "&:hover": {
          textDecoration: "underline",
        },
      }}
      onClick={() => clickEvent()}
    >
      {children}
    </Button>
  );
};

export default TertiaryBtn;
