import React from 'react';

export default class EditableTextField extends React.Component {
  static defaultProps = {
    className: "handle",
  }

  constructor(props) {
    super(props);
    this.state = {
      locked: true,
      value: this.props.text,
    };
    this.onFocus = this.onFocus.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onFocus() {
  }

  onChange(event) {
    if (!this.props.locked) {
      this.setState({value: event.target.value});
    }
  }

  render() {
    return (
      <input className={this.props.className}
        type="text"
        placeholder="Add a Twitter handle..."
        onFocus={this.onFocus}
        onFocus={this.onFocus}
        onChange={this.onChange}
        value={this.state.value}
      />
    );
  }
}
