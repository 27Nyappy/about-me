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
    const handThrow = document.querySelector('input:checked');

    //setting parameters for game
    const tie = handThrow.value === hand;
    const win = handThrow.value === 'Rock' && hand === 'Scissors' || handThrow.value === 'Paper' && hand === 'Rock' || handThrow.value === 'Scissors' && hand === 'Paper';
    const lose = handThrow.value === 'Rock' && hand === 'Paper' || handThrow.value === 'Paper' && hand === 'Scissors' || handThrow.value === 'Scissors' && hand === 'Rock';
    
    //output of game result and update scores
    if(tie) {
        winLose.textContent = 'It\'s a tie. Throw again.';
    }
    else if(win) {
        winLose.textContent = 'It\'s a win. Throw again.';
        winsDisplay.textContent = wins++;
    }
    else if(lose) {
        winLose.textContent = 'It\'s a loss. Throw again.';
        lossesDisplay.textContent = losses++;
    } 
});