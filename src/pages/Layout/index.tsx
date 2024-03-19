import { Box } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import scrollToTop from "../../utils/scrollToTop";
import Header from "./Header";
import Footer from "./Footer";

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
