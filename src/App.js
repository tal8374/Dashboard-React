import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";

import Sales from './pages/Sales/Sales';
import Sellers from './pages/Sellers/Sellers';
import Customers from './pages/Customers/Customers';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import SiteNavBar from './parts/SiteNavBar/SiteNavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <SiteNavBar/>
        <Switch>
          <Route path="/sales" component={Sales} />
          <Route path="/sellers" component={Sellers} />
          <Route path="/customers" component={Customers} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect from="/" to="login" />
        </Switch>
      </Router>
    );
  }
}

export default App;
