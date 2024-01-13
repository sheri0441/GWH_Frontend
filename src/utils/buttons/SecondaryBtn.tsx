import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ReactNode } from "react";
import { red } from "@mui/material/colors";

interface SecondaryBtnParameter {
  children: ReactNode;
  padding: string;
  clickEvent: Function;
  onlySmall?: boolean;
  hideOnSmall?: boolean;
  danger?: boolean;
}

const SecondaryBtn = ({
  children,
  padding,
  clickEvent,
  onlySmall = false,
  hideOnSmall = false,
  danger = false,
}: SecondaryBtnParameter) => {
  const theme = useTheme();
  return (
    <Button
      variant="outlined"
      color="primary"
      sx={{
        borderRadius: 0,
        border: `2px solid ${danger ? red[500] : theme.palette.primary.main}`,
        borderWidth: "2px",
        borderColor: danger ? red[500] : theme.palette.primary.main,
        position: "relative",
        color: danger ? red[500] : theme.palette.primary.main,
        "&:focus": { borderWidth: "2px" },
        "&:hover": {
          borderWidth: "2px",
          backgroundColor: `${
            danger ? red[500] : theme.palette.primary.main
          } !important`,
          color: `${theme.palette.secondary.light}`,
          borderColor: danger ? red[500] : theme.palette.primary.main,
        },
        padding: `${padding}`,
        minWidth: "fit-content",
        height: "fit-content",
        display: {
          xs: hideOnSmall ? "none" : "inline-flex",
          md: onlySmall ? "none" : "inline-flex",
        },
      }}
      onClick={() => clickEvent()}
    >
      {children}
    </Button>
  );
};

export default SecondaryBtn;
