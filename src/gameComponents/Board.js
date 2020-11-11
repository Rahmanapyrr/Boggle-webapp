import React, { Component } from 'react';
import './Board.css';

class Board extends Component {
  render() {
    const board = this.props.board;
    // const color_ = this.props.color;
    return (
      <div class="board">
      <table>
      {board.map((row, i) => {
        return (
          <tr>
          {row.map((elem, j)=>{
            return <td key={i}>{elem}</td>
          })}
          </tr>)})}
      </table>
      </div>
    );
  }
}

export default Board;