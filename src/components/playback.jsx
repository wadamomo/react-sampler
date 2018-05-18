import React from 'react';
import { render } from 'react-dom';

class Playback extends React.Component {
  render() {
    return (
      <div>
        <button>Record</button>
        <button>Play/Pause</button>
        <button>Stop</button>
      </div>
    )
  }
}

export default Playback;