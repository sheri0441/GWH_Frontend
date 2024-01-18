import { Box, Container, useTheme } from "@mui/material";
import style from "./SearchContainer.module.css";
import IconSecondaryBtn from "../../../utils/buttons/IconSecondaryBtn";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  showSearch: boolean;
  showSearchHandler: Function;
}

const SearchContainer = ({ showSearch, showSearchHandler }: Props) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100vh",
        zIndex: "99",
        paddingTop: "2rem",
        display: showSearch ? "block" : "none",
      }}
    >
      <Container>
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
      </Container>
    </Box>
  );
};

export default SearchContainer;
