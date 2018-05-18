import React from 'react';
import { render } from 'react-dom';

import Button from './button.jsx';
import Playback from './playback.jsx';

class Board extends React.Component {
  render() {
    return (
      <div id="board">
        <div className="button-row">
          <Button letter="1" />
          <Button letter="2" />
          <Button letter="3" />
          <Button letter="4" />
        </div>
        <div className="button-row">
          <Button letter="q" />
          <Button letter="w" />
          <Button letter="e" />
          <Button letter="r" />
        </div>
        <div className="button-row">
          <Button letter="a" />
          <Button letter="s" />
          <Button letter="d" />
          <Button letter="f" />
        </div>
        <div className="button-row">
          <Button letter="z" />
          <Button letter="x" />
          <Button letter="c" />
          <Button letter="v" />
        </div>
        <Playback />
      </div>
    )
  }
}

export default Board;