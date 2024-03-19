import { useState, useEffect } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Box, Container, useTheme } from "@mui/material";
import IconSecondaryBtn from "../../../utils/buttons/IconSecondaryBtn";
import bodyOverflowHandler from "../../../utils/bodyOverflowHandler";
import LogoLink from "../../../components/LogoLink";
import Navigation from "./Navigation";
import ShopCart from "./ShopCart";
import LoginButtons from "./LoginButtons";
import CartBtn from "./CartBtn";

const Header = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const theme = useTheme();

  const showNavHandler = () => {
    setShowNav(!showNav);
  };

  const showCartHandler = () => {
    setShowCart(!showCart);
  };

  useEffect(() => {
    bodyOverflowHandler(showCart);
  }, [showCart]);

  useEffect(() => {
    bodyOverflowHandler(showNav);
  }, [showNav]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        zIndex: "99",
        width: " 100%",
        top: "0",
        left: "50%",
        transform: "translate(-50%)",
        backgroundColor: !scrolling
          ? "transparent"
          : theme.palette.background.default,
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            alignItems: { xs: "flex-start", md: "center" },
            gap: 5,
          }}
        >
          <LogoLink />
          <Navigation showNav={showNav} showNavHandler={showNavHandler} />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            height: "fit-content",
          }}
        >
          <CartBtn showCartHandler={showCartHandler} />
          <LoginButtons />
          <IconSecondaryBtn
            Type={MenuOpenIcon}
            clickEvent={showNavHandler}
            onlySmall={true}
          />
        </Box>
        <ShopCart showCart={showCart} showCartHandler={showCartHandler} />
      </Container>
    </Box>
  );
};

export default Header;
