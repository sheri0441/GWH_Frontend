import { Box, Container, Typography, useTheme } from "@mui/material";
import style from "./index.module.css";
import IconSecondaryBtn from "../../../../utils/buttons/IconSecondaryBtn";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import PrimaryBtn from "../../../../utils/buttons/PrimaryBtn";
import LoadingAnimation from "../../../../utils/LoadingAnimation";

interface Props {
  showSearch: boolean;
  showSearchHandler: Function;
}

interface Product {
  image: string;
  title: string;
  price: number;
  id: number;
}

const SearchContainer = ({ showSearch, showSearchHandler }: Props) => {
  const theme = useTheme();
  const [inputValue, setInputValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<Product[]>([]); // remove this line later

  const loadingAnimation = () => {
    setTimeout(() => {
      console.log("hello from 2");
      setLoading(false);
    }, 2000);
  };

  const inputValueHandler = (e: { target: { value: string } }) => {
    setLoading(true);
    loadingAnimation();
    setInputValue(e.target.value);
  };

  const closeSearch = () => {
    showSearchHandler();
    setInputValue("");
  };

  //Remove the following code later -- Start
  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    setProduct(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //End

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100vh",
        zIndex: "99",
        paddingTop: "2rem",
        paddingInline: "2rem",
        display: showSearch ? "block" : "none",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",

            justifyContent: "space-between",
            alignItems: "center",
            gap: "1.5rem",
            maxWidth: "600px",
            marginInline: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              gap: "1rem",
            }}
          >
            <input
              type="text"
              placeholder="Search"
              value={inputValue}
              onChange={(e) => inputValueHandler(e)}
              className={style.searchInput}
            />
            <IconSecondaryBtn
              Type={SearchIcon}
              clickEvent={() => console.log("hello from close")}
            />
          </Box>
          <IconSecondaryBtn Type={CloseIcon} clickEvent={closeSearch} />
        </Box>
        <Box
          sx={{
            marginTop: "2rem",
            marginBottom: "2rem",
            marginInline: "auto",
          }}
        >
          {inputValue &&
            (loading ? (
              <Box
                sx={{
                  width: "3rem",
                  marginInline: "auto",
                }}
              >
                <LoadingAnimation />
              </Box>
            ) : (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    overflowY: "scroll",
                    height: "calc(100svh - 200px)",
                    maxHeight: "fit-content",
                    width: "fit-content",
                    marginBottom: "2rem",
                    marginInline: "auto",
                  }}
                >
                  {product.map((pro, index) => {
                    if (index < 5) {
                      return <ProductItem key={index} product={pro} />;
                    }
                  })}
                </Box>
                <PrimaryBtn
                  padding="0.75rem 1rem"
                  clickEvent={() => console.log("hello from view all")}
                >
                  <Typography>View All</Typography>
                </PrimaryBtn>
              </>
            ))}
        </Box>
      </Container>
    </Box>
  );
};

export default SearchContainer;
