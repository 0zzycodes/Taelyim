import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import logo from "../../assets/logo.png";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./header.scss";
const Header = ({ currentUser, history }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li className="nav-link">
            <Link
              to="/"
              style={
                history.location.pathname === "/"
                  ? {
                      color: "#fda82b",
                      fontWeight: "600",
                    }
                  : {}
              }
            >
              HOME
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to="/courses"
              style={
                history.location.pathname === "/courses" ||
                history.location.pathname.split("/")[1] === "courses"
                  ? {
                      color: "#fda82b",
                      fontWeight: "600",
                    }
                  : {}
              }
            >
              COURSES
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to="/about"
              style={
                history.location.pathname === "/about"
                  ? {
                      color: "#fda82b",
                      fontWeight: "600",
                    }
                  : {}
              }
            >
              ABOUT US
            </Link>
          </li>
          <li className="nav-link">
            <Link
              to="/contact"
              style={
                history.location.pathname === "/contact"
                  ? {
                      color: "#fda82b",
                      fontWeight: "600",
                    }
                  : {}
              }
            >
              CONTACT US
            </Link>
          </li>
          {currentUser && (
            <li className="nav-link">
              <Link
                to="/my-couses"
                style={
                  history.location.pathname === "/my-couses"
                    ? {
                        color: "#fda82b",
                        fontWeight: "600",
                      }
                    : {}
                }
              >
                MY COURSES
              </Link>
            </li>
          )}
          {currentUser && (
            <li className="nav-link">
              <Link
                to="/me"
                style={
                  history.location.pathname === "me"
                    ? {
                        color: "#fda82b",
                        fontWeight: "600",
                      }
                    : {}
                }
              >
                <img src={currentUser.profile_pic} alt="profile pic" />
              </Link>
            </li>
          )}
        </ul>
        {!currentUser && (
          <div className="nav-btns">
            <Link to="/auth/login" className="register-btn">
              LOGIN / REGISTER
            </Link>
            <Link
              to="/auth/register-as-an-instructor"
              className="instructor_register-btn"
            >
              BECOME AN INSTRUCTOR
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default withRouter(connect(mapStateToProps)(Header));
