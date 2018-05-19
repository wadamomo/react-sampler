import React from 'react';
import { render } from 'react-dom';

class Library extends React.Component {

  render() {
    let array = this.props.audioFiles;
    const samples = [];
    for (let i = 0; i < array.length; i++) {
        samples.push(<div key={i} data-source={array[i].source} className="sample" onClick={this.props.mapSample}>{array[i].name}</div>);
    }

    return (
      <div id="library">
      <h4>Samples</h4>
          {samples}
        <form>
          <input type="file" onChange={this.props.addSample}/>
        </form>
      </div>
    )
  }
}

export default Library;