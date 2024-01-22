import { Box, useTheme } from "@mui/material";
// import { useState } from "react";

const RadioCategory = ({ useFor }: { useFor: string }) => {
  const theme = useTheme();

  // const [checked, setChecked] = useState<boolean>(false);

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
            // backgroundColor: checked
            //   ? theme.palette.primary.main
            //   : theme.palette.background.default,
            border: `1px solid ${theme.palette.primary.main}`,
          },
          "&>input:checked>label:before": {
            backgroundColor: theme.palette.primary.main,
          },
        }}
      >
        <input
          type="radio"
          name="category"
          value={useFor}
          id={useFor}
          // checked={checked}
          // onChange={() => setChecked(!checked)}
        />
        <label htmlFor={useFor}>{useFor}</label>
      </Box>
    </>
  );
};

export default RadioCategory;
