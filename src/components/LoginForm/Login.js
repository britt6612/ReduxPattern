import React from 'react';
import Spinner from '../Spinner/spinner';
import { Box, Button, Form, FormField, Text, TextInput } from 'grommet';

export const Login = ({
  email,
  password,
  onSubmit,
  onChange,
  isLoginPending,
  loginError,
}) => (
  <Box alignSelf="center" justify="center" width="large">
    <Form align="start" name="loginForm" onSubmit={onSubmit}>
      <Box
        flex
        pad="small"
        background={{ color: 'light-1', opacity: '0.9' }}
        gap="medium"
        round="small"
      >
        <FormField margin="none" label={<Text size="large">Email</Text>}>
          <TextInput
            type="email"
            name="email"
            onChange={onChange}
            value={email}
          />
        </FormField>
        <FormField margin="none" label={<Text size="large">Password</Text>}>
          <TextInput
            type="password"
            name="password"
            onChange={password}
            value={password}
          />
        </FormField>
      </Box>
      <Box margin={{ top: 'medium' }}>
        <Button primary color="#01a982" type="submit" label="Login" />
      </Box>
      <Box>
        {isLoginPending && (
          <Box direction="row" gap="xsmall" margin={{ top: 'small' }}>
            <Spinner />
            <Text weight="bold" size="medium" color="white" /> Please wait...{' '}
          </Box>
        )}
        {loginError && (
          <Text weight="bold" margin="small" size="medium" color="status-error">
            {loginError.message}
          </Text>
        )}
      </Box>
    </Form>
  </Box>
);

export default Login;
