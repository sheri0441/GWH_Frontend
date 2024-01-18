import { Box, Container, Typography, useTheme } from "@mui/material";
import PrimaryBtn from "../../../utils/buttons/PrimaryBtn";
import NewArrivalCard from "./NewArrivalCard";
import Pattern from "../../../assets/image/pattern.png";
import Modal from "../../../assets/image/modal.png";

const product = {
  imageURL: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  title:
    "Jon Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Braceleth",
  price: 22.5,
  discount: 10,
  id: "as1516",
};

const Hero = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        paddingTop: "6.5rem",
        paddingBottom: "4rem",
        position: "relative",
      }}
    >
      <Container>
        <Typography
          sx={{
            fontFamily: '"Carattere", cursive',
            fontSize: { xs: "3rem", md: "4rem" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Fashion Fusion
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "3rem", lg: "4rem" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Style Unites,
          <br /> Fashion Defines
        </Typography>
        <Box
          sx={{
            width: "12rem",
            marginInline: { xs: "auto", md: "0" },
            marginTop: "3rem",
          }}
        >
          <PrimaryBtn isLink={true} link={"./products"} padding="0.5rem 1.5rem">
            View Products
          </PrimaryBtn>
        </Box>
        <NewArrivalCard product={product} />
      </Container>
      <Box
        sx={{
          backgroundColor: theme.palette.secondary.main,
          width: "50%",
          height: "100%",
          position: "absolute",
          top: "0",
          right: "0",
          display: { xs: "none", md: "block" },
          overflow: "hidden",
        }}
      >
        <img src={Pattern} alt="" />
      </Box>
      <Box
        sx={{
          height: { md: "600px" },
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-25%)",
          display: { xs: "none", md: "block" },
        }}
      >
        <img style={{ width: "100%", height: "100%" }} src={Modal} alt="" />
      </Box>
    </Box>
  );
};

export default Hero;
