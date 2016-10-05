import React from 'react';

export default class EditableTextField extends React.Component {
  render() {
    let className = this.props.className || "handle";
    return (
      <span className={className}>{this.props.text}</span>
    );
  }
}
