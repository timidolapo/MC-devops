// import { Link } from "react-router-dom";
import copyright from "@/assets/images/copyright.svg";
import { NavLink } from "react-router-dom";
import logo from "@/assets/images/white-logo.svg";
import facebook from "@/assets/images/facebook.svg";
import instagram from "@/assets/images/instagram.svg";
import whatsapp from "@/assets/images/whatsapp.svg";
import "./styles.scss";

export const Footer = () => {
  const datetime = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className=" d-flex justify-content-between align-items-center">
          <NavLink to="/">
            <img src={logo} alt="messsainic_logo" className="nav-logo" />
          </NavLink>
          <div className="d-flex">
            <a
              href="https://facebook.com"
              target="_blank"
              className="text-decoration-none"
              rel="noreferrer"
            >
              <img src={facebook} alt="facebook" className="social-icon" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="text-decoration-none"
              rel="noreferrer"
            >
              <img src={instagram} alt="instagram" className="social-icon" />
            </a>
            <a
              href="tel:123456789"
              target="_blank"
              className="text-decoration-none"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="whatsapp" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright-wrapper">
          <p className="text-lg text-center text-whitte-00 mb-0">
            Copyright Messianic{"  "}
            <img
              className="footer_message mx-3"
              src={copyright}
              alt="footer_message"
            />{" "}
            {datetime}
          </p>
        </div>
      </div>
    </footer>
  );
};
