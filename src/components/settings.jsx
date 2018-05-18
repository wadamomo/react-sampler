import React from 'react';
import { render } from 'react-dom';

class Settings extends React.Component {
  render() {
    return (
      <div>
        <button id="gear">Gear</button>
        <div className="modal">Settings in here</div>
      </div>
    )
  }
}

export default Settings;