import getThrow from './get-throw.js';

// references needed for DOM elements
const playButton = document.getElementById('play');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const winLose = document.getElementById('win-lose');
const paperImg = document.getElementById('paper-img');

// defining variables for tally
let wins = 0;
let losses = 0;

// Event Handlers
playButton.addEventListener('click', () => {
    //retrieving getThrow function to play against computer
    const hand = getThrow();
    const handThrow = document.querySelector('input:checked');

    paperImg.classList.remove('hidden');
    const src = 'assets/' + hand + '.png';
    paperImg.src = src;

    //setting parameters for game
    const tie = handThrow.value === hand;
    const win = handThrow.value === 'rock' && hand === 'scissors' || handThrow.value === 'paper' && hand === 'rock' || handThrow.value === 'scissors' && hand === 'paper';
    const lose = handThrow.value === 'rock' && hand === 'paper' || handThrow.value === 'paper' && hand === 'scissors' || handThrow.value === 'scissors' && hand === 'rock';
    
    //output of game result and update scores
    if(tie) {
        winLose.textContent = 'It\'s a tie. Throw again.';
    }
    else if(win) {
        winLose.textContent = 'It\'s a win. Throw again.';
        wins++;
        winsDisplay.textContent = wins;
    }
    else if(lose) {
        winLose.textContent = 'It\'s a loss. Throw again.';
        losses++;
        lossesDisplay.textContent = losses;
    } 
});