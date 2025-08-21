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
const pictureEl = document.querySelector('#derbyPicture');

function init() {
    turn = 0;
    counterOne = 0;
    counterTwo = 0;
    winner = false;
    tie = false;
    trackOneEl.innerText = `.`;
    trackTwoEl.innerText = `.`;
    pictureEl.src = "https://images.unsplash.com/photo-1565657739331-ca2241b47e95?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    messageEl.innerText = `The race will shortly begin again anew. The horses are behind the starting gate, awaiting the bugle call.`
};

function updateMessage(){
    if (counterOne < 20 && counterTwo < 20) {
        if (counterOne > counterTwo) {
            messageEl.innerText = `It's second number ${turn}. Secretariat leads at ${counterOne} yds. American Pharoah trails at ${counterTwo} yds.`;
            pictureEl.src = "https://plus.unsplash.com/premium_photo-1661964201700-be5a77a1e7e4?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        } else if (counterTwo > counterOne) {
            messageEl.innerText = `It's second number ${turn}. American Pharoah leads at ${counterTwo} yds. Secretariat trails at ${counterOne} yds.`;
            pictureEl.src = "https://plus.unsplash.com/premium_photo-1661964201700-be5a77a1e7e4?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        } else {
            messageEl.innerText = `It's second number ${turn}. The horses are in a dead heat at ${counterTwo} yds.`;
            pictureEl.src = "https://plus.unsplash.com/premium_photo-1661964201700-be5a77a1e7e4?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        }
    } else if (counterOne >= 20 || counterTwo >= 20) {
        if (counterOne > counterTwo) {
            messageEl.innerText = `Secretariat wins with a final distance of ${counterOne} yds. over American Pharoah's ${counterTwo} yds.! Congratulations Secretariat!!!`;
            winner = true;
            pictureEl.src = "https://images.unsplash.com/photo-1619616754069-b87e390edfcd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        } else if (counterTwo > counterOne) {
            messageEl.innerText = `American Pharoah wins with a final distance of ${counterTwo} yds. over Secretariat's ${counterOne} yds.! Congratulations American Pharoah!!!`;
            pictureEl.src = "https://images.unsplash.com/photo-1619616754069-b87e390edfcd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
            winner = true;
        } else if (counterOne === counterTwo) {
            messageEl.innerText = `It's a tie. The race is over with neither horse being the winner.`;
            pictureEl.src = "https://images.unsplash.com/photo-1516126869905-430937ca43e6?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
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
            messageEl.innerText = `The race is over with Secretariat being the winner. Press the reset to have the horses race again.`;
        } else {
            messageEl.innerText = `The race is over with American Pharoah being the winner. Press the reset to have the horses race again.`
        };
    } else {
        messageEl.innerText = `The race is over and ended in a tie with neither horse winning. Press the reset to have the horses race again.`
    };
};

resetBtnEl.addEventListener('click', init);
rollBtnEl.addEventListener('click', rolling);