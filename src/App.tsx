import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { isExpired } from "react-jwt";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { useAppDispatch } from "./app/hooks";
import { setCartInfo } from "./feature/loginSlice";
import OverLayerNote from "./utils/OverLayerNote";
import SecondaryBtn from "./utils/buttons/SecondaryBtn";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import ProductsPage from "./pages/Products";
import SearchPage from "./pages/Products/SearchPage";
import About from "./pages/About";
import CategoryPage from "./pages/Products/CategoryPage";
import ProductsPageLayout from "./pages/Products/ProductsPageLayout";
import ProductDetailPage from "./pages/Products/ProductDetailPage";
import ContactPage from "./pages/Contact";
import CheckOutPage from "./pages/Checkout";
import SingleProduct from "./pages/Checkout/SingleProduct";
import UserPage from "./pages/UserPage";
import PolicyPage from "./pages/policy";
import TrackOrderPage from "./pages/TrackOrder";
import LoadingPage from "./pages/LoadingPage";

const theme = createTheme({
  typography: {
    fontFamily: `"Inter", sans-serif;`,
  },
  palette: {
    primary: {
      main: "rgb(12, 12, 12)",
    },
    secondary: {
      main: "#3075a6",
      light: "#e7ebef",
    },

    background: {
      default: "#fcfdfe",
    },
  },
});

function App() {
  const dispatch = useAppDispatch();
  const { logout, isAuthenticated } = useAuth0();
  const [serverDown, setServerDown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("cart") !== null) {
      const cartString = localStorage.getItem("cart");
      const cart = cartString !== null && JSON.parse(cartString);
      dispatch(setCartInfo(cart));
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null && isAuthenticated) {
      logout();
    }
    if (token !== null && isExpired(token)) {
      localStorage.removeItem("token");
    }
  }, []);

  const checkServer = async () => {
    setIsLoading(true);
    const sendRequest = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL + "/");

        if (response.status === 200) {
          setIsLoading(false);
          clearInterval(sendServerRequest);
        }
      } catch (error) {
        setServerDown(true);
      }
    };

    const sendServerRequest = setInterval(sendRequest, 10000);
  };

  useEffect(() => {
    checkServer();
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

              <Route path="products/" element={<ProductsPageLayout />}>
                <Route index element={<ProductsPage />} />
                <Route path="id/:id" element={<ProductDetailPage />} />
                <Route path="page/:num" element={<ProductsPage />} />
                <Route
                  path="search/:searchQuery/:num"
                  element={<SearchPage />}
                />
                <Route path="search/:searchQuery" element={<SearchPage />} />
                <Route
                  path="category/:category/:num"
                  element={<CategoryPage />}
                />
                <Route path="category/:category" element={<CategoryPage />} />
                <Route path="*" element={<ProductsPage />} />
              </Route>
              <Route path="about" element={<About />} />
              <Route path="contact" element={<ContactPage />} />
              <Route
                path="checkout/id/:id/quantity/:quantity"
                element={<SingleProduct />}
              />
              <Route path="checkout" element={<CheckOutPage />} />
              {isAuthenticated && (
                <Route path="user/profile" element={<UserPage />} />
              )}
              <Route path="policy&term" element={<PolicyPage />} />
              <Route path="track" element={<TrackOrderPage />} />
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      {serverDown && (
        <OverLayerNote>
          <Typography>
            There is some issue in the server. Please reload site.
          </Typography>
          <SecondaryBtn
            padding="0.5rem"
            danger={true}
            clickEvent={() => window.location.reload()}
          >
            Reload Site
          </SecondaryBtn>
        </OverLayerNote>
      )}
    </>
  );
}

export default App;
