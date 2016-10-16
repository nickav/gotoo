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

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <div className="profile-page">
        <Header {...this.props.profile} />
        <RowList items={this.props.gotos} />
      </div>
    )
  }
}

const props = state => ({
  editable: state.user.id == state.profile.id,
  gotos: state.gotos,
  profile: state.profile,
})

export default connect(props)(ProfilePage)
