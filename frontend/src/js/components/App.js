import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import 'whatwg-fetch'

import WelcomePage from './WelcomePage'
import ProfilePage from './ProfilePage'

const App = () => (
  <Router history={browserHistory}>
    <Route path="/:userId" component={ProfilePage} />
    <Route path="/" component={WelcomePage} />
  </Router>
)

export default App
