import React from 'react'

export default class Account extends React.Component {
  render() {
    return (
      <div className="profile">
        <div className="user">
          <span className="name">{this.props.name}</span>
          <input
            className="handle"
            type="text"
            placeholder="Add a Twitter handle..."
            defaultValue={this.props.text}
            tabIndex={this.props.tabindex}
          />
        </div>
        <img src={this.props.image} />
      </div>
    )
  }
}
