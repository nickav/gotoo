import React from 'react';
import { Link } from 'react-router';

export default class WelcomePage extends React.Component {
  componentDidMount() {
    fetch('/api').then((resp) => resp.json()).then((json) => {
      console.log('json', json);
      this.setState(json);
    });
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
          <Link to="/nickaversano" className="btn large">
            <i className="icon"><img src="/img/twitter.svg" /></i>
            <span>Connect with Twitter</span>
          </Link>
        </div>
      </div>
    );
  }
}
