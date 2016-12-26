import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let x, y;
    let squares = [];
    for (x = 0; x < this.props.board.size; x++) {
      for (y = 0; y < this.props.board.size; y++) {
        let key = x + ',' + y;
        squares.push(
          <Square
            board={this.props.board}
            color={this.props.board.board[x][y]}
            x={x}
            y={y}
            updateBoard={this.props.updateBoard}
            key={key}
              />
        );
      }
    }
    return (
      <div className='board'>
        {squares}
      </div>
    );
  }

}

export default Board;
