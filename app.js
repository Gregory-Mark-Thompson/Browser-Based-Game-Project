let winner = false;
let tie = false;
let turn = 0;
let counterOne = 0;
let counterTwo = 0;
let varOne = 0;
let varTwo = 0;

const resetBtnEl = document.querySelector('#reset');
const rollBtnEl = document.querySelector('#roll');
const messageEl = document.getElementById('message');
const trackOneEl = document.querySelector('#trackOne');
const trackTwoEl = document.querySelector('#trackTwo');

function init() {
    turn = 0;
    counterOne = 0;
    counterTwo = 0;
    trackOneEl.innerText = `.`;
    trackTwoEl.innerText = `.`;
    messageEl.innerText = `The game has begun anew. The runners are crouched at their blocks.`
};

function updateMessage(){
    if (counterOne <= 20 && counterTwo <= 20) {
        if (counterOne > counterTwo) {
            messageEl.innerText = `It's turn ${turn}. Player One leads with ${counterOne} pts. Player Two trails with ${counterTwo} pts.`;
        } else if (counterTwo > counterOne) {
            messageEl.innerText = `It's turn ${turn}. Player Two leads with ${counterTwo} pts. Player One trails with ${counterOne} pts.`;
        } else {
            messageEl.innerText = `It's turn ${turn}. The players are all tied up at ${counterTwo}.`;
        }
    } else if (counterOne >= 20 || counterTwo >= 20) {
        if (counterOne > counterTwo) {
            messageEl.innerText = `Player One wins with a score of ${counterOne} over Player Two's ${counterTwo}! Congratulations!!!`;
        } else if (counterTwo > counterOne) {
            messageEl.innerText = `Player Two wins with a score of ${counterTwo} over Player One's ${counterOne}! Congratulations!!!`;
        } else if (counterOne === counterTwo) {
            messageEl.innerText = `It's a tie. The game is over with no winner.`;
        }
    }
};

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
};

function rolling() {
    varOne = rollDice();
    counterOne += varOne;
    varTwo = rollDice();
    counterTwo += varTwo;
    trackOneEl.innerText = "_.".repeat(counterOne);
    trackTwoEl.innerText = "_.".repeat(counterTwo);
    turn += 1;
    updateMessage();
};

resetBtnEl.addEventListener('click', init);
rollBtnEl.addEventListener('click', rolling);