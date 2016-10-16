import React from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

const WelcomePage = (props) => (
  <div className="welcome-page">
    <div className="hero content">
      <h1 className="logo">
        <img src="/img/logo.svg" alt="Goto" />
      </h1>
      <h2 className="tagline">Your go-to people for all things.</h2>
      <p className="subtitle">Reserve your page now.</p>
      <a href="/users/auth/twitter" className="btn large">
        <i className="icon"><img src="/img/twitter.svg" /></i>
        <span>Connect with Twitter</span>
      </a>
    </div>
  </div>
)

export default connect(state => {
  const twitter_omniauth_url = state.user.twitter_omniauth_url
  return { twitter_omniauth_url }
})(WelcomePage)
