import { Box, Container, Typography, useTheme } from "@mui/material";
import style from "./index.module.css";
import IconSecondaryBtn from "../../../../utils/buttons/IconSecondaryBtn";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import PrimaryBtn from "../../../../utils/buttons/PrimaryBtn";
import LoadingAnimation from "../../../../utils/LoadingAnimation";
import ErrorMessage from "../../../../utils/ErrorMessage";
import { useNavigate } from "react-router-dom";

interface Props {
  showSearch: boolean;
  showSearchHandler: Function;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
}

const SearchContainer = ({ showSearch, showSearchHandler }: Props) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [inputValue, setInputValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
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
    setLoading(true);
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const result: Product[] = await response.json();

    if (response.ok) {
      const newResult = result.filter((pro) => pro.title.includes(inputValue));
      setProduct(newResult);
    } else {
      setHasError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
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
              clickEvent={() => navigate(`/products/?search=${inputValue}`)}
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
                {product.length > 5 && (
                  <PrimaryBtn
                    padding="0.75rem 1rem"
                    clickEvent={() =>
                      navigate(`/products/?search=${inputValue}`)
                    }
                  >
                    <Typography>View All</Typography>
                  </PrimaryBtn>
                )}
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
