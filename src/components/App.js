import React, { Component } from 'react';
import Board from './Board';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: this.props.board
    };
  }

  updateBoard() {
    this.setState({ board: this.props.board });
  }

  render() {
    return (
      <div>
        <h5>Player {this.state.board.currentPlayer}</h5>
        <Board
          board={this.state.board}
          updateBoard={this.updateBoard.bind(this)}
            />
      </div>
    );
  }

};

export default App;
