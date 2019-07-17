function compareNumbers(guess, correctNumber) {
    let hint = '';
    if(guess === correctNumber) {
        hint = 'Your number is correct';
        return 0;
    }
    else if(guess < correctNumber) {
        hint = 'Your number is too low';
        return -1;
        
    }
    else if(guess > correctNumber) {
        hint = 'Your number is too high';
        return 1;
    }
    return hint;
}

export default compareNumbers;