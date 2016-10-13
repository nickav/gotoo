import React from 'react'
import { Link } from 'react-router'
import Account from './Account'

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="content">
          <div className="row">
            <Link to="/" className="logo">
              <img src="/img/logo.svg" alt="Goto"/>
            </Link>
            <Account
              name={ this.props.name }
              handle={ this.props.handle }
              image={ this.props.image }
            />
          </div>
        </nav>
      </header>
    )
  }
}
