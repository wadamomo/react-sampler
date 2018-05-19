import React from 'react';
import { render } from 'react-dom';

import Library from './library.jsx';
import Visualizer from './visualizer.jsx';

class VizLib extends React.Component {
  render() {
    return (
      <div id='vizlib'>
        <Library audioFiles={this.props.audioFiles}/>
        <Visualizer />
      </div>
    )
  }
}

export default VizLib;