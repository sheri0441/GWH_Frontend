import { Container } from "@mui/material";
import Featured from "./Featured";
import Hero from "./Hero";
import Categories from "./Category";

const Home = () => {
  console.log(window.scroll());

  return (
    <>
      <Hero />
      <Container>
        <Featured />
        <Categories />
      </Container>
    </>
  );
};

export default Home;
