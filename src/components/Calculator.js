/* eslint-disable */
import { Component } from 'react';
import calculate from '../logic/calculate'

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null
    };
    this.calculateHandler = this.calculateHandler.bind(this);
  }

  calculateHandler (event) {
    
    this.setState((state) => (calculate(state, event.target.innerHTML)));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="grid-container">
      
        <div className="result-field" text="0" >
        { total }
        { operation }
        { next }
        </div>

        <button className="cell" onClick={this.calculateHandler}>AC</button>
        <button className="cell" onClick={this.calculateHandler}>+/-</button>
        <button className="cell" onClick={this.calculateHandler}>%</button>
        <button className="main-operation" onClick={this.calculateHandler}>÷</button>
        <button className="cell" onClick={this.calculateHandler}>7</button>
        <button className="cell" onClick={this.calculateHandler}>8</button>
        <button className="cell" onClick={this.calculateHandler}>9</button>
        <button className="main-operation" onClick={this.calculateHandler}>X</button>
        <button className="cell" onClick={this.calculateHandler}>4</button>
        <button className="cell" onClick={this.calculateHandler}>5</button>
        <button className="cell" onClick={this.calculateHandler}>6</button>
        <button className="main-operation" onClick={this.calculateHandler}>-</button>
        <button className="cell" onClick={this.calculateHandler}>1</button>
        <button className="cell" onClick={this.calculateHandler}>2</button>
        <button className="cell" onClick={this.calculateHandler}>3</button>
        <button className="main-operation" onClick={this.calculateHandler}>+</button>
        <button className="zero" onClick={this.calculateHandler}>0</button>
        <button className="cell" onClick={this.calculateHandler}>.</button>
        <button className="main-operation" onClick={this.calculateHandler}>=</button>
      
      </div>
    );
  }
}

export default Calculator;
