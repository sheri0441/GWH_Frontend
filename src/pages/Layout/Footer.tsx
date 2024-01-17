import { Box, Container, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.secondary.main }}>
      <Container>
        <Box>
          <Link
            style={{
              color: theme.palette.background.default,
              textDecoration: "none",
            }}
            to={"/"}
          >
            <Typography>Fashion Fusion</Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
