import React, {Component} from 'react';
import './Game.css';
import Board from './Board';
import findAllSolutions from'./boggle_solver';
import valid_words from './wordlist';
import Score from './Score';
import Timer from './Timer';



// Returns a random 5x5 board, using the official letter distribution.
function RandomGrid() {
  // prettier-ignore
  const dice = ["AAAFRS", "AAEEEE", "AAFIRS", "ADENNN", "AEEEEM",
                "AEEGMU", "AEGMNN", "AFIRSY", "BJKQXZ", "CCNSTW",
                "CEIILT", "CEILPT", "CEIPST", "DHHNOT", "DHHLOR",
                "DHLNOR", "DDLNOR", "EIIITT", "EMOTTT", "ENSSSU",
                "FIPRSY", "GORRVW", "HIPRRY", "NOOTUW", "OOOTTU"];
  let chars = dice.map(cube => cube[Math.floor(Math.random() * cube.length)]);
  chars.sort(() => Math.random() - 0.5); // Shuffle the letters.

  const SIZE = 5;
  let grid = [];
  for (let row = 0; row < SIZE; row++) {
    grid[row] = [];
    for (let col = 0; col < SIZE; ++col) {
      grid[row][col] = chars[SIZE * row + col];
      if (grid[row][col] === "Q") grid[row][col] = "Qu";
    }
  }
  return grid;
}

 class Game extends Component {
    constructor(props) {
      super(props);
      const rand_grid = RandomGrid()
      // const solutions = new Set(['rahmana','testing','cake'])
      const solutions = new Set(findAllSolutions(rand_grid, valid_words['words']))
      // alert(solutions.size);

    //initializing the game state
    this.state = {
      justguessed: null,
      grid: rand_grid,
      guess: '',
      correctGuesses: [],
      guesses: [],
      allSolutions: solutions,
      score: 0,
      scoredWords:[],
      isFinished:false,
      seconds: 60,
    };
  // timer in game
    setTimeout(this.finishGame, this.state.seconds*1000)
  }
  
  changeGuess = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }
  submitGuess = (e) => {
    e.preventDefault();
    const score = this.state.score
    const justguessed = this.state.justguessed
    const guess = this.state.guess
    const guesses = this.state.guesses
    const correctGuesses = this.state.correctGuesses
    const allSolutions = this.state.allSolutions
    if (guesses.includes(guess)) {
      this.setState({justguessed:"Already tried that word!"})
    }
    else if (allSolutions.has(guess)) {
      this.setState({correctGuesses:[...correctGuesses, guess]})
      this.setState({score:score + 1})
      this.setState({justguessed:"That's Correct!"})
    }
    else {
      this.setState({justguessed:"Try Again!"})
    }

    this.setState({guesses:[...guesses, guess]})
    this.setState({guess: ''})
  }
  finishGame = () => {
    const allSolutions = this.state.allSolutions
    const correctGuesses = this.state.correctGuesses
    var scoredWords = []
    for (var word of allSolutions) {
      if (correctGuesses.includes(word)) {
        scoredWords.push({correct:true, text:word})
      } else {
        scoredWords.push({correct:false, text:word})
      }
    }
    this.setState({scoredWords:scoredWords})
    this.setState({isFinished:true})
  }
  render() {
    const correctGuesses = this.state.correctGuesses.map((item, key)=>
      <span>{item}<br /></span>
    );
    const isFinished = this.state.isFinished;
    const scoredWords = this.state.scoredWords;
    const justguessed = this.state.justguessed;

    return (
      <div className = "Game">
        <div>
          <Timer seconds={this.state.seconds} />
          <Board board={this.state.grid}/>
          <button onClick={this.finishGame}>Stop</button>
        </div>

        <div>
        <form autocomplete="off">
          <input
            name='guess'
            value={this.state.guess}
            onChange={(e) => this.changeGuess(e)} />
          <button onClick={(e) => this.submitGuess(e)}>Guess</button>
        </form>
        {isFinished ? <Score words={scoredWords} /> : justguessed}
        </div>
      </div>
    )
  }
}

export default Game;