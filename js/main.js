 /*----- constants -----*/
// Work on CATEGORIES - Needs to be in index.html
//Work on more words.
const U_FAILED = 6;
const CATEGORIES = {
    JavaScript: ['EVENTS', 'VARIABLES', 'OBJECTS', 'FUNCTIONS', 'EVENTS'],
    CSS: ['FLEXBOX', 'MARGINS', 'BORDERS', 'TRANSFORM', 'WRAP'],
    NBA_Teams: ['NUGGETS', 'THUNDER', 'HAWKS', 'MAGIC', 'TIMBERWOLVES']
};
console.log(CATEGORIES);

/*----- state variables -----*/
let winner;
let board;
let wrongGuess;
let secretWord;
let category;
let guessWord;
let result;

// let wrongLetter; In case I need it

/*----- cached elements  -----*/
const msgEl = document.querySelector('h1');
const letterBtns = [...document.querySelectorAll('#abc-container > button')];
const playAgainBtn = document.getElementById('play-again');
const words = CATEGORIES[category];

let defWrongGuess = document.getElementById('wrong-guess');
let defCorrectGuess = document.getElementById('correct-guess');
let categoryEl = document.getElementById('category');
/*----- event listeners -----*/
letterBtns.forEach((letterBtn) => {
    letterBtn.addEventListener('click', handleLetterGuess);
});
restartBtn.addEventListener('click', init);
categoryEl.addEventListener('change', init);



/*----- functions -----*/
//Work on all the code for init(), once that is accomplished you will feel more confident.
init();

function init() {
    incorrectStrikes = U_FAILED;
    wrongGuess = [];
    category = categoryEl.value;
    let secretWordIdx = Math.floor(Math.random() * words.length)
    secretWord = words[secretWordIdx];
    wordAnswer = secretWord.split('')
    guessWord = wordAnswer.map(letter => '_ &nbsp')
    result = null;
    render();
};

function render() {
    
    renderMessage();
    handleLetterGuess();
    init();
};
//Once CATEGORIES is in HTML, and init function looks better work on the if statements.
function renderMessage() {
    if (wrongGuess === null) {
        msgEl.innerHTML = `I can't wait to see the final frontier!`;
    } else if (wrongGuess === 1) {
        msgEl.innerHTML = "What happened to my leg?";
    } else if (wrongGuess === 2) {
        msgEl.innerHTML = `Oh no my other leg?!`;
    } else if (wrongGuess === 3) {
        msgEl.innerHTML = `My arm!`;
    } else if (wrongGuess === 4) {
        msgEl.innerHTML = `My other arm!`;
    } else if (wrongGuess === 5) {
        msgEl.innerHTML = `I just wanted to go to space is this how it ends?!`;
    } else if (wrongGuess === U_FAILED) {
        msgEl.innerHTML = `YOU FAILED, how could you let this happen to the astronaut!`;
    }
    
};

function handleLetterGuess(evt) {
   let guessLetter = (evt.target.textContent);
   if (secretWord.include(guessLetter)) {
    answer.forEach((letter, idx) => {
        if (guessLetter === letter) {
            guessWord[idx] = letter
        }
    })
   }
   render();
}



// secretWord = words[Math.floor(Math.random() * words.length)];
// console.log('words', words);

//   GAME STATE IDENTIFICATION:
// let winner; the win condition
// let board; The board is the board of letters for the word game.
// let correctBoard; The board that stores the correct letters once they are guessed/input
// 