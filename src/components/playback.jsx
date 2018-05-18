import React from 'react';
import { render } from 'react-dom';

class Playback extends React.Component {
  render() {
    return (
      <div id="playback">
        <button><i className="fas fa-circle"></i></button>
        <button><i className="fas fa-play"></i></button>
        <button><i className="fas fa-pause"></i></button>
        <button><i className="fas fa-stop"></i></button>
      </div>
    )
  }
}

export default Playback;