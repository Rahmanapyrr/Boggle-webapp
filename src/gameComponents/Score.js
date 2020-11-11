import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import './Score.css';

class Score extends Component {
  render() {
    const words = this.props.words;
    const total = words.length;
    const num_correct = words.filter(x=>x.correct).length

    const Modal = () => (
      <Popup trigger={<button className="button"> Open Modal </button>} modal>
        <span> Modal content </span>
      </Popup>
    )

    return (
      <div class="wordlist">
        
        <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Modal Title </div>
        <div className="content">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Trigger </button>}
            position="top center"
            nested
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
            </span>
          </Popup>

          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>
      You found {num_correct} words out of {total}!
      {/* {words.map((word, i) => {
        return <div class={word.correct?"correct":"incorrect"}>{word.text}</div>
      })} */}
      </div>
    );
  }
}

export default Score;