import { useState } from "react";
import { Icon } from "@iconify/react";
import "./sidebar.scope.scss";
import logo from "@/assets/images/black-logo.svg";
import menu from "@/assets/images/menu.svg";

export const Sidebar = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggleSidebar = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <div className="menu-icon" onClick={toggleSidebar}>
        <img src={menu} alt="menu" />
      </div>
      <section className={`sidebar ${isOpen && "sidebar-isOpen"}`}>
        <div className="sidebar-wrapper">
          <div
            className={`sidebar-overlay ${isOpen && "overlay-isOpen"}`}
            onClick={toggleSidebar}
          ></div>
          <div className="sidebar-head">
            <div className="logo" onClick={toggleSidebar}>
              <img src={logo} alt="logo" />
            </div>
            <div onClick={toggleSidebar}>
              <Icon
                icon="ion:close"
                width="3.5rem"
                height="3.5rem"
                style={{ color: "#03274e" }}
              />
            </div>
          </div>
          <div className="d-flex flex-column text-sm mb-4 px-3 mt-3">
            <a href="#latest-release" onClick={toggleSidebar}>
              Lastest Release
            </a>
            <a href="#upcoming-release" onClick={toggleSidebar}>
              Upcoming Release
            </a>
            <a href="#support" onClick={toggleSidebar}>
              Support
            </a>
            <a href="#testimonies" onClick={toggleSidebar}>
              Testimonies
            </a>
            <a href="#contact" onClick={toggleSidebar}>
              Contact
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
