import React from 'react';
import { render } from 'react-dom';

class Library extends React.Component {

  render() {
    let array = this.props.audioFiles;
    const samples = [];
    for (let i = 0; i < array.length; i++) {
        samples.push(<div key={i} data-source={array[i].source} className={i % 2 === 0 ? 'grey' : 'blue'} onClick={this.props.mapSample}>{array[i].name.replace(/(^samples\/)|(\..+$)/g,'')}</div>);
    }

    return (
      
      <div id="library">
      <h4>Samples</h4>
        <div id="samples">
            {samples}
        </div>
        <form>
          <input type="file" onChange={this.props.addSample} multiple/>
        </form>
      </div>
    )
  }
}

export default Library;