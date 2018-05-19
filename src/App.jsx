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
      audioFiles: [
        {
          name: "clap",
          source: "samples/ clap.WAV"
        },
        {
          name: "closed-hat",
          source: "samples/ closed-hat.WAV"
        },
        {
          name: "cowbell",
          source: "samples/ cowbell.WAV"
        },
        {
          name: "cymbal",
          source: "samples/ cymbal.WAV"
        },
        {
          name: "high tom",
          source: "samples/ high tom.WAV"
        },
        {
          name: "kick drum",
          source: "samples/ kick drum.WAV"
        },
        {
          name: "mid tom",
          source: "samples/ mid tom.WAV"
        },
        {
          name: "open-hat",
          source: "samples/ open-hat.WAV"
        },
        {
          name: "snare",
          source: "samples/ snare.WAV"
        },
        {
          name: "808 loop",
          source: "samples/808 loop.WAV"
        },
        {
          name: "bass stab",
          source: "samples/bass stab.WAV"
        },
        {
          name: "blip",
          source:"samples/blip.WAV"
        },
        {
          name: "bongo",
          source:"samples/bongo.WAV"
        },
        {
          name: "haht",
          source:"samples/haht.WAV"
        },
        {
          name: "house loop",
          source: "samples/house loop.WAV"
        },
        {
          name: "nomsayn",
          source: "samples/nomsayn.WAV"
        },
        ],
      mapText: '',
      mapMode: false,
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.removeTransition = this.removeTransition.bind(this);
    this.addSample = this.addSample.bind(this);
    this.mapSample = this.mapSample.bind(this);
  }

  mapSample(e) {
    this.state.mapText = e.target.dataset.source;
    this.state.mapMode = true;
    let buttons = document.getElementsByClassName('button');
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.background = "linear-gradient(to top, rgb(149, 104, 255), rgb(132, 0, 255))";
    }
  }
  
  clickHandler(e) {
    let code = e.target.dataset.key || e.keyCode; //set the code to either the click target or if undefined the keyboard key
    let id = e.target.id;
    let key = document.querySelector(`div[data-key="${code}"]`);
    let audio = document.querySelector(`audio[data-key="${code}"]`);
    console.log(code, id, key, audio)
    if (this.state.mapMode) {
      audio.src = this.state.mapText;
      let buttons = document.getElementsByClassName('button');
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.background = "linear-gradient(to top, rgb(255, 253, 131), rgb(255, 230, 0))";
      }
    }
    else {
      if (!audio) return;
      if (e.keyCode) {
        key.style.background = "rgba(255, 165, 0, 1)";
        setTimeout(() => {
          key.style.background = "linear-gradient(to top, rgb(255, 253, 131), rgb(255, 230, 0))";
        }, 100);
      }
      key.classList.add("playing");
      audio.currentTime = 0;
      audio.play();
    }
    this.state.mapMode = false;
  };

  addSample(e) {
    let samples = [].concat(this.state.audioFiles);
    for (let i = 0; i < e.target.files.length; i++) {
      let sampleURL = window.URL.createObjectURL(e.target.files[i]);
      samples.push({name: e.target.files[i].name.replace(/(^samples\/)|(\..+$)/g,''), source: sampleURL});
      this.setState({audioFiles: samples});
    }
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
        <VizLib audioFiles={this.state.audioFiles} addSample={this.addSample} mapSample={this.mapSample}/>
        <Settings />
      </div>
    )
  }
}

export default App;