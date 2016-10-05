import React from 'react';
import EditableTextField from './EditableTextField';
import Account from './Account';

class Row extends React.Component {
  render() {
    return (
      <a href="http://twitter.com/jhilmd" target="_blank" className="row-link">
        <li className="row">
          <EditableTextField className="craft" text="UI Design" />
          <Account />
        </li>
      </a>
    );
  }
}

export default class RowList extends React.Component {

  render() {
    var rowList = [1,2,3];
    var rowNodes = rowList.map(function(e) {
      return (
        <Row/>
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