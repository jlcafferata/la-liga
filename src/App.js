import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Dashboard } from "./components/router";
import { isValidToken } from "./helpers/auth-header";
import AppLayout from "./layout/AppLayout";
import Login from "./views/login";

const AuthRoute = ({ component: Component, ...rest }) => {
  const isAuthUser = isValidToken();
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthUser ? (
          <Component {...props} />
        ) : (
          <Login
          />
        )
      }
    />
  );
};

const App = () => {
  return (
    <>
      <AppLayout>
        <Router>
          <Switch>
            <AuthRoute path="/users" component={Dashboard} />
            <AuthRoute path="/" component={Dashboard} />
            <Route path="/error" component={Dashboard} />
            <Redirect to="/error" />
          </Switch>
        </Router>
      </AppLayout>
    </>
  );
};

export default App;
