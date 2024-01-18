import {
  Box,
  List,
  ListItem,
  SvgIcon,
  Typography,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import IconSecondaryBtn from "../../../utils/buttons/IconSecondaryBtn";
import SecondaryBtn from "../../../utils/buttons/SecondaryBtn";
import { useState } from "react";
import SearchContainer from "./SearchContainer";
import FilterContainer from "./FilterContainer";

const FilterBar = () => {
  const theme = useTheme();
  const [showSort, setShowSort] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const showSearchHandler = () => {
    setShowSearch(!showSearch);
  };

  const showFilterHandler = () => {
    setShowFilter(!showFilter);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: "1rem" },
        justifyContent: "end",
        marginTop: "1rem",
      }}
    >
      <IconSecondaryBtn
        clickEvent={() => showSearchHandler()}
        Type={SearchIcon}
      ></IconSecondaryBtn>
      <IconSecondaryBtn
        clickEvent={() => showFilterHandler()}
        Type={FilterAltIcon}
      ></IconSecondaryBtn>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <SecondaryBtn
          clickEvent={() => setShowSort(!showSort)}
          padding="0.5rem 1rem"
        >
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "medium",
            }}
            component={"span"}
          >
            sort By
          </Typography>
          <SvgIcon component={ArrowDropDownIcon} fontSize="small" />
        </SecondaryBtn>
        <List
          sx={{
            boxShadow: "0px 0px 6px  #000",
            position: "absolute",
            right: "0",
            top: "120%",
            padding: "0",
            display: showSort ? "block" : "none",
            border: `1px solid ${theme.palette.primary.main}`,
            "&>li": {
              fontSize: "12px",
              fontWeight: "500",
              backgroundColor: theme.palette.background.default,
              cursor: "pointer",
            },
            "&>li:hover": {
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.background.default,
            },
          }}
        >
          <ListItem onClick={() => console.log("hello from recent")}>
            Recent &uarr;
          </ListItem>
          <ListItem onClick={() => console.log("hello from recent")}>
            Recent &darr;
          </ListItem>
          <ListItem onClick={() => console.log("hello from recent")}>
            A to Z &uarr;
          </ListItem>
          <ListItem onClick={() => console.log("hello from recent")}>
            A to Z &darr;
          </ListItem>
        </List>
      </Box>
      <SearchContainer
        showSearch={showSearch}
        showSearchHandler={showSearchHandler}
      />
      <FilterContainer
        showFilter={showFilter}
        showFilterHandler={showFilterHandler}
      />
    </Box>
  );
};

export default FilterBar;
