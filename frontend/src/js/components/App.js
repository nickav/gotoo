import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { fetchCurrentUser } from '../actions'

import WelcomePage from './WelcomePage'
import ProfilePage from './ProfilePage'
import ErrorPage from './ErrorPage'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCurrentUser())
  }

  render() {
    if (this.props.status != 200) {
      return <ErrorPage status={this.props.status} />
    }

    return (
      <Router history={browserHistory}>
        <Route path="/:userId" component={ProfilePage} />
        <Route path="/" component={WelcomePage} />
      </Router>
    )
  }
}

const props = state => ({
  status: state.profile.status || 200,
})

export default connect(props)(App)
