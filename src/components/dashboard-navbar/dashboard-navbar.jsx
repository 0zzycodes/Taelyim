import React from "react";
import { Link } from "react-router-dom";
import menu from "../../assets/menu.svg";
import userIcon from "../../assets/dashboard/user-icon.svg";
import bell from "../../assets/dashboard/bell.svg";
// import logo from "../../assets/logo.png";

import "./dashboard-navbar.scss";

const DashboardNavbar = ({
  currentPage,
  isSidePanelShowing,
  toggleSidePanel,
}) => {
  return (
    <div className="dashboard-navbar">
      <div
        className="logo_menu"
        style={
          isSidePanelShowing ? { minWidth: "260px" } : { minWidth: "80px" }
        }
      >
        <Link
          to="/"
          style={!isSidePanelShowing ? { opacity: 0, display: "none" } : {}}
        >
          <h3 className="logo-text">TAELYIM</h3>
          {/* <img src={logo} alt="Logo" /> */}
        </Link>
        <div
          className="menu"
          onClick={toggleSidePanel}
          style={!isSidePanelShowing ? { paddingLeft: "20px" } : {}}
        >
          <img src={menu} alt="menu" />
        </div>
      </div>
      <div className="route-notification-user">
        <div className="route">
          <span>{currentPage.toUpperCase()}</span>
        </div>
        <div className="notification" onClick={() => {}}>
          <img src={bell} alt="notification" />
          <span className="notification-count">{0}</span>
        </div>
        <div className="user">
          <div className="avatar-container">
            {" "}
            <img src={userIcon} alt="logo" />
          </div>
          <span>ADMIN</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
