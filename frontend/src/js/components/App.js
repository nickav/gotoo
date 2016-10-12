import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import WelcomePage from './WelcomePage';
import ProfilePage from './ProfilePage';

export default class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/:userId" component={ProfilePage} />
        <Route path="/" component={WelcomePage} />
      </Router>
    );
  }
}
