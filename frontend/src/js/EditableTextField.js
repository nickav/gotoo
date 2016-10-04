import React from 'react';

export default class EditableTextField extends React.Component {
  render() {
    return (
      <div>{this.props.text}</div>
    );
  }
}
