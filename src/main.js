import './main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GameBoard from './components/GameBoard';
import Board from './components/Board';
import Square from './components/Square';

let board = new GameBoard;

ReactDOM.render(
  <App
    board={board}
      />,
  document.getElementById('app')
);
