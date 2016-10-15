import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { fetchCurrentUser } from '../actions'
import WelcomePage from './WelcomePage'
import ProfilePage from './ProfilePage'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCurrentUser())
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/:userId" component={ProfilePage} />
        <Route path="/" component={WelcomePage} />
      </Router>
    )
  }
}

export default connect()(App)
