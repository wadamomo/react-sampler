import React from 'react';
import { render } from 'react-dom';

class Settings extends React.Component {
  render() {
    return (
      <div>
        <button id="gear">Gear</button>
        <div class="modal">Settings in here</div>
      </div>
    )
  }
}

export default Settings;