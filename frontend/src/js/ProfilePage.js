import React from 'react';
import RowList from './Row';
import Account from './Account';

export default class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <div className="content">
              <div className="row">
                <a href="#" className="logo"><img src="" alt="Logo"/></a>
                <Account />
              </div>
            </div>
          </nav>
        </header>
        <RowList />
      </div>
    );
  }
}
