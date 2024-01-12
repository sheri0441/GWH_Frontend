import { Box, Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import IconSecondaryBtn from "../../../utils/buttons/IconSecondaryBtn";

// interface Props {
//   showCart: boolean;
//   showCartHandler: Function;
// }

interface Props {
  showNavHandler: Function;
  showNav: boolean;
}

// { showCart, showCartHandler }: Props
const ShoppingCart = ({ showNav = false, showNavHandler }: Props) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: { xs: "fixed" }, //md relative
        top: 0,
        right: 0,
        height: { xs: "100vH" }, //md fit-content
        zIndex: { xs: 8, md: 0 },
        display: { xs: showNav ? "block" : "none", md: "block" },
      }}
    >
      <Box
        sx={{
          background: "#00000021",
          width: "100vw",
          height: "100vh",
          cursor: "pointer",
          display: {
            xs: showNav ? "block" : "none", //md none
          },
        }}
        onClick={() => showNavHandler()}
      ></Box>
      <Box
        sx={{
          position: { xs: "fixed" }, // md relative
          top: 0,
          right: 0,
          width: { xs: "50%" }, // md fit-content
          maxWidth: "400px",
          background: {
            xs: `${theme.palette.background.default}`, //md transparent
          },
          height: { xs: "100vH" }, //md fit-content
          zIndex: { xs: 9, md: 0 },
          padding: { xs: 2 }, //md 0
          boxShadow: {
            xs: `0px 0px 16px -4px ${theme.palette.primary.main}`, //md none
          },
          marginTop: { xs: "auto", md: "-4px" },
          display: { xs: showNav ? "block" : "none" }, // md block
        }}
      >
        <IconSecondaryBtn Type={CloseIcon} clickEvent={showNavHandler} />
        {
          //onlySmall true
        }

        <Typography
          sx={{
            marginTop: 3,
            fontSize: "24px",
            marginLeft: 2,
            textTransform: "uppercase",
            display: { xs: "block" }, // md none
          }}
          component={"h3"}
        >
          shopping cart
        </Typography>

        <Divider
          sx={{
            display: { xs: "block" }, // md none
          }}
        />
        <p>Hello from cart</p>
      </Box>
    </Box>
  );
};

export default ShoppingCart;
