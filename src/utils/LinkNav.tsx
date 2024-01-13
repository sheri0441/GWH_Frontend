import { NavLink } from "react-router-dom";
import style from "./LinkNav.module.css";

interface Props {
  name: string;
  link: string;
}

const LinkNav = ({ name, link }: Props) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? `${style.navlink}  ${style.active}` : style.navlink
      }
      to={link}
    >
      {name}
    </NavLink>
  );
};

export default LinkNav;
