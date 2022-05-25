/* eslint-disable */
import { Component } from 'react';
import Cell from './Cell';

class Calculator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="grid-container">
        <Cell className="result-field" text="0" />
        <Cell text="AC" />
        <Cell text="+/-" />
        <Cell text="%" />
        <Cell className="main-operation" text="÷" />
        <Cell text="7" />
        <Cell text="8" />
        <Cell text="9" />
        <Cell className="main-operation" text="X" />
        <Cell text="4" />
        <Cell text="5" />
        <Cell text="6" />
        <Cell className="main-operation" text="-" />
        <Cell text="1" />
        <Cell text="2" />
        <Cell text="3" />
        <Cell className="main-operation" text="+" />
        <Cell className="zero" text="0" />
        <Cell text="." />
        <Cell className="main-operation" text="=" />
      </div>
    );
  }
}

export default Calculator;
