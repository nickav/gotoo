import React from 'react'
import { Link } from 'react-router'

const _randomText = () => {
  let items = [
    'Click your heels twice to go home.',
    'Have you tried turining it on and off again?',
    'Ever feel like you\'re in the wrong place?',
    "I'm sorry Dave, I'm afraid I can't do that.",
  ]
  return items[ Math.floor(Math.random() * items.length) ]
}

const ErrorPage = ({status}) => (
  <div className="welcome-page not-found">
    <div className="hero content">
        <h1 className="logo">
          <Link to="/">
            <img src="/img/logo.svg" alt="Goto" />
          </Link>
        </h1>
      <h2 className="tagline">{ status || 404 }</h2>
      <p className="subtitle">{ _randomText() }</p>
    </div>
  </div>
)

export default ErrorPage
