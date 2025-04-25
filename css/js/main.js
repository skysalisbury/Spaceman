 /*----- constants -----*/
// Work on CATEGORIES - Needs to be in index.html
//Work on more words.
const U_FAILED = 6;
const CATEGORIES = {
    JavaScript: ['EVENTS', 'VARIABLES', 'OBJECTS', 'FUNCTIONS'],
    CSS: ['FLEXBOX', 'MARGINS', 'BORDERS', 'TRANSFORM']
};
console.log(CATEGORIES);

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
const words = CATEGORIES[category];

/*----- event listeners -----*/


/*----- functions -----*/
//Work on all the code for init(), once that is accomplished you will feel more confident.
init();

function init() {
    
    
    
    category = 
    secretWord = words[Math.floor(Math.random() * words.length)];
    
    render();
};

function render() {
    
    renderMessage();
    
    
};
//Once CATEGORIES is in HTML, and init function looks better work on the if statements.
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






// console.log('words', words);

//   GAME STATE IDENTIFICATION:
// let winner; the win condition
// let board; The board is the board of letters for the word game.
// let correctBoard; The board that stores the correct letters once they are guessed/input
// 