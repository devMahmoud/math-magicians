/* eslint-disable */
import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = (props) => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const calculateHandler = (event) => {
    setState(calculate(state, event.target.innerHTML));
  };
  
  return (
    <div className="calc-container">
      <h3 className="calc-title">Let's do some math!</h3>
      <div className="grid-container">

      <div className="result-field" text="0">
        { state.total }
        { state.operation }
        { state.next }
      </div>

      <button className="cell" onClick={calculateHandler}>AC</button>
      <button className="cell" onClick={calculateHandler}>+/-</button>
      <button className="cell" onClick={calculateHandler}>%</button>
      <button className="main-operation" onClick={calculateHandler}>÷</button>
      <button className="cell" onClick={calculateHandler}>7</button>
      <button className="cell" onClick={calculateHandler}>8</button>
      <button className="cell" onClick={calculateHandler}>9</button>
      <button className="main-operation" onClick={calculateHandler}>x</button>
      <button className="cell" onClick={calculateHandler}>4</button>
      <button className="cell" onClick={calculateHandler}>5</button>
      <button className="cell" onClick={calculateHandler}>6</button>
      <button className="main-operation" onClick={calculateHandler}>-</button>
      <button className="cell" onClick={calculateHandler}>1</button>
      <button className="cell" onClick={calculateHandler}>2</button>
      <button className="cell" onClick={calculateHandler}>3</button>
      <button className="main-operation" onClick={calculateHandler}>+</button>
      <button className="zero" onClick={calculateHandler}>0</button>
      <button className="cell" onClick={calculateHandler}>.</button>
      <button className="main-operation" onClick={calculateHandler}>=</button>

      </div>
    </div>
  );
};

export default Calculator;
