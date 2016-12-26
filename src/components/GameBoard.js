/** game logic class **/

class GameBoard {
  constructor() {
    this.size = 10;
    this.board = this.createBoard();
    this.empty = 0;
    this.playerOne = 1;
    this.playerTwo = 2;
    this.currentPlayer = 1;
  }

  createBoard() {
    let x, y;
    let board = [];
    for (x = 0; x < this.size; x++) {
      board[x] = [];
      for (y = 0; y < this.size; y++) {
        board[x][y] = 0;
      }
    }
    return board;
  }

  dropPiece(y) {
    if (this.board[0][y] == this.empty) {
      let x = this.findTopOfStack(y);
      this.board[x][y] = this.currentPlayer;
      if (this.playerWin(x, y)) {
        alert('Player ' + this.currentPlayer + ' wins!');
        this.resetGame();
      }
      if (this.currentPlayer == 1) {
        this.currentPlayer = 2;
      } else {
        this.currentPlayer = 1;
      }
      return true;
    } else {
      alert('Column is full, pick another!');
      return false;
    }
  }

  findTopOfStack(yPos) {
    let x;
    for (x = 9; x > 0; x--) {
      if (this.board[x][yPos] == this.empty) {
        return x;
      }
    }
  }

  checkWin(lastX, lastY, deltaX, deltaY) {
    let i;
    let y = lastY;
    let x = lastX;
    let win = true;
    main_loop:
    for (i = 0; i < 4; i++) {
      if (y < this.size && y >= 0 && x < this.size && x >= 0) {
        if (this.board[x][y] != this.currentPlayer) {
          win = false;
          break main_loop;
        }
      } else {
        win = false;
      }
      x += deltaX;
      y += deltaY;
    }
    return win;
  }

  playerWin(lastX, lastY) {
    if (this.checkWin(lastX, lastY, 1, 0) ||
        this.checkWin(lastX, lastY, 0, 1) ||
        this.checkWin(lastX, lastY, -1, 0) ||
        this.checkWin(lastX, lastY, 0, -1) ||
        this.checkWin(lastX, lastY, 1, 1) ||
        this.checkWin(lastX, lastY, -1, -1) ||
        this.checkWin(lastX, lastY, 1, -1) ||
        this.checkWin(lastX, lastY, -1, 1)) {
      return true;
    }
  }

  resetGame() {
    this.board = this.createBoard();
    this.currentPlayer = 1;
  }

}

export default GameBoard;
