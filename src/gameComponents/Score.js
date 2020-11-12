import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './Score.css';


class Score extends Component {
  render() {
    const words = this.props.words;
    const total = words.length;
    var correct_words = words.filter(x=>x.correct)
    const num_correct = correct_words.length
    const words_missed = words.filter(x=>!x.correct);
    
    const stringCorrect = <h2>You found these words: </h2>;
    if (correct_words.length === 0){
      correct_words = [{correct:true, text:"None"}]
    }
    return (
      <div>

        <Popup
    trigger={<button className="button"> Click Here to See What Words You Missed </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Score Details </div>
        <div className="content">
          <div>
            <h>{stringCorrect}</h>
          </div>
          <div>
            {correct_words.map((word) => <h>{word.text}</h>)}
          </div>
          <div>
            <h2>Oopsie, Looks like you missed these words:</h2> 
          </div>
          {words_missed.map((word) => <h>{word.text},  </h>)}
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >Close 
          </button>
        </div>
      </div>
    )}

  </Popup>
      You found {num_correct} words out of {total}!
      </div>
    );
  }
}

export default Score;