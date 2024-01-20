import { Box, Typography, useTheme } from "@mui/material";
import SecondaryBtn from "../../../../utils/buttons/SecondaryBtn";
import PrimaryBtn from "../../../../utils/buttons/PrimaryBtn";
import RadioCategory from "./radioCategory";

interface Props {
  showFilter: boolean;
  showFilterHandler: Function;
}

const FilterContainer = ({ showFilter, showFilterHandler }: Props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "absolute",
        top: "200px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: theme.palette.background.default,
        padding: "1rem",
        boxShadow: `0px 0px 6px ${theme.palette.primary.main}`,
        display: showFilter ? "block" : "none",
        zIndex: 99,
      }}
    >
      <Box>
        <Typography sx={{ fontWeight: "500" }}>Category</Typography>
        <Box>
          <RadioCategory useFor="mens" />
          <RadioCategory useFor="mens" />
          <RadioCategory useFor="mens" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <PrimaryBtn
          padding="0.25rem 0.5rem"
          clickEvent={() => console.log("hello from appy filter")}
        >
          <Typography component={"span"} sx={{ fontSize: "0.75rem" }}>
            Apply
          </Typography>
        </PrimaryBtn>
        <SecondaryBtn
          padding="0.25rem 0.5rem"
          clickEvent={() => showFilterHandler()}
        >
          <Typography component={"span"} sx={{ fontSize: "0.75rem" }}>
            Cancel
          </Typography>
        </SecondaryBtn>
      </Box>
    </Box>
  );
};

export default FilterContainer;
