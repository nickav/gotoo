import React from 'react'
import { Link } from 'react-router'

export default class ErrorPage extends React.Component {
  _randomText() {
    let items = [
      'Click your heels twice to go home.',
      'Have you tried turining it on and off again?',
      'Ever feel like you\'re in the wrong place?',
    ]
    return items[ Math.floor(Math.random() * items.length) ]
  }

  render() {
    return (
      <div className="welcome-page not-found">
        <div className="hero content">
            <h1 className="logo">
              <Link to="/">
                <img src="/img/logo.svg" alt="Goto" />
              </Link>
            </h1>
          <h2 className="tagline">{ this.props.status || 404 }</h2>
          <p className="subtitle">{ this._randomText() }</p>
        </div>
      </div>
    )
  }
}
