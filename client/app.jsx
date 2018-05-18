import React from 'react';
import { render } from 'react-dom';

import Board from './components/board.jsx';
import VizLib from './components/vizlib.jsx';
import Settings from './components/settings.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Board />
        <VizLib />
        <Settings />
      </div>
    )
  }
}