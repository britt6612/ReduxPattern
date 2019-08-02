import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Box, Paragraph } from "grommet";
import { grommet } from "grommet/themes";
import loginRedux from "../loginRedux/index";
import { StyledApp } from "./styles";

export const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <StyledApp theme={grommet}>
        <Box fill flex>
          <Router history={history}>
            <Switch>
              <Route path="/" component={loginRedux} />
              <Route
                render={() => (
                  <Paragraph textAlign="center" size="large">
                    Page not found.
                  </Paragraph>
                )}
              />
            </Switch>
          </Router>
        </Box>
      </StyledApp>
    );
  }
}

export default App;
