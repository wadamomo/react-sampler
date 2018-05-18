import React from 'react';
import { render } from 'react-dom';

import Board from './components/board.jsx';
import VizLib from './components/vizlib.jsx';
import Settings from './components/settings.jsx';
  
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyCodes: [49, 50, 51, 52, 81, 87, 69, 82, 65, 83, 68, 70, 90, 88, 67, 86],
      keySymbols: [1, 2, 3, 4, 'q', 'w', 'e', 'r', 'a', 's', 'd', 'f', 'z', 'x', 'c', 'v'],
      audioFiles: ["808drums/0.WAV", "808drums/1.WAV", "808drums/2.WAV", "808drums/3.WAV", "808drums/4.WAV", "808drums/5.WAV", "808drums/6.WAV", "808drums/7.WAV", "808drums/8.WAV", "808drums/9.WAV", "808drums/10.WAV", "808drums/11.WAV", "808drums/12.WAV", "808drums/13.WAV", "808drums/14.WAV", "808drums/15.WAV"]
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.removeTransition = this.removeTransition.bind(this);
  }
  
  clickHandler(e) {
    let code = e.target.dataset.key || e.keyCode; //set the code to either the click target or if undefined the keyboard key
    let id = e.target.id;
    let key = document.querySelector(`div[data-key="${code}"]`); //change key codes back to click event!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let audio = document.querySelector(`audio[data-key="${code}"]`);
    if (!audio) return;
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  };
  
  removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  };
  
  render() {
    window.addEventListener('keydown', this.clickHandler);
    return (
      <div>
        <Board keyCodes={this.state.keyCodes} keySymbols={this.state.keySymbols} clickHandler={this.clickHandler} removeTransition={this.removeTransition} audioFiles={this.state.audioFiles}/>
        <VizLib audioFiles={this.state.audioFiles}/>
        <Settings />
      </div>
    )
  }
}

export default App;