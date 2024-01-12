import { NavLink } from "react-router-dom";
import style from "./LinkNav.module.css";

interface Props {
  name: string;
  link: string;
}

const LinkNav = ({ name, link }: Props) => {
  return (
    <NavLink
      style={style}
      className={({ isActive }) => (isActive ? style.active : "")}
      to={link}
    >
      {name}
    </NavLink>
  );
};

export default LinkNav;
