import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import CustomHero from "../../components/custom-hero/custom-hero";
import Login from "../../components/login/login";
import "./auth.scss";
import Register from "../../components/register/register";
const Auth = ({ history }) => {
  return (
    <div className="auth">
      <CustomHero title="login / register" />
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
          </ul>
        </div>
        <div className="auth_container">
          <div className="vector"></div>
          <Route exact path={`/auth/login`} component={Login} />
          <Route exact path={`/auth/register`} component={Register} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Auth);
