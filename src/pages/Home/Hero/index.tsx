import { useEffect, useState } from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { Product } from "../../../model/Product";
import PrimaryBtn from "../../../utils/buttons/PrimaryBtn";
import NewArrivalCard from "./NewArrivalCard";
import Pattern from "../../../assets/image/pattern.png";
import Modal from "../../../assets/image/modal.png";

const Hero = () => {
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [newArrival, setNewArrival] = useState<Product>({
    id: 0,
    title: "",
    price: 0,
    description: "",
    images: [],
    creationAt: "",
    updatedAt: "",
    category: {
      id: 0,
      name: " ",
      image: " ",
      creationAt: " ",
      updatedAt: " ",
    },
  });
  const [hasError, setHasError] = useState<boolean>(false);

  const fetchNewArrivalProduct = async () => {
    setIsLoading(true);
    const response = await fetch(`${import.meta.env.VITE_API}products`);
    const result = await response.json();

    setIsLoading(false);

    if (response.ok) {
      setNewArrival(result[0]);
    } else {
      setHasError(true);
    }
  };

  useEffect(() => {
    fetchNewArrivalProduct();
  }, []);

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
          <PrimaryBtn isLink={true} link={"./products"} padding=" 1rem">
            View Products
          </PrimaryBtn>
        </Box>
        {!isLoading && !hasError && <NewArrivalCard product={newArrival} />}
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
