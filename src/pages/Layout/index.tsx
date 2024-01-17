import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Box } from "@mui/material";
import Footer from "./Footer";

const Layout = () => {
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
