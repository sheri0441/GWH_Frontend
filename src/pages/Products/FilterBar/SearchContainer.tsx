import { Box, Container, Typography, useTheme } from "@mui/material";
import style from "./SearchContainer.module.css";
import IconSecondaryBtn from "../../../utils/buttons/IconSecondaryBtn";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

interface Props {
  showSearch: boolean;
  showSearchHandler: Function;
}

const SearchContainer = ({ showSearch, showSearchHandler }: Props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.main,
        position: "absolute",
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
      {/* <Container> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1.5rem",
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
            className={style.searchInput}
          />
          <IconSecondaryBtn
            Type={SearchIcon}
            clickEvent={() => console.log("hello from close")}
          />
        </Box>
        <IconSecondaryBtn
          Type={CloseIcon}
          clickEvent={() => showSearchHandler()}
        />
      </Box>
      <Box sx={{ marginTop: "2rem" }}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Box sx={{ flexGrow: 1, maxWidth: "50px", aspectRatio: "1/1" }}>
              <img
                style={{ width: "100%" }}
                src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
                alt=""
              />
            </Box>
            <Box sx={{ maxWidth: "300px" }}>
              <Typography sx={{ color: theme.palette.background.default }}>
                Jon Hardy Women's Legends Naga Gold & Silver Dragon Station
                Chain Braceleth
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.background.default,
                  fontWeight: "600",
                }}
              >
                22.5$
              </Typography>
            </Box>
          </Box>
        </Link>
      </Box>
      {/* </Container> */}
    </Box>
  );
};

export default SearchContainer;
