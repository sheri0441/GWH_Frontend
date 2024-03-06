import { useEffect, useState } from "react";
import { Box, Skeleton, Stack, Typography, useTheme } from "@mui/material";
import CheckedBoxCategory from "./CheckedBoxCategory";
import { Category } from "../../../model/Category";
import ErrorMessage from "../../../utils/ErrorMessage";
import PrimaryBtn from "../../../utils/buttons/PrimaryBtn";
import SecondaryBtn from "../../../utils/buttons/SecondaryBtn";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Props {
  showFilter: boolean;
  showFilterHandler: Function;
}

const FilterContainer = ({ showFilter, showFilterHandler }: Props) => {
  const theme = useTheme();
  const navigate = useNavigate();

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
    const response = await axios({
      url: import.meta.env.VITE_API_URL + "/category",
    });
    const result = response.data;

    if (response.status === 200) {
      setCategoryList(result);
    } else {
      setHasError(true);
    }

    setIsLoading(false);
  };

  const navigationHandler = () => {
    const categoryArray = [];
    const input = document.querySelectorAll(".inputCategory:checked");
    for (let i = 0; i < input.length; i++) {
      categoryArray.push(input[i].id.split(" ").join("-").toLocaleLowerCase());
    }

    const categoryString = categoryArray.join(",");

    navigate(`/products/category/${categoryString}`);
    showFilterHandler();
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
          id="categoryForm"
        >
          {isLoading ? (
            <Stack
              sx={{
                display: "grid",
                gridTemplateColumns: "auto auto",
                gap: "1rem",
              }}
            >
              <Skeleton sx={{ width: "100px", height: "30px" }} />
              <Skeleton sx={{ width: "100px", height: "30px" }} />
              <Skeleton sx={{ width: "100px", height: "30px" }} />
              <Skeleton sx={{ width: "100px", height: "30px" }} />
            </Stack>
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
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            marginInline: "auto",
            width: "fit-content",
          }}
        >
          <PrimaryBtn padding="0.25rem 0.5rem" clickEvent={navigationHandler}>
            <Typography component={"span"} sx={{ fontSize: "0.75rem" }}>
              Apply
            </Typography>
          </PrimaryBtn>

          <SecondaryBtn
            padding="0.25rem 0.5rem"
            fullWidth={true}
            clickEvent={() => showFilterHandler()}
          >
            <Typography component={"span"} sx={{ fontSize: "0.75rem" }}>
              Cancel
            </Typography>
          </SecondaryBtn>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterContainer;
