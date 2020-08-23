import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
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
import "./App.scss";
import Courses from "./pages/courses/courses";
import Auth from "./pages/auth/auth";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";

class App extends React.Component {
  state = {
    isLoading: true,
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
    const { history } = this.props;
    return (
      <div className="App">
        {history.location.pathname === "/signin" ? null : history.location
            .pathname === "/notfound" ? null : history.location.pathname ===
          "/signup" ? null : (
          <div className="showing">
            <div className="desktop">
              <Header showSearch={this.handleSearchShow} />
            </div>
            <div className="mobile">{/* <MobileHeader /> */}</div>
          </div>
        )}

        <div
          className={`${
            history.location.pathname !== "/" ? "wrapper" : "homepage_wrapper"
          }`}
        >
          {this.state.isLoading ? (
            <Spinner />
          ) : (
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/courses" component={Courses} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route path="/auth" component={Auth} />
            </Switch>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
