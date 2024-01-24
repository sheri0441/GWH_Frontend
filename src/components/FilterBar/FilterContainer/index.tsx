import { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import CheckedBoxCategory from "./CheckedBoxCategory";
import { Category } from "../../../model/Category";
import LoadingAnimation from "../../../utils/LoadingAnimation";
import ErrorMessage from "../../../utils/ErrorMessage";
import PrimaryBtn from "../../../utils/buttons/PrimaryBtn";
import SecondaryBtn from "../../../utils/buttons/SecondaryBtn";

interface Props {
  showFilter: boolean;
  showFilterHandler: Function;
}

const FilterContainer = ({ showFilter, showFilterHandler }: Props) => {
  const theme = useTheme();

  const [checkedValues, setCheckedValues] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [categoryList, setCategoryList] = useState<Category[]>([]);

  const changeHandler = (e: { target: { value: string; checked: true } }) => {
    const { value, checked } = e.target;

    if (checked) {
      setCheckedValues((per) => [value, ...per]);
    } else {
      setCheckedValues((per) => [...per.filter((cat) => cat !== value)]);
    }
  };

  const fetchCategory = async () => {
    setIsLoading(true);
    const response = await fetch(`${import.meta.env.VITE_API}categories`);
    const result = await response.json();

    if (response.ok) {
      setCategoryList(result);
    } else {
      setHasError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: theme.palette.background.default,
        padding: "1rem",
        boxShadow: `0px 0px 6px ${theme.palette.primary.main}`,
        display: showFilter ? "block" : "none",
        zIndex: 99,
      }}
    >
      <Box>
        <Typography sx={{ fontWeight: "500", marginBottom: "1rem" }}>
          Category
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem 2rem",
            marginBottom: "1rem",
          }}
          component={"form"}
        >
          {isLoading ? (
            <Box sx={{ width: "100px", marginInline: "auto" }}>
              <LoadingAnimation />
            </Box>
          ) : hasError ? (
            <ErrorMessage />
          ) : (
            categoryList.map((cat) => (
              <CheckedBoxCategory
                key={cat.id}
                useFor={cat.name}
                changeHandler={changeHandler}
                checkedValues={checkedValues}
              />
            ))
          )}
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
