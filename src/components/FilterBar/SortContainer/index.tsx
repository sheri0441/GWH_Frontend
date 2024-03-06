import {
  Box,
  List,
  ListItem,
  SvgIcon,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SecondaryBtn from "../../../utils/buttons/SecondaryBtn";
import { useNavigate } from "react-router-dom";

const SortOption = ({
  sortState,
  sortStateHandler,
}: {
  sortState: boolean;
  sortStateHandler: Function;
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleSortClicked = (query: string) => {
    navigate(`.?sort=${query}`);
    sortStateHandler();
  };

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <SecondaryBtn clickEvent={() => sortStateHandler()} padding="0.5rem 1rem">
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
          display: sortState ? "block" : "none",
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
        <ListItem onClick={() => handleSortClicked("recentAsc")}>
          Recent &uarr;
        </ListItem>
        <ListItem onClick={() => handleSortClicked("recentDsc")}>
          Recent &darr;
        </ListItem>
        <ListItem onClick={() => handleSortClicked("a-zAsc")}>
          A to Z &uarr;
        </ListItem>
        <ListItem onClick={() => handleSortClicked("a-zDsc")}>
          A to Z &darr;
        </ListItem>
      </List>
    </Box>
  );
};

export default SortOption;
