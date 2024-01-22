import { Box, Typography, useTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const ErrorMessage = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: red[400],
        padding: "1rem",
        marginTop: "1rem",
        marginInline: "auto",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          color: theme.palette.background.default,
        }}
      >
        There is some type of error. Please try again.
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
