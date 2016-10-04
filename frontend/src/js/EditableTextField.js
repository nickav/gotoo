import React from 'react';

export default class EditableTextField extends React.Component {
  render() {
    return (
      <span className="handle">{this.props.text}</span>
    );
  }
}
