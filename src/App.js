import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";

import Sales from './pages/Sales/Sales';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import SiteNavBar from './parts/SiteNavBar/SiteNavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <SiteNavBar>
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/sales" component={Sales} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Redirect from="/" to="login" />
          </Switch>
        </SiteNavBar>
      </Router>
    );
  }
}

export default App;
