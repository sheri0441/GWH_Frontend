import { Box, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LinkListContainer from "./LinkListContainer";

const FooterLinkSection = () => {
  return (
    <Box
      sx={{
        textAlign: { xs: "center", md: "left" },
        width: "100%",
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
      <Box
        sx={{
          display: {
            md: "flex",
          },
          width: "100%",
          gap: { md: "10rem" },
        }}
      >
        <LinkListContainer>
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
        </LinkListContainer>
        <LinkListContainer>
          <ListItem>
            <Link to={"/trackorder"}>Track Order</Link>
          </ListItem>
          <ListItem>
            <Link to={"/contact#faq"}>FAQs</Link>
          </ListItem>
          <ListItem>
            <Link to={"/policy"}>Privacy Policy</Link>
          </ListItem>
        </LinkListContainer>
      </Box>
    </Box>
  );
};

export default FooterLinkSection;
