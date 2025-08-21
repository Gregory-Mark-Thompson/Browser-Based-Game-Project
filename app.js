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
    winner = false;
    tie = false;
    trackOneEl.innerText = `.`;
    trackTwoEl.innerText = `.`;
    messageEl.innerText = `The race will shortly begin again anew. The runners are crouched at their blocks, awaiting the starting gun.`
};

function updateMessage(){
    if (counterOne < 20 && counterTwo < 20) {
        if (counterOne > counterTwo) {
            messageEl.innerText = `It's second number ${turn}. Runner One leads at ${counterOne} yds. Runner Two trails at ${counterTwo} yds.`;
        } else if (counterTwo > counterOne) {
            messageEl.innerText = `It's second number ${turn}. Runner Two leads at ${counterTwo} yds. Runner One trails at ${counterOne} yds.`;
        } else {
            messageEl.innerText = `It's second number ${turn}. The runners are all tied up at ${counterTwo} yds.`;
        }
    } else if (counterOne >= 20 || counterTwo >= 20) {
        if (counterOne > counterTwo) {
            messageEl.innerText = `Runner One wins with a final distance of ${counterOne} yds. over Runner Two's ${counterTwo} yds.! Congratulations Runner One!!!`;
            winner = true;
        } else if (counterTwo > counterOne) {
            messageEl.innerText = `Runner Two wins with a final distance of ${counterTwo} yds. over Runner One's ${counterOne} yds.! Congratulations Runner Two!!!`;
            winner = true;
        } else if (counterOne === counterTwo) {
            messageEl.innerText = `It's a tie. The game is over with no winner.`;
            tie = true;
        }
    }
};

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
};

function rolling() {
    if (!winner && !tie) {
        varOne = rollDice();
        counterOne += varOne;
        varTwo = rollDice();
        counterTwo += varTwo;
        trackOneEl.innerText = "_.".repeat(counterOne);
        trackTwoEl.innerText = "_.".repeat(counterTwo);
        turn += 1;
        updateMessage();
    } else if (winner) {
        if (counterOne > counterTwo) {
            messageEl.innerText = `The race is over with Runner One being the winner. Press the reset to race again.`;
        } else {
            messageEl.innerText = `The race is over with Runner Two being the winner. Press the reset to race again.`
        };
    } else {
        messageEl.innerText = `The race is over and ended in a tie with neither runner winning. Press the reset to race again.`
    };
};

resetBtnEl.addEventListener('click', init);
rollBtnEl.addEventListener('click', rolling);