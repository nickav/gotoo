import React from 'react';
import EditableTextField from './EditableTextField';

export default class Account extends React.Component {
  render() {
    return (
      <div className="profile">
        <div className="user">
          <span className="name">Jeff Hilnbrand</span>
          <EditableTextField text="@jhilmd" />
        </div>
        <img src="https://pbs.twimg.com/profile_images/716751511229870080/6hj0gDAM_400x400.jpg" />
      </div>
    );
  }
}
