import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import Login from "../../components/login/login";
import Register from "../../components/register/register";
import InstructorRegister from "../../components/instructorRegister/instructorRegister";
import "./auth.scss";

const Auth = ({ history }) => {
  return (
    <div className="auth">
      {/* <CustomHero title="login / register" /> */}
      <div className="login_register">
        <div className="login_register_nav">
          <ul>
            <li>
              <Link
                to="/auth/login"
                style={
                  history.location.pathname === "/auth"
                    ? { color: "#ff8715" }
                    : history.location.pathname === "/auth/login"
                    ? { color: "#ff8715" }
                    : {}
                }
              >
                LOGIN
              </Link>
            </li>
            <li>
              <Link
                to="/auth/register"
                style={
                  history.location.pathname === "/auth/register"
                    ? { color: "#ff8715" }
                    : {}
                }
              >
                REGISTER
              </Link>
            </li>
            <li>
              <Link
                to="/auth/register-as-an-instructor"
                style={
                  history.location.pathname ===
                  "/auth/register-as-an-instructor"
                    ? { color: "#ff8715" }
                    : {}
                }
              >
                REGISTER AS AN INSTRUCTOR
              </Link>
            </li>
          </ul>
        </div>
        <div className="auth_container">
          <div className="vector"></div>
          <Route exact path={`/auth/login`} component={Login} />
          <Route exact path={`/auth/register`} component={Register} />
          <Route
            exact
            path={`/auth/register-as-an-instructor`}
            component={InstructorRegister}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Auth);
