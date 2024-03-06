import { Box, Typography, useTheme } from "@mui/material";
import ExtractImage from "../../../utils/ExtractImage";
import { Link, useNavigate } from "react-router-dom";
import TertiaryBtn from "../../../utils/buttons/TertiaryBtn";
import IconSecondaryBtn from "../../../utils/buttons/IconSecondaryBtn";
import PrimaryBtn from "../../../utils/buttons/PrimaryBtn";
import SecondaryBtn from "../../../utils/buttons/SecondaryBtn";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import style from "./MainProduct.module.css";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setCartInfo, updateCart } from "../../../feature/loginSlice";
import { ProductDetail } from "../../../model/ProductDetail";

const MainProduct = ({ product }: { product: ProductDetail }) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLogin = useAppSelector((store) => store.login.isLogin);
  const cart = useAppSelector((store) => store.login.user.cart);

  const [quantity, setQuantity] = useState<number>(0);
  const [showFullText, setShowFullText] = useState<boolean>(false);
  const [showFullTextBtn, setShowFullTextBtn] = useState<boolean>(true);

  const addToCartHandler = () => {
    if (quantity > 0) {
      let cartList = [...cart];
      let isExist = cartList.find((item) => item.productId === product.id);

      if (isExist) {
        const newCartList = cartList.filter(
          (item) => item.productId !== product.id
        );
        let exitingProduct = {
          ...isExist,
          quantity: isExist.quantity + quantity,
        };

        cartList = [...newCartList, exitingProduct];
      } else {
        cartList.push({ productId: product.id, quantity: quantity });
      }

      if (isLogin) {
        dispatch(updateCart(cartList));
      } else {
        dispatch(setCartInfo(cartList));
        localStorage.setItem("cart", JSON.stringify(cartList));
      }

      setQuantity(0);
    }
  };

  const showFullTextHandler = () => {
    setShowFullText(!showFullText);
  };

  const quantityHandler = (action: "add" | "minus") => {
    if (action === "add" && quantity < 10) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
    if (action === "minus" && quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const buyBtnHandler = () => {
    if (quantity !== 0) {
      navigate(`/checkout/id/${product.id}/quantity/${quantity}`);
    }
  };

  useEffect(() => {
    const description = document.getElementById("description");
    if (description?.scrollHeight === description?.offsetHeight) {
      setShowFullTextBtn(false);
    }
  }, []);

  return (
    <Box sx={{ display: { xs: "block", md: "flex" }, gap: "3rem" }}>
      <Box
        sx={{
          objectFit: "contain",
          aspectRatio: "1/1",
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <img
          style={{ width: "100%" }}
          src={ExtractImage(product.image)}
          alt={product.title}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          maxHeight: "580px",
          marginTop: { xs: "1rem", md: "2rem" },
        }}
      >
        <Link
          to={`/products/category/${product.category}`}
          className={style.categoryLink}
        >
          {product.category}
        </Link>
        <Typography
          sx={{
            fontWeight: 600,
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            maxWidth: "600px",
            marginInline: "auto",
          }}
          component={"h1"}
        >
          {product.title}
        </Typography>
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography
            sx={{
              display: "-webkit-box",
              overflow: showFullText ? "auto" : "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: showFullText ? "auto" : 3,
              textAlign: { xs: "center", md: "left" },
              maxWidth: "600px",
              marginInline: "auto",
              opacity: "0.5",
            }}
            id="description"
          >
            {product.description}
          </Typography>
          <Box
            sx={{
              width: "fit-content",
              marginInline: { xs: "auto", md: "0" },
              opacity: "0.75",
            }}
          >
            {showFullTextBtn &&
              (showFullText ? (
                <TertiaryBtn clickEvent={showFullTextHandler}>Less</TertiaryBtn>
              ) : (
                <TertiaryBtn clickEvent={showFullTextHandler}>More</TertiaryBtn>
              ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              marginInline: "auto",
              width: "fit-content",
              fontSize: { xs: "1.5rem", md: "2.5rem" },
              fontWeight: 500,
              marginTop: "1rem",
              marginBottom: "1rem",
              opacity: "0.75",
            }}
          >
            {product.price}$
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: theme.palette.secondary.light,
              width: "fit-content",
              marginInline: "auto",
              height: "fit-content",
              minWidth: "280px",
            }}
          >
            <IconSecondaryBtn
              Type={RemoveIcon}
              clickEvent={() => quantityHandler("minus")}
              transparentBg={false}
            />
            <Typography component={"span"} sx={{ paddingInline: "1rem" }}>
              {quantity}
            </Typography>
            <IconSecondaryBtn
              Type={AddIcon}
              transparentBg={false}
              clickEvent={() => quantityHandler("add")}
            />
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "1rem",
            display: "flex",
            gap: "0.5rem",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <PrimaryBtn padding="1rem" clickEvent={addToCartHandler}>
            Add to Cart
          </PrimaryBtn>
          <SecondaryBtn
            padding="1rem"
            clickEvent={buyBtnHandler}
            fullWidth={true}
          >
            Buy Now
          </SecondaryBtn>
        </Box>
      </Box>
    </Box>
  );
};

export default MainProduct;
