 /*----- constants -----*/
// Work on CATEGORIES - Needs to be in index.html
//Work on more words.
const U_FAILED = 6;
const CATEGORIES = {
    js: ['EVENTS', 'VARIABLES', 'OBJECTS', 'FUNCTIONS', 'EVENTS'],
    css: ['FLEXBOX', 'MARGINS', 'BORDERS', 'TRANSFORM', 'WRAP'],
    nba_teams: ['NUGGETS', 'THUNDER', 'HAWKS', 'MAGIC', 'TIMBERWOLVES']
};


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
const msgEl = document.querySelector("h1");
const letterBtns = [...document.querySelectorAll('#abc-container > button')];
const playAgainBtn = document.getElementById('play-again');


let displayWrongGuessEl = document.getElementById('display-wrong-guess');
let displayCorrectGuessEl = document.getElementById('display-correct-guess');
let categoryEl = document.getElementById('category');
/*----- event listeners -----*/
letterBtns.forEach((letterBtn) => {
    letterBtn.addEventListener('click', handleLetterGuess);
});
playAgainBtn.addEventListener('click', init);
categoryEl.addEventListener('change', init);


console.log(letterBtns);
/*----- functions -----*/
//Work on all the code for init(), once that is accomplished you will feel more confident.
// Need to fix play again button and continue working on handleLetterGuess evtListener
init();

function init() {
    incorrectStrikes = U_FAILED;
    wrongGuess = [];
    category = categoryEl.value;
    const words = CATEGORIES[category];
    let secretWordIdx = Math.floor(Math.random() * words.length)
    secretWord = words[secretWordIdx];
    wordAnswer = secretWord.split('')
    guessWord = wordAnswer.map(letter => '_ ')
    result = null;
    // playAgainBtn.style.visibility = playAgainBtn ? 'visible' : 'hidden';
    
    render();
};


function render() {
    
    renderMessage();
    renderDisplayLetter();
    // renderCheckWin();
};

//Once CATEGORIES is in HTML, and init function looks better work on the if statements.
function renderMessage() {
    if (wrongGuess.length === 1) {
        msgEl.textContent = "What happened to my leg?";
    } else if (wrongGuess.length === 2) {
        msgEl.textContent = "Oh no my other leg?!";
    } else if (wrongGuess.length === 3) {
        msgEl.textContent = "My arm!";
    } else if (wrongGuess.length === 4) {
        msgEl.textContent = "My other arm!";
    } else if (wrongGuess.length === 5) {
        msgEl.textContent = "I just wanted to go to space is this how it ends?!";
    } else if (wrongGuess.length === U_FAILED) {
        msgEl.textContent = "YOU FAILED, how could you let this happen to the astronaut!";
    } else {
        msgEl.textContent = "I can't wait to see the final frontier!";
    };
};

function handleLetterGuess(evt) {
    // console.log(evt.target)
    // let guessLetter = evt.target.textContent Another way to write this code below
   let guessLetter = letterBtns[letterBtns.indexOf(evt.target)].textContent
   console.log(guessLetter);
   if (result 
    || evt.target.tagName !== 'BUTTON' || wrongGuess.includes(guessLetter) ||
    guessWord.includes(guessLetter)) return
   if (secretWord.includes(guessLetter)) {
    wordAnswer.forEach((letter, idx) => {
        if (guessLetter === letter) {
            guessWord[idx] = letter
        }
    })
   } else {
    wrongGuess.push(guessLetter)
   }
   render();
}

function renderDisplayLetter() {
    displayCorrectGuessEl.innerHTML = guessWord.join('')
    displayWrongGuessEl.innerHTML = " "
    wrongGuess.forEach((letter) => {
        let wrongGuessEl = document.createElement('div')
        wrongGuessEl.innerHTML = letter
        displayWrongGuessEl.appendChild(wrongGuessEl)
    })
};

function renderCheckWin() {
    if (result === guessWord) {
        msgEl.innerHTML = `You Saved The Astronaut`;
    // } if () 
}
}
// function renderPlayAgainBtn() {
//    return null;
// }

// This is wrong, I just don't know what I am coding wrong.
// function handleClickPAB(evt) {
//     const clickPlayAgainBtn = playAgainBtn === null;
//     playAgainBtn.style.visibility = result ? 'visible' : 'hidden';
     
// }
// secretWord = words[Math.floor(Math.random() * words.length)];
// console.log('words', words);

//   GAME STATE IDENTIFICATION:
// let winner; the win condition
// let board; The board is the board of letters for the word game.
// let correctBoard; The board that stores the correct letters once they are guessed/input
// 