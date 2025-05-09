/*----- constants -----*/
const U_FAILED = 6;
const CATEGORIES = {
    js: ['EVENTS', 'VARIABLES', 'OBJECTS', 'FUNCTIONS', 'ELEMENTS'],
    css: ['FLEXBOX', 'MARGINS', 'BORDERS', 'TRANSFORM', 'WRAP'],
    nba_teams: ['NUGGETS', 'THUNDER', 'HAWKS', 'MAGIC', 'TIMBERWOLVES']
};

/*----- state variables -----*/

let board;
let wrongGuess;
let secretWord;
let category;
let guessWord;
let result;
let rightGuess;

/*----- cached elements  -----*/
const msgEl = document.querySelector("h1");
const letterBtns = [...document.querySelectorAll('#abc-container > button')];
const playAgainBtn = document.getElementById('play-again');
const spacemanEl = document.getElementById('spaceman');

let displayWrongGuessEl = document.getElementById('display-wrong-guess');
let displayCorrectGuessEl = document.getElementById('display-correct-guess');
let categoryEl = document.getElementById('category');
/*----- event listeners -----*/
letterBtns.forEach((letterBtn) => {
    letterBtn.addEventListener('click', handleLetterGuess);
});

playAgainBtn.addEventListener('click', init);
categoryEl.addEventListener('change', init);



/*----- functions -----*/
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
    letterBtns.forEach((letterBtn) => {
        letterBtn.disabled = false;
    })

    render();
};

function render() {

    renderMessage();
    renderDisplayLetter();
    renderCheckWin();

};

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
        msgEl.textContent = "YOU FAILED! How could you let this happen to the astronaut!";
    } else {
        msgEl.textContent = "Oh no I'm lost in space please save me!";
    };
    spacemanEl.src = `assets/spaceman-${wrongGuess.length}.png`;
};

function handleLetterGuess(evt) {
    evt.target.disabled = true
    let guessLetter = letterBtns[letterBtns.indexOf(evt.target)].textContent
    if (wrongGuess.length >= incorrectStrikes || guessLetter === wrongGuess
        || guessLetter === guessWord) {
        render();
        return;
    }
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
    if (guessWord.join('') === secretWord) {
        msgEl.textContent = "You won! You saved the astronaut!";
    }
};
