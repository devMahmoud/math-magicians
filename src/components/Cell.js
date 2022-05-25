/* eslint-disable */
import { Component } from 'react';

class Cell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className}>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

Cell.defaultProps = {
  className: 'cell',
};

export default Cell;
