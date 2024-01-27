import { NavLink } from "react-router-dom";
import "./styles.scss";
import logo from "@/assets/images/black-logo.svg";

export const Navbar = () => {
  return (
    <nav className="nav-fixed">
      <NavLink to="/">
        <img src={logo} alt="messsainic_logo" className="nav-logo" />
      </NavLink>
    </nav>
  );
};
