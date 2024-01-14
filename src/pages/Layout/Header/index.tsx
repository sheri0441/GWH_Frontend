import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Person2Icon from "@mui/icons-material/Person2";
import { Box, Container, Typography } from "@mui/material";
import LogoLink from "../../../components/LogoLink";
import IconSecondaryBtn from "../../../utils/buttons/IconSecondaryBtn";
import SecondaryBtn from "../../../utils/buttons/SecondaryBtn";
import Navigation from "./Navigation";
import { useState } from "react";
import ShopCart from "./ShopCart";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const theme = useTheme();
  const [showNav, setShowNav] = useState<boolean>(false);
  const [showCart, setShowCart] = useState<boolean>(false);
  const navigate = useNavigate();

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
          <Box sx={{ position: "relative" }}>
            <IconSecondaryBtn
              Type={ShoppingCartIcon}
              clickEvent={showCartHandler}
            />
            <Box
              sx={{
                background: `${theme.palette.primary.main}`,
                position: "absolute",
                top: "-6px",
                right: "-10px",
                zIndex: "1",
                width: "20px",
                height: "20px",
                pointerEvents: "none",
              }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  fontSize: "0.75rem",
                  color: `${theme.palette.background.default}`,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                component={"span"}
              >
                00
              </Typography>
            </Box>
          </Box>
          <IconSecondaryBtn
            Type={Person2Icon}
            clickEvent={() => navigate("/")}
            onlySmall={true}
          />
          <SecondaryBtn
            padding="0.5rem 1rem"
            clickEvent={() => navigate("/")}
            hideOnSmall={true}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "medium",
              }}
              component={"span"}
            >
              Login/Register
            </Typography>
          </SecondaryBtn>
          <SecondaryBtn padding="1.125rem" clickEvent={() => navigate("/user")}>
            <img
              style={{
                width: "100%",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
              src="https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            />
          </SecondaryBtn>
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
