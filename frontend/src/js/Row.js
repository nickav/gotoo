import React from 'react';
import EditableTextField from './EditableTextField';
import Account from './Account';

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false
    };
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  onFocus() {
    this.setState({focus: true});
  }

  onBlur() {
    this.setState({focus: false});
  }

  render() {
    let className = 'row ';
    if (this.state.focus) className += 'editing';
    return (
      <a target="_blank" className="row-link">
        <li
          className={className}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        >
          <EditableTextField className="craft" text={this.props.skill} />
          <Account {...this.props} />
        </li>
      </a>
    );
  }
}

export default class RowList extends React.Component {

  render() {
    var rowList = [
      {skill: "UI Design", handle: "jhilmd", name: "JAAAAFFFFF Hilnbrand", image: "https://twitter.com/jhilmd/profile_image?size=normal"},
      {skill: "Apple Picking", handle: "jhilmd", name: "JAAAAFFFFF Hilnbrand", image: "https://twitter.com/jhilmd/profile_image?size=normal"},
      {skill: "Piano Tuning", handle: "jhilmd", name: "JAAAAFFFFF Hilnbrand", image: "https://twitter.com/jhilmd/profile_image?size=normal"},
    ];
    var rowNodes = rowList.map(function(e) {
      return (
        <Row {...e} />
      );
    });
    return (
      <section className="profile people">
        <div className="content">
          <ul>
            {rowNodes}
          </ul>
        </div>
      </section>
    );
  }
}