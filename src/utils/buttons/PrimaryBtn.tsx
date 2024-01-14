import { Button, useTheme } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  clickEvent: Function;
}

const PrimaryBtn = ({ children, clickEvent }: Props) => {
  const theme = useTheme();
  return (
    <Button
      sx={{
        backgroundColor: `${theme.palette.primary.main}`,
        color: theme.palette.background.default,
        borderRadius: 0,
        width: "100%",
        marginTop: "0",
        padding: "0.5rem 1rem",
        "&:hover": {
          backgroundColor: `${theme.palette.secondary.main}`,
        },
      }}
      onClick={() => clickEvent()}
    >
      {children}
    </Button>
  );
};

export default PrimaryBtn;
