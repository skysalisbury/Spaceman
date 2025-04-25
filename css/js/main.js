 /*----- constants -----*/
// Going to need at least one object 

  /*----- state variables -----*/
let winner;
let board;
let secretWord;
let wrongGuess;

  /*----- cached elements  -----*/
  const msgEl = document.querySelector('h1');
  const letterEls = [...document.querySelectorAll('#abc-container > button')];


  /*----- event listeners -----*/


  /*----- functions -----*/
init();

function init() {
   
    

    render();
};

function render() {

    renderMessage();


};

function renderMessage() {
    if (wrongGuess === null) {
        msgEl.innerHTML = `I can't wait to see the final frontier!`;
    } if (wrongGuess === 1) {
        msgEl.innerHTML = "What happened to my leg?";
    } if (wrongGuess === 2) {
        msgEl.innerHTML = `Oh no my other leg?!`;
    } if (wrongGuess === 3) {
        msgEl.innerHTML = `My arm!`;
    } if (wrongGuess === 4) {
        msgEl.innerHTML = `My other arm!`;
    } if (wrongGuess === 5) {
        msgEl.innerHTML = `I just wanted to go to space is this how it ends?!`;
    } if (wrongGuess === 6) {
        msgEl.innerHTML = `You lose, how could you do that to an astronaut!`;
    }
    
};







//   GAME STATE IDENTIFICATION:
// let winner; the win condition
// let board; The board is the board of letters for the word game.
// let correctBoard; The board that stores the correct letters once they are guessed/input
// 