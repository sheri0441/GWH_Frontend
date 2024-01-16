import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Box, Container } from "@mui/material";
import LogoLink from "../../../components/LogoLink";
import IconSecondaryBtn from "../../../utils/buttons/IconSecondaryBtn";
import Navigation from "./Navigation";
import { useState } from "react";
import ShopCart from "./ShopCart";
import LoginButtons from "./LoginButtons";
import CartBtn from "./CartBtn";

const Header = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);

  const showNavHandler = () => {
    setShowNav(!showNav);
  };

  const showCartHandler = () => {
    setShowCart(!showCart);
  };

  return (
    <Box component="header">
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
