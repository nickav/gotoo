import React from 'react'
import { Link } from 'react-router'
import Account from './Account'

const Header = ({name, handle, image, link}) => (
  <header>
    <nav className="content">
      <div className="row">
        <Link to={link} className="logo">
          <img src="/img/logo.svg" alt="Goto"/>
        </Link>
        <Account
          name={name}
          handle={handle}
          image={image}
        />
      </div>
    </nav>
  </header>
)

export default Header
