import React, { PropTypes } from 'react'

const Account = ({ name, handle, image }) => (
  <div className="profile">
    <div className="user">
      <span className="name">{name}</span>
      <span className="handle">{handle}</span>
    </div>
    <img src={image} />
  </div>
)

export default Account
