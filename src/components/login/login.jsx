import React, { Component } from "react";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import loader from "../../assets/loader.gif";
import google from "../../assets/google.svg";

import "./login.scss";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: "",
      isShowPassword: false,
      isLoading: false,
    };
  }
  handleToggleShowPassword = () =>
    this.setState({ isShowPassword: !this.state.isShowPassword });
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      this.setState({ isLoading: true });
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      error.code === "auth/wrong-password"
        ? this.setState({
            isLoading: false,
            errorMessage:
              "The password is invalid or the user does not have a password.",
          })
        : error.code === "auth/user-not-found"
        ? this.setState({
            isLoading: false,
            errorMessage:
              "There is no user record corresponding to this identifier.",
          })
        : this.setState({ isLoading: false, errorMessage: "Wierd" });
    }

    // this.setState({ email: '', password: '' });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      errorMessage: "",
    });
  };
  render() {
    const {
      email,
      password,
      errorMessage,
      isShowPassword,
      isLoading,
    } = this.state;
    return (
      <div className="login">
        <div>
          {" "}
          <h3 className="title">Sign in to your account</h3>
          {errorMessage !== "" ? (
            <span className="error">{errorMessage}</span>
          ) : null}
          <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              required
              handleChange={this.handleChange}
              label="Email"
            />
            <FormInput
              type={isShowPassword ? "text" : "password"}
              name="password"
              value={password}
              required
              handleChange={this.handleChange}
              label="Password"
              forgotPassword
              toggleShowPassword={this.handleToggleShowPassword}
              isShowPass={this.state.isShowPassword}
              handleForgetPass={this.props.forgotPassword}
            />
            <div className="buttons">
              <CustomButton type="button" onClick={this.handleSubmit}>
                Sign In {isLoading ? <img src={loader} alt="Loader" /> : null}
              </CustomButton>
            </div>
            <div className="buttons">
              <p className="or-sign-in-with ">Or sign in with:</p>
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                <img src={google} alt="Google Logo" /> Google Login
              </CustomButton>
            </div>
          </form>
          <p>
            {" "}
            Don't have an account?{" "}
            <Link to="/auth/register">
              <span>Create an account here</span>
            </Link>
          </p>
        </div>
      </div>
    );
  }
}
