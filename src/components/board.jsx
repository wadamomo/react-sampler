import React from 'react';
import { render } from 'react-dom';

import Button from './button.jsx';
import Playback from './playback.jsx';

class Board extends React.Component {
  render() {
    return (
      <div id="board">
        <div className="button-row">
          <Button id="0" keyCodes={this.props.keyCodes} keySymbols={this.props.keySymbols} clickHandler={this.props.clickHandler} removeTransition={this.props.removeTransition} audioFiles={this.props.audioFiles}/>
          <Button id="1" keyCodes={this.props.keyCodes} keySymbols={this.props.keySymbols} clickHandler={this.props.clickHandler} removeTransition={this.props.removeTransition} audioFiles={this.props.audioFiles}/>
          <Button id="2" keyCodes={this.props.keyCodes} keySymbols={this.props.keySymbols} clickHandler={this.props.clickHandler} removeTransition={this.props.removeTransition} audioFiles={this.props.audioFiles}/>
          <Button id="3" keyCodes={this.props.keyCodes} keySymbols={this.props.keySymbols} clickHandler={this.props.clickHandler} removeTransition={this.props.removeTransition} audioFiles={this.props.audioFiles}/>
        </div>
        <div className="button-row">
          <Button id="4" keyCodes={this.props.keyCodes} keySymbols={this.props.keySymbols} clickHandler={this.props.clickHandler} removeTransition={this.props.removeTransition} audioFiles={this.props.audioFiles}/>
          <Button id="5" keyCodes={this.props.keyCodes} keySymbols={this.props.keySymbols} clickHandler={this.props.clickHandler} removeTransition={this.props.removeTransition} audioFiles={this.props.audioFiles}/>
          <Button id="6" keyCodes={this.props.keyCodes} keySymbols={this.props.keySymbols} clickHandler={this.props.clickHandler} removeTransition={this.props.removeTransition} audioFiles={this.props.audioFiles}/>
          <Button id="7" keyCodes={this.props.keyCodes} keySymbols={this.props.keySymbols} clickHandler={this.props.clickHandler} removeTransition={this.props.removeTransition} audioFiles={this.props.audioFiles}/>
        </div>
        <div className="button-row">
          <Button id="8" keyCodes={this.props.keyCodes} keySymbols={this.props.keySymbols} clickHandler={this.props.clickHandler} removeTransition={this.props.removeTransition} audioFiles={this.props.audioFiles}/>
          <Button id="9" keyCodes={this.props.keyCodes} keySymbols={this.props.keySymbols} clickHandler={this.props.clickHandler} removeTransition={this.props.removeTransition} audioFiles={this.props.audioFiles}/>
          <Button id="10" keyCodes={this.props.keyCodes} keySymbols={this.props.keySymbols} clickHandler={this.props.clickHandler} removeTransition={this.props.removeTransition} audioFiles={this.props.audioFiles}/>
          <Button id="11" keyCodes={this.props.keyCodes} keySymbols={this.props.keySymbols} clickHandler={this.props.clickHandler} removeTransition={this.props.removeTransition} audioFiles={this.props.audioFiles}/>
        </div>
        <div className="button-row">
          <Button id="12" keyCodes={this.props.keyCodes} keySymbols={this.props.keySymbols} clickHandler={this.props.clickHandler} removeTransition={this.props.removeTransition} audioFiles={this.props.audioFiles}/>
          <Button id="13" keyCodes={this.props.keyCodes} keySymbols={this.props.keySymbols} clickHandler={this.props.clickHandler} removeTransition={this.props.removeTransition} audioFiles={this.props.audioFiles}/>
          <Button id="14" keyCodes={this.props.keyCodes} keySymbols={this.props.keySymbols} clickHandler={this.props.clickHandler} removeTransition={this.props.removeTransition} audioFiles={this.props.audioFiles}/>
          <Button id="15" keyCodes={this.props.keyCodes} keySymbols={this.props.keySymbols} clickHandler={this.props.clickHandler} removeTransition={this.props.removeTransition} audioFiles={this.props.audioFiles}/>
        </div>
        <Playback />
      </div>
    )
  }
}

export default Board;