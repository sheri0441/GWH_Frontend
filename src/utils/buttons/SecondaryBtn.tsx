import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ReactNode } from "react";

interface SecondaryBtnParameter {
  children: ReactNode;
  padding: string;
  clickEvent: Function;
  onlySmall?: boolean;
  hideOnSmall?: boolean;
}

const SecondaryBtn = ({
  children,
  padding,
  clickEvent,
  onlySmall = false,
  hideOnSmall = false,
}: SecondaryBtnParameter) => {
  const theme = useTheme();
  return (
    <Button
      variant="outlined"
      color="primary"
      sx={{
        borderRadius: 0,
        border: `2px solid ${theme.palette.primary.main}`,
        borderWidth: "2px",
        borderColor: "primary",
        position: "relative",
        "&:focus": { borderWidth: "2px" },
        "&:hover": {
          borderWidth: "2px",
          backgroundColor: `${theme.palette.primary.main} !important`,
          color: `${theme.palette.secondary.light}`,
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
