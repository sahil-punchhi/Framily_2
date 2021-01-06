import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
import Dashboard from './pages/Dashboard/Dashboard';
import { UserRoute } from './PrivateRoute';

import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <div className="app__main__container">
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/feed" component={Feed} />
            <UserRoute exact path="/dashboard" component={Dashboard} />
          </div>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
