import { Box, Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ paddingTop: "6.5rem", paddingBottom: "6.5rem" }}>
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            textAlign: "center",
            fontWeight: "600",
          }}
          component={"h1"}
        >
          About
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          <Typography sx={{ fontSize: { md: "1.25rem" }, textAlign: "center" }}>
            At Gents Wardrobe Hub, we believe that style knows no boundaries.
            Our platform is a celebration of individuality, where fashion
            becomes a language that transcends gender. We curate a diverse
            collection of trends and timeless pieces, fostering a space where
            everyone finds a reflection of their unique identity.
          </Typography>
          <Typography sx={{ fontSize: { md: "1.25rem" }, textAlign: "center" }}>
            With an unwavering commitment to inclusivity, Gents Wardrobe Hub is
            more than just a marketplace; it's a movement. We champion the idea
            that fashion is a canvas for self-expression, offering an array of
            styles that empower individuals to embrace their authenticity
            boldly. Whether you seek classic elegance, contemporary flair, or a
            fusion of both, our carefully selected range embodies versatility
            and sophistication for all.
          </Typography>
          <Typography sx={{ fontSize: { md: "1.25rem" }, textAlign: "center" }}>
            Join us in redefining the boundaries of fashion. Our platform stands
            as a testament to the belief that confidence knows no gender.
            Embrace your style, break free from norms, and celebrate the
            diversity of fashion with Gents Wardrobe Hub – where every trend
            tells a story, and every story is beautifully unique.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
