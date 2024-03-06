import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Skeleton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Product } from "../../../model/Product";
import PrimaryBtn from "../../../utils/buttons/PrimaryBtn";
import NewArrivalCard from "./NewArrivalCard";
import Pattern from "../../../assets/image/pattern.png";
import Modal from "../../../assets/image/modal.png";
// import ErrorMessage from "../../../utils/ErrorMessage";
import axios from "axios";

const Hero = () => {
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [newArrival, setNewArrival] = useState<Product>({
    id: "",
    title: "",
    price: 0,
    description: "",
    image: "",
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
    try {
      const response = await axios({
        url: import.meta.env.VITE_API_URL + "/products/recent",
      });
      setIsLoading(false);

      if (response.status === 200) {
        setNewArrival(response.data);
      } else {
        setHasError(true);
      }
    } catch (error) {
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
            fontFamily: '"Anton", sans-serif',
            fontSize: { xs: "3rem", md: "4rem" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Gents Wardrobe Hub
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem", lg: "3.5rem" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Style Redefined
          <br /> for Every Gentlemen
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
        {isLoading ? (
          <Stack
            sx={{
              marginTop: { xs: "3rem", md: "6rem" },
              width: "100%",
              maxWidth: "20rem",
              marginInline: { xs: "auto", md: "0" },
            }}
          >
            <Skeleton variant="rectangular" height={140} />
          </Stack>
        ) : hasError ? (
          <Box sx={{ height: "140px" }}></Box>
        ) : (
          <NewArrivalCard product={newArrival} />
        )}
      </Container>
      <Box
        sx={{
          backgroundColor: theme.palette.secondary.main,
          width: "50%",
          height: "100%",
          position: "absolute",
          zIndex: "-9",
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
