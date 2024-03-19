import { Link } from "react-router-dom";
import logo from "../assets/image/gwh_logo.png";
import "./LogoLink.css";

const LogoLink = () => {
  return (
    <Link
      style={{ width: "50px", display: "flex", alignItems: "center" }}
      to="/"
    >
      <img style={{ width: "100%" }} src={logo} alt="Gents Wardrobe Hub" />
    </Link>
  );
};

export default LogoLink;
