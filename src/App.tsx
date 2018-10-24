import { createBrowserHistory } from "history";
import * as React from "react";
import { Route, Router, Switch } from "react-router";

import HomePage from "./pages/HomePage";
import withRoot from "./withRoot";

const history = createBrowserHistory();

const PageNotFound = () => <h1>Page Not Found</h1>;

export class App extends React.Component {
  public render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={true} path="*" component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default withRoot(App);
