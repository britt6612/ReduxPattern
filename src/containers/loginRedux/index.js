import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "./reducer";
import Header from "../../components/Header";
import Spinner from "../../components/Spinner";
import {
  Box,
  Form,
  TextInput,
  Heading,
  Text,
  Button,
  FormField,
  Paragraph
} from "grommet";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: "",
      password: ""
    });
  }

  render() {
    let { email, password } = this.state;
    let { isLoginPending, isLoginSuccess, loginError } = this.props;
    return (
      <Box
        flex
        style={{ maxWidth: "100%" }}
        background={{ image: "url(../beach.jpg)" }}
      >
        <Header />
        <Box fill align="center" flex="grow" justify="center">
          <Box alignSelf="center" justify="center" width="large">
            {!isLoginSuccess && (
              <Form align="start" name="loginForm" onSubmit={this.onSubmit}>
                <Box
                  flex
                  pad="small"
                  background={{ color: "light-1", opacity: "0.9" }}
                  gap="medium"
                  round="small"
                >
                  <FormField
                    margin="none"
                    label={<Text size="large">Email</Text>}
                  >
                    <TextInput
                      type="email"
                      name="email"
                      onChange={e => this.setState({ email: e.target.value })}
                      value={email}
                    />
                  </FormField>
                  <FormField
                    margin="none"
                    label={<Text size="large">Password</Text>}
                  >
                    <TextInput
                      onChange={e =>
                        this.setState({ password: e.target.value })
                      }
                      type="password"
                      value={password}
                    />
                  </FormField>
                </Box>
                <Box margin={{ top: "medium" }}>
                  <Button primary color="#01a982" type="submit" label="Login" />
                </Box>
                <Box>
                  {isLoginPending && (
                    <Box direction="row" gap="xsmall" margin={{ top: "small" }}>
                      <Spinner />
                      <Text weight="bold" size="medium" color="white" /> Please
                      wait...{" "}
                    </Box>
                  )}
                  {loginError && (
                    <Text
                      weight="bold"
                      margin="small"
                      size="medium"
                      color="status-error"
                    >
                      {loginError.message}
                    </Text>
                  )}
                </Box>
              </Form>
            )}
            {isLoginSuccess && (
              <Box flex fill>
                <Box
                  background={{ color: "light-1", opacity: "0.9" }}
                  round="small"
                  align="center"
                >
                  <Box>
                    <Heading
                      level={2}
                      size="xlarge"
                      align="center"
                      margin="none"
                    >
                      Welcome
                    </Heading>
                    <Text>What is Lorem Ipsum?</Text>
                    <Paragraph>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not
                    </Paragraph>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoginPending: state.isLoginPending,
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
