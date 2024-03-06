import { Box, Container, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import FooterLinkSection from "./FooterLinkSection";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.main,
        paddingTop: { xs: "2rem" },
        paddingBottom: { xs: "2rem" },
      }}
    >
      <Container>
        <Box
          sx={{
            color: theme.palette.background.default,
            display: "flex",
            flexDirection: { xs: "column", md: "row-reverse" },
            justifyContent: { md: "space-between" },
            alignItems: { xs: "0", md: "center" },
            "& > a": {
              textAlign: { xs: "center", md: "right" },
            },
          }}
        >
          <Link
            style={{
              color: theme.palette.background.default,
              textDecoration: "none",
              display: "block",
              minWidth: "fit-content",
            }}
            to={"/"}
          >
            <Typography
              sx={{
                fontFamily: '"Anton", sans-serif',
                fontSize: "2rem",
              }}
            >
              Gents Wardrobe Hub
            </Typography>
          </Link>
          <FooterLinkSection />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
