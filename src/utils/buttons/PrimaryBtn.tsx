import { Button, useTheme } from "@mui/material";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import style from "./PrimaryBtn.module.css";

interface Props {
  padding: string;
  children: ReactNode;
  clickEvent?: Function;
  isLink?: boolean;
  link?: string;
}

const PrimaryBtn = ({
  padding,
  children,
  clickEvent = () => {},
  isLink = false,
  link = "",
}: Props) => {
  const theme = useTheme();
  return !isLink ? (
    <Button
      sx={{
        backgroundColor: `${theme.palette.primary.main}`,
        color: theme.palette.background.default,
        borderRadius: 0,
        width: "100%",
        marginTop: "0",
        padding: padding,
        position: "relative",
        "&:hover": {
          backgroundColor: `${theme.palette.secondary.main}`,
        },
      }}
      onClick={() => clickEvent()}
    >
      {children}
    </Button>
  ) : (
    <Link
      style={{
        backgroundColor: `${theme.palette.primary.main}`,
        color: theme.palette.background.default,
        borderRadius: 0,
        width: "100%",
        marginTop: "0",
        padding: padding,
        textDecoration: "none",
        position: "relative",
      }}
      className={style.primaryBtn}
      to={link}
    >
      {children}
    </Link>
  );
};

export default PrimaryBtn;
