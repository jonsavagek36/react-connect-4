import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    let updateBoard = () => {
      if(this.props.board.dropPiece(this.props.y)) {
        this.props.updateBoard();
      }
    }

    let className;
    if (this.props.color == 0) {
      className = 'square';
    } else if (this.props.color == 1) {
      className = 'redsquare';
    } else if (this.props.color == 2) {
      className = 'bluesquare';
    }

    let position = {
      top: this.props.x * 40,
      left: this.props.y * 40,
    };

    return (
      <div className={className} style={position} onClick={updateBoard}>
      </div>
    );
  }

}

export default Square;
