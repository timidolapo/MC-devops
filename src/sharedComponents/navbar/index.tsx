import { NavLink } from "react-router-dom";
import "./styles.scss";
import logo from "@/assets/images/black-logo.svg";
import white_logo from "@/assets/images/white-logo.svg";

export const Navbar = () => {
  return (
    <nav className="nav-fixed">
      <NavLink to="/">
        <img
          src={logo}
          alt="messsainic_logo"
          className="nav-logo d-md-block d-none"
        />
        <img
          src={white_logo}
          alt="messsainic_logo"
          className="nav-logo d-md-none d-block"
        />
      </NavLink>
    </nav>
  );
};
