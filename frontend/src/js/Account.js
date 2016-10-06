import React from 'react';
import EditableTextField from './EditableTextField';

export default class Account extends React.Component {
  render() {
    return (
      <div className="profile">
        <div className="user">
          <span className="name">{this.props.name}</span>
          <EditableTextField text={`@${this.props.handle}`} />
        </div>
        <img src={this.props.image} />
      </div>
    );
  }
}
