import React from 'react';
import { render } from 'react-dom';

class Button extends React.Component {
  constructor(props) {
  super(props);
  }
  render() {
    return (
      <button><span className="character">{this.props.letter}</span></button>
    )
  }
}

export default Button;