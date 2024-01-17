import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Box } from "@mui/material";

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
    </>
  );
};

export default Layout;
