import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './reducer';
import { Header, Welcome } from '../../components/index';
import LoginForm from '../../components/LoginForm/Login';
import { Box } from 'grommet';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.handleChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: '',
      password: '',
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let { email, password } = this.state;
    let { isLoginPending, isLoginSuccess, loginError } = this.props;
    return (
      <Box
        flex
        style={{ maxWidth: '100%' }}
        background={{ image: 'url(../beach.jpg)' }}
      >
        <Header />
        <Box fill align="center" flex="grow" justify="center">
          {isLoginSuccess ? (
            <Welcome />
          ) : (
            <LoginForm
              email={email}
              password={password}
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              isLoginPending={isLoginPending}
              loginError={loginError}
            ></LoginForm>
          )}
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
