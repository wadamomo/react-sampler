import React from 'react';
import { render } from 'react-dom';

class Library extends React.Component {
  render() {
    let array = this.props.audioFiles;
    const samples = [];
    for (let i = 0; i < array.length; i++) {
        samples.push(<li key={i}>{this.props.audioFiles[i]}</li>);
    }

    return (
      <div id="library">
      <h4>Samples</h4>
        <ul>
          {samples}
        </ul>
      </div>
    )
  }
}

export default Library;