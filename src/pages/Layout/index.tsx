import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        Layout
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
