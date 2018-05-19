import React from 'react';
import { render } from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <div data-key={this.props.keyCodes[this.props.id]} onClick={this.props.clickHandler} id={this.props.id} className="button">
         <kbd className="character">{this.props.keySymbols[this.props.id]}</kbd>
         <audio data-key={this.props.keyCodes[this.props.id]} src={this.props.audioFiles[this.props.id].source}></audio>
      </div>
    )
  }
}

export default Button;