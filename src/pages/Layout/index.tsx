import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import { Box } from "@mui/material";
import Footer from "./Footer";
import { useEffect } from "react";
import scrollToTop from "../../utils/scrollToTop";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [location]);
  return (
    <>
      <Header />
      <Box
        component={"main"}
        sx={{ maxWidth: "1200px", marginInline: "auto", position: "relative" }}
      >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
