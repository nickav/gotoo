import React from 'react';
import EditableTextField from './EditableTextField';

export default class Account extends React.Component {
  render() {
    var handle = "jhilmd";
    return (
      <div className="profile">
        <div className="user">
          <span className="name">Jeff Hilnbrand</span>
          <EditableTextField text={`@${handle}`} />
        </div>
        <img src={`https://twitter.com/${handle}/profile_image?size=normal`} />
      </div>
    );
  }
}
