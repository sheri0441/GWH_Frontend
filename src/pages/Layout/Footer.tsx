import { Box, Container, List, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { ListItem } from "@mui/material";

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
          }}
        >
          <Link
            style={{
              color: theme.palette.background.default,
              textDecoration: "none",
              display: "block",
              textAlign: "center",
            }}
            to={"/"}
          >
            <Typography
              sx={{ fontFamily: '"Carattere", cursive', fontSize: "2rem" }}
            >
              Fashion Fusion
            </Typography>
          </Link>
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },

              marginTop: { xs: "2rem", md: "0" },
            }}
          >
            <Typography
              component={"h3"}
              sx={{
                fontWeight: "600",
              }}
            >
              Sitemap
            </Typography>
            <List
              component={"nav"}
              sx={{
                textAlign: { xs: "center", md: "left" },
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: "0.75rem",
                "&>li": {
                  textAlign: "center",
                  display: "block",
                  padding: "0",
                },
                "&>li>a": {
                  color: theme.palette.background.default,
                  textDecoration: "none",
                },
              }}
            >
              <ListItem>
                <Link to={"/"}>Home</Link>
              </ListItem>
              <ListItem>
                <Link to={"/products"}>Products</Link>
              </ListItem>
              <ListItem>
                <Link to={"/about"}>About</Link>
              </ListItem>
              <ListItem>
                <Link to={"/contact"}>Contact</Link>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
