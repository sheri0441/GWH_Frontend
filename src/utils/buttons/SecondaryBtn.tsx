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
  fullWidth?: boolean;
  transparentBg?: boolean;
  square?: boolean;
}

const SecondaryBtn = ({
  children,
  padding,
  clickEvent,
  onlySmall = false,
  hideOnSmall = false,
  danger = false,
  fullWidth = false,
  transparentBg = true,
  square = false,
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
          color: danger
            ? theme.palette.background.default
            : `${theme.palette.secondary.light}`,
          borderColor: danger ? red[500] : theme.palette.primary.main,
        },
        backgroundColor: transparentBg
          ? "transparent"
          : theme.palette.background.default,
        padding: `${padding}`,
        minWidth: "0",
        width: fullWidth ? "100%" : "fit-content",
        height: "fit-content",
        display: {
          xs: hideOnSmall ? "none" : "inline-flex",
          md: onlySmall ? "none" : "inline-flex",
        },
        aspectRatio: square ? "1 / 1" : "auto",
      }}
      onClick={() => clickEvent()}
    >
      {children}
    </Button>
  );
};

export default SecondaryBtn;
