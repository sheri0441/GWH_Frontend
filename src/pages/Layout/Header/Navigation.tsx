import { Box } from "@mui/material";
import LinkNav from "../../../utils/LinkNav";
import OverLayer from "../../../utils/OverLayer";
import { useEffect } from "react";

interface Props {
  showNavHandler: Function;
  showNav: boolean;
}

const Navigation = ({ showNav = false, showNavHandler }: Props) => {
  useEffect(() => {
    if (showNav && innerWidth < 900) {
      showNavHandler();
    }
  }, [location.pathname]);
  return (
    <OverLayer
      showOverLayer={showNav}
      overLayerHandler={showNavHandler}
      title={"menu"}
      smallOnly={true}
    >
      <Box
        component={"nav"}
        sx={{
          marginTop: { xs: 4, md: 0 },
          paddingLeft: { xs: 2.5, md: 0 },
          display: { xs: "flex" },
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
        }}
      >
        <LinkNav link="/" name="Home" />
        <LinkNav link="/products" name="PRODUCTS" />
        <LinkNav link="/about" name="ABOUT" />
        <LinkNav link="/contact" name="CONTACT" />
      </Box>
    </OverLayer>
  );
};

export default Navigation;
