import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ProductItem from "./ProductItem";
import style from "./index.module.css";
import { Product } from "../../../model/Product";
import IconSecondaryBtn from "../../../utils/buttons/IconSecondaryBtn";
import ErrorMessage from "../../../utils/ErrorMessage";
import PrimaryBtn from "../../../utils/buttons/PrimaryBtn";
import ProductItemSkeleton from "./ProductItemSkeleton";
import axios from "axios";

interface Props {
  showSearch: boolean;
  showSearchHandler: Function;
}

const SearchContainer = ({ showSearch, showSearchHandler }: Props) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [product, setProduct] = useState<Product[]>([]);

  const inputValueHandler = (e: { target: { value: string } }) => {
    setInputValue(e.target.value);
  };

  const closeSearch = () => {
    showSearchHandler();
    setInputValue("");
  };

  const fetchData = async () => {
    const response = await axios({
      url: import.meta.env.VITE_API_URL + `/products/search/${inputValue}`,
    });
    setIsLoading(false);
    if (response.status === 200) {
      setProduct(response.data);
    } else {
      setHasError(true);
    }
  };

  const navigationHandler = () => {
    navigate(`/products/search/${inputValue}`);
    closeSearch();
  };

  useEffect(() => {
    setIsLoading(true);
    let timeout = setTimeout(() => {
      inputValue.length > 0 && fetchData();
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [inputValue]);

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
              clickEvent={navigationHandler}
            />
          </Box>
          <IconSecondaryBtn Type={CloseIcon} clickEvent={closeSearch} />
        </Box>
        <Box
          sx={{
            marginTop: "2rem",
            marginBottom: "2rem",
            marginInline: "auto",
            width: "100%",
          }}
        >
          {inputValue &&
            (isLoading ? (
              <Stack spacing={2}>
                <ProductItemSkeleton />
                <ProductItemSkeleton />
                <ProductItemSkeleton />
                <ProductItemSkeleton />
                <ProductItemSkeleton />
              </Stack>
            ) : hasError ? (
              <ErrorMessage />
            ) : product.length !== 0 ? (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    overflowY: "scroll",
                    height: "calc(100svh - 200px)",
                    maxHeight: "fit-content",
                    width: "100%",
                    marginBottom: "2rem",
                    marginInline: "auto",
                  }}
                >
                  {product.map((pro, index) => {
                    if (index < 5) {
                      return <ProductItem key={pro.id} product={pro} />;
                    }
                  })}
                </Box>

                <PrimaryBtn
                  padding="0.75rem 1rem"
                  clickEvent={navigationHandler}
                >
                  <Typography>View All</Typography>
                </PrimaryBtn>
              </>
            ) : (
              <Box
                sx={{
                  width: "fit-cotent",
                  marginInline: "auto",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                  }}
                >
                  Such Product Not Found
                </Typography>
              </Box>
            ))}
        </Box>
      </Container>
    </Box>
  );
};

export default SearchContainer;
