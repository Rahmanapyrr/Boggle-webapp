import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './Score.css';

class Score extends Component {
  render() {
    const words = this.props.words;
    const total = words.length;
    const num_correct = words.filter(x=>x.correct).length
    return (
      <div class="wordlist">
      You found {num_correct} words out of {total}!
      {/* {words.map((word, i) => {
        return <div class={word.correct?"correct":"incorrect"}>{word.text}</div>
      })} */}
      </div>
    );
  }
}

export default Score;