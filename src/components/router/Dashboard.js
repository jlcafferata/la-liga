import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import ViewError from "../../views/error";
import Users from "../../views/users";

const Dashboard = () => (
  <>
    <Switch>
      <Route path="/users" render={(props) => <Users {...props} />} />
      <Route path="/" exact render={(props) => <Users {...props} />} />
      <Route path="/error" exact render={(props) => <ViewError {...props} />} />
      <Redirect to="/error" />
    </Switch>
  </>
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default withRouter(connect(mapStateToProps)(Dashboard));
