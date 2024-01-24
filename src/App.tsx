import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProductsPage from "./pages/Products";
import SearchPage from "./pages/SearchPage";
import About from "./pages/About";

const theme = createTheme({
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
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              {/* <Route path="id/:id" element={<SearchPage />} /> */}
              <Route path="products/">
                <Route index element={<ProductsPage />} />
                <Route path="page/:num" element={<ProductsPage />} />
                <Route path="search/:search/" element={<SearchPage />}>
                  <Route index element={<SearchPage />} />
                  <Route path="page/:num" element={<SearchPage />} />
                  <Route path="*" element={<SearchPage />} />
                </Route>
                <Route path="*" element={<ProductsPage />} />
              </Route>
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
