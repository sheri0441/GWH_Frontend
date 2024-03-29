import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import SearchContainer from "./SearchContainer";
import FilterContainer from "./FilterContainer";
import IconSecondaryBtn from "../../utils/buttons/IconSecondaryBtn";
import bodyOverflowHandler from "../../utils/bodyOverflowHandler";

import SortOption from "./SortContainer";

const FilterBar = () => {
  const [showSort, setShowSort] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const showSortHandler = () => {
    setShowSort(!showSort);
  };

  const showSearchHandler = () => {
    setShowSearch(!showSearch);
  };

  const showFilterHandler = () => {
    setShowFilter(!showFilter);
  };

  useEffect(() => {
    bodyOverflowHandler(showSearch);
  }, [showSearch]);

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
      <SortOption sortState={showSort} sortStateHandler={showSortHandler} />
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
