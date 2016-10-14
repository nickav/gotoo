import React, { PropTypes } from 'react'

const Account = ({ name, handle, image, tabIndex }) => (
  <div className="profile">
    <div className="user">
      <span className="name">{ name }</span>
      <input
        className="handle"
        type="text"
        placeholder="Add a Twitter handle..."
        defaultValue={ handle }
        tabIndex={tabIndex}
      />
    </div>
    <img src={ image } />
  </div>
)

export default Account
