import compareNumbers from './compare-numbers.js';

// reference needed for DOM elements
const guess = document.getElementById('guess');
const guessButton = document.getElementById('guess-button');
const remainingTries = document.getElementById('remaining-tries');
const tooHighLow = document.getElementById('too-high-low');

// defining variables for state
const correctNumber = 17;
let remaining = 4;
let hint = '';

// event handlers
guessButton.addEventListener('click', () => {

    remaining -= 1;

    remainingTries.textContent = remaining;

    if(remaining === 0) {
        guessButton.disabled = true;
    }

    if(guess > correctNumber) {
        
    }

})