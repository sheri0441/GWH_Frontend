import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { Store } from "./app/Store";

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
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
