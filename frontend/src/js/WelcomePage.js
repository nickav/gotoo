import React from 'react';

export default class WelcomePage extends React.Component {
  render() {
    return (
      <div className="welcome">
        <div className="hero content">
          <h1 className="logo">
            <img src="/img/logo.svg" alt="Goto" />
          </h1>
          <h2 className="tagline">Your go-to people for all things.</h2>
          <p className="subtitle">Reserve your page now.</p>
          <a href="#" className="btn large">
            <i className="icon"><img src="/img/twitter.svg" /></i>
            <span>Connect with Twitter</span>
          </a>
        </div>
      </div>
    );
  }
}
