import compareNumbers from './compare-numbers.js';

// reference needed for DOM elements
const guess = document.getElementById('guess');
const guessButton = document.getElementById('guess-button');
const remainingTries = document.getElementById('remaining-tries');
const tooHighLow = document.getElementById('too-high-low');
const winLose = document.getElementById('win-or-lose');

// defining variables for state
let remaining = 4;

// event handlers
guessButton.addEventListener('click', () => {

    // taking one try away after each click
    remaining -= 1;

    remainingTries.textContent = remaining;
    
    // when no tries left we lose game and can't use button
    if(remaining === 0) {
        guessButton.disabled = true;
        winLose.textContent = 'Loser';
    }

    // output when user guess too high, low or just right
    if(compareNumbers(guess.value, 17) === 1) {
        tooHighLow.textContent = 'Your guess is too high';
        
    }
    else if(compareNumbers(guess.value, 17) === -1) {
        tooHighLow.textContent = 'Your guess is too low';
    }
    else if(compareNumbers(parseInt(guess.value), 17) === 0) {
        guessButton.disabled = true;
        tooHighLow.textContent = 'Your guess is perfect';
        winLose.textContent = 'Winner';
    }
});