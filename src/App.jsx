import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setAdmin } from "./redux/admin/actions";
import { selectAdmin } from "./redux/admin/selectors";
import { setCurrentUser } from "./redux/user/actions";
import { selectCurrentUser } from "./redux/user/selectors";
/*==============================*/
/*COMPONENT*/
/*==============================*/
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
/*==============================*/
/*PAGES*/
/*==============================*/
import Homepage from "./pages/homepage/homepage";
import Spinner from "./components/spinner/spinner";
// import MobileHeader from "../../WeRead/src/components/mobile-header/mobile-header";
import Courses from "./pages/courses/courses";
import Auth from "./pages/auth/auth";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Me from "./pages/me/me";
import MyCourses from "./pages/my-courses/my-courses";
import Dashboard from "./dashboards/admin/dashboard";
import InstructorDashboard from "./dashboards/instructor/dashboard";
import "./App.scss";

class App extends React.Component {
  state = {
    isLoading: false,
  };
  unsubscribFromSnapshot = null;
  unSubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.setState({ isLoading: true });
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
      this.setState({
        isLoading: false,
      });
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    const { history, admin, currentUser } = this.props;
    return (
      <div className="App">
        {history.location.pathname === "/dashboard" ? null : history.location
            .pathname === "/notfound" ? null : history.location.pathname ===
          "/dashboard-admin" ? null : (
          <div className="showing">
            <div className="desktop">
              <Header showSearch={this.handleSearchShow} />
            </div>
            <div className="mobile">{/* <MobileHeader /> */}</div>
          </div>
        )}

        <div
          className={`${
            history.location.pathname === "/" ||
            history.location.pathname.includes("dashboard")
              ? "homepage_wrapper"
              : "wrapper"
          }`}
          style={
            history.location.pathname.includes("dashboard") ? { margin: 0 } : {}
          }
        >
          {this.state.isLoading ? (
            <Spinner />
          ) : (
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/courses" component={Courses} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/my-courses" component={MyCourses} />
              <Route
                exact
                path="/me"
                render={() =>
                  currentUser && currentUser.role === "Student" ? (
                    <Me />
                  ) : (
                    <Redirect to="/auth" />
                  )
                }
              />
              <Route path="/auth" component={Auth} />
              <Route
                exact
                path="/dashboard-admin"
                render={() =>
                  !admin ? <Dashboard /> : <Redirect to="/auth" />
                }
              />
              {/* <Route exact path="/dashboard" component={InstructorDashboard} /> */}
              <Route
                exact
                path="/dashboard"
                render={() =>
                  currentUser ? (
                    <InstructorDashboard />
                  ) : (
                    <Redirect to="/auth" />
                  )
                }
              />
            </Switch>
          )}
        </div>
        {history.location.pathname === "/dashboard" ? null : history.location
            .pathname === "/notfound" ? null : history.location.pathname ===
          "/dashboard-admin" ? null : (
          <Footer />
        )}
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  admin: selectAdmin,
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setAdmin: (admin) => dispatch(setAdmin(admin)),
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
