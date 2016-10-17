import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { fetchGotos } from '../actions'

import Header from './Header'
import GotoList from './GotoList'

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
        <GotoList items={this.props.gotos} />
        <GotoList items={[{id: -1, skill: '', nickname: '', name: '', image: ''}]} />
      </div>
    )
  }
}

const props = state => ({
  gotos: state.gotos,
  profile: state.profile,
})

export default connect(props)(ProfilePage)
