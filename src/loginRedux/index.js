/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Box } from "grommet";
import { login } from "./reducer";
import { Header, Welcome } from "../components";
import LoginForm from "../components/LoginForm/Login";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {
        loginForm: '',
      },
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { errors, email, password } = this.state;
    const trimmedEmail = email.trim();
    if (trimmedEmail.length === 0) {
      errors.loginForm = 'Cannot be blank.';
      this.setState({ error: errors });
      return;
    }
    if (!this.handleEmailValidation(trimmedEmail)) {
      errors.loginForm = 'Must be a valid email';
      this.setState({ error: errors });
      return;
    }
    this.props.login(email, password);
    this.setState({
      email: "",
      password: ""
    });
  }

  handleEmailValidation(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
    return re.test(email);
  }

  handleChange(e) {
    this.setState({ errors: { loginForm: '' }, [e.target.name]: e.target.value });
  }

  render() {
    const { email, password, errors } = this.state;
    const { isLoading, isLoginSuccess, loginError } = this.props;
    return (
      <Box
        flex
        style={{ maxWidth: "100%" }}
        background={{ image: "url(../beach.jpg)" }}
      >
        <Header />
        <Box fill align="center" flex="grow" justify="center">
          {isLoginSuccess ? (
            <Welcome />
          ) : (
            <LoginForm
              errors={errors.loginForm}
              email={email}
              password={password}
              onSubmit={this.onSubmit}
              onChange={this.handleChange}
              isLoading={isLoading}
              loginError={loginError}
             />
          )}
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
