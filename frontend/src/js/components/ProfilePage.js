import React from 'react';
import RowList from './Row';
import Account from './Account';

export default class ProfilePage extends React.Component {
  render() {
    return (
      <div className="profile-page">
        <header>
          <nav className="content">
            <div className="row">
              <a href="#" className="logo">
                <img src="/img/logo.svg" alt="Logo"/>
              </a>
              <Account name="Jeff Hilnbrand" handle="jhilmd" image="https://twitter.com/jhilmd/profile_image?size=normal" />
            </div>
          </nav>
        </header>

        <RowList />

      </div>
    );
  }
}
