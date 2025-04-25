 /*----- constants -----*/
// Going to need at least one object or will I? 
const U_FAILED = 6;
const CATEGORIES = {
    JavaScript: ['EVENTS', 'VARIABLES', 'OBJECTS', 'FUNCTIONS'],
    CSS: ['FLEXBOX', 'MARGINS', 'BORDERS', 'TRANSFORM']
};

console.log('words', words);
/*----- state variables -----*/
let winner;
let board;
let wrongGuess;
let secretWord;
let category;

/*----- cached elements  -----*/
const msgEl = document.querySelector('h1');
const letterBtns = [...document.querySelectorAll('#abc-container > button')];
const playAgainBtn = document.getElementById('play-again');
const words = categories[category];

/*----- event listeners -----*/


/*----- functions -----*/
init();

function init() {
    
    
    
    category = 
    secretWord = words[Math.floor(Math.random() * words.length)];
    
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
    } if (wrongGuess === U_FAILED) {
        msgEl.innerHTML = `YOU FAILED, how could you let this happen to the astronaut!`;
    }
    
};







//   GAME STATE IDENTIFICATION:
// let winner; the win condition
// let board; The board is the board of letters for the word game.
// let correctBoard; The board that stores the correct letters once they are guessed/input
// 