import { Box, useTheme } from "@mui/material";

const CheckedBoxCategory = ({
  useFor,
  changeHandler,
  checkedValues,
}: {
  useFor: string;
  changeHandler: Function;
  checkedValues: string[];
}) => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          "&>input": {
            display: "none",
          },
          "&>label": {
            fontFamily: "inter",
            fontWeight: 500,
            position: "relative",
            textTransform: "capitalize",
            marginLeft: "1rem",
          },
          "&>label:before": {
            content: '" "',
            display: "block",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: "-15px",
            width: "10px",
            height: "10px",
            backgroundColor: theme.palette.background.default,
            border: `1px solid ${theme.palette.primary.main}`,
          },
          "&>input:checked + label:before": {
            backgroundColor: theme.palette.primary.main,
          },
        }}
      >
        <input
          type="checkbox"
          name="category"
          value={useFor}
          id={useFor}
          checked={checkedValues.includes(useFor)}
          onChange={(e) => changeHandler(e)}
          // className={style.filterCheckBoxOption}
        />
        <label htmlFor={useFor}>{useFor}</label>
      </Box>
    </>
  );
};

export default CheckedBoxCategory;
