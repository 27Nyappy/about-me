import getThrow from './get-throw.js';

// references needed for DOM elements
const playButton = document.getElementById('play');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const winLose = document.getElementById('win-lose');

// defining variables for tally
let wins = 0;
let losses = 0;

// Event Handlers
playButton.addEventListener('click', () => {
    //retrieving getThrow function to play against computer
    const hand = getThrow();

    const handButton = document.querySelector('input:checked');

    //setting parameters for game
    const tie = handButton.value === hand;
    const win1 = handButton.value === 'Rock' && hand === 'Scissors';
    const win2 = handButton.value === 'Paper' && hand === 'Rock';
    const win3 = handButton.value === 'Scissors' && hand === 'Paper';
    const lose1 = handButton.value === 'Rock' && hand === 'Paper';
    const lose2 = handButton.value === 'Paper' && hand === 'Scissors';
    const lose3 = handButton.value === 'Scissors' && hand === 'Rock';

    //output of game result and update scores
    if(tie) {
        winLose.textContent = 'It\'s a tie. Throw again.';
    }
    else if(win1) {
        winLose.textContent = 'It\'s a win. Throw again.';
        winsDisplay.textContent = wins++;
    }
    else if(win2) {
        winLose.textContent = 'It\'s a win. Throw again.';  
        winsDisplay.textContent = wins++;
    }
    else if(win3) {
        winLose.textContent = 'It\'s a win. Throw again.';
        winsDisplay.textContent = wins++;
    }
    else if(lose1) {
        winLose.textContent = 'It\'s a loss. Throw again.';
        lossesDisplay.textContent = losses++;
    }
    else if(lose2) {
        winLose.textContent = 'It\'s a loss. Throw again.';  
        lossesDisplay.textContent = losses++;
    }
    else if(lose3) {
        winLose.textContent = 'It\'s a loss. Throw again.';
        lossesDisplay.textContent = losses++;
    }
    
});