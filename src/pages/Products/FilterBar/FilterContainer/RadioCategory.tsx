import { Box } from "@mui/material";

const RadioCategory = ({ useFor }: { useFor: string }) => {
  return (
    <>
      <Box>
        <label htmlFor={useFor}>{useFor}</label>
        <input type="radio" name={useFor} id={useFor} />
      </Box>
    </>
  );
};

export default RadioCategory;
