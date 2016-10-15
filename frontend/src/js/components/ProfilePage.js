import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { fetchGotos } from '../actions'
import ErrorPage from './ErrorPage'
import Header from './Header'
import RowList from './RowList'

class ProfilePage extends React.Component {
  componentDidMount() {
    const username = window.location.pathname.substr(1)
    this.props.dispatch(fetchGotos(username))
  }

  render() {
    if (this.props.status != 200) {
      return <ErrorPage status={this.props.status} />
    }

    return (
      <div className="profile-page">
        <Header {...this.props.profile} />
        <RowList data={this.props.gotos} />
      </div>
    )
  }
}

const propsMap = state => {
  return {
    gotos: state.gotos,
    profile: state.profile,
    status: state.profile.status || 200,
  }
}

export default connect(propsMap)(ProfilePage)
