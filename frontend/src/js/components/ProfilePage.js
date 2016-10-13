import React from 'react'
import { Link } from 'react-router'
import ErrorPage from './ErrorPage'
import Header from './Header'
import RowList from './RowList'

export default class ProfilePage extends React.Component {
  state = {}

  componentDidMount() {
    // make sure to pass delicious cookies
    fetch(`/api${window.location.pathname}`, { credentials: 'include' })
      .then(resp => resp.json()).then(json => {
        this.setState(json)
    })
  }

  render() {
    if (this.state.status && this.state.status != 200) {
      return <ErrorPage status={this.state.status} />
    }

    return (
      <div className="profile-page">
        <Header {...this.state} />
        <RowList data={ (this.state || {}).gotos } />
      </div>
    )
  }
}
