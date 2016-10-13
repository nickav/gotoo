import React from 'react';
import { browserHistory } from 'react-router';

export default class WelcomePage extends React.Component {
  componentDidMount() {
    // make sure to pass delicious cookies
    fetch('/api/current_user', { credentials: 'include' })
      .then(resp => resp.json()).then(json => {
      // logged in, redirect to profile
      if (json.current_user) {
        browserHistory.push(json.current_user.profile_url);
      }
      this.setState(json);
    });
  }

  _buttonLink() {
    return this.state ? this.state.twitter_omniauth_url : '';
  }

  render() {
    return (
      <div className="welcome-page">
        <div className="hero content">
          <h1 className="logo">
            <img src="/img/logo.svg" alt="Goto" />
          </h1>
          <h2 className="tagline">Your go-to people for all things.</h2>
          <p className="subtitle">Reserve your page now.</p>
          <a href={ this._buttonLink() } className="btn large">
            <i className="icon"><img src="/img/twitter.svg" /></i>
            <span>Connect with Twitter</span>
          </a>
        </div>
      </div>
    );
  }
}
