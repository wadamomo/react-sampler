import React from 'react';
import { render } from 'react-dom';

import Button from './button.jsx';
import Playback from './playback.jsx';

class Board extends React.Component {
  render() {
    return (
      <div>
        <Button /> //x 16
        <Playback />
      </div>
    )
  }
}

export default Board;