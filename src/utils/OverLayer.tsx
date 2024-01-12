import { Box, Divider, Typography } from "@mui/material";
import { ReactNode } from "react";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import IconSecondaryBtn from "./buttons/IconSecondaryBtn";

interface Props {
  smallOnly?: boolean;
  showOverLayer: boolean;
  children: ReactNode;
  overLayerHandler: Function;
  title: string;
}

const OverLayer = ({
  smallOnly = false,
  showOverLayer,
  children,
  overLayerHandler,
  title,
}: Props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: { xs: "fixed", md: smallOnly ? "relative" : "fixed" },
        top: 0,
        right: 0,
        height: { xs: "100vH", md: smallOnly ? "fit-content" : "100vH" },
        zIndex: { xs: 8, md: 0 },
        display: {
          xs: showOverLayer ? "block" : "none",
          md: "block",
        },
      }}
    >
      <Box
        sx={{
          background: "#00000021",
          width: "100vw",
          height: "100vh",
          cursor: "pointer",
          display: {
            xs: showOverLayer ? "block" : "none",
            md: smallOnly ? "none" : showOverLayer ? "block" : "none",
          },
        }}
        onClick={() => overLayerHandler()}
      ></Box>
      <Box
        sx={{
          position: { xs: "fixed", md: smallOnly ? "relative" : "fixed" },
          top: 0,
          right: 0,
          width: { xs: "50%", md: smallOnly ? "fit-content" : "50%" },
          maxWidth: "450px",
          boxSizing: "border-box",
          background: {
            xs: `${theme.palette.background.default}`,
            md: smallOnly
              ? "transparent"
              : `${theme.palette.background.default}`,
          },
          height: { xs: "100vH", md: smallOnly ? "fit-content" : "100vH" },
          zIndex: { xs: 9, md: 0 },
          padding: { xs: 2, md: smallOnly ? 0 : 2 },
          boxShadow: {
            xs: `0px 0px 16px -4px ${theme.palette.primary.main}`,
            md: smallOnly
              ? "none"
              : `0px 0px 16px -4px ${theme.palette.primary.main}`,
          },
          marginTop: { xs: "auto", md: "-4px" },
          display: {
            xs: showOverLayer ? "block" : "none",
            md: smallOnly ? "block" : showOverLayer ? "block" : "none",
          },
        }}
      >
        <Box
          sx={{
            display: { xs: "flex", md: smallOnly ? "none" : "flex" },
            flexDirection: "row-reverse",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 2,
            gap: 2,
          }}
        >
          <IconSecondaryBtn
            Type={CloseIcon}
            clickEvent={overLayerHandler}
            onlySmall={smallOnly ? true : false}
          />

          <Typography
            sx={{
              fontSize: "24px",
              textTransform: "uppercase",
              display: { xs: "block", md: smallOnly ? "none" : "block" },
            }}
            component={"h3"}
          >
            {title}
          </Typography>
        </Box>

        <Divider
          sx={{
            display: { xs: "block", md: smallOnly ? "none" : "block" },
          }}
        />
        {children}
      </Box>
    </Box>
  );
};

export default OverLayer;
