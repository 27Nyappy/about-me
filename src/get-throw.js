//function for test
// This is testing function, returns rock, paper or scissors
export function getThrowFromNumber(randomNumber) {
    if(randomNumber === 0){
        return 'Rock';
    }
    else if(randomNumber === 1){
        return 'Paper';
    }
    else if(randomNumber === 2){
        return 'Scissors';
    }
}

// This will generate random number for main function, returns rock, paper or scissors
export default function getThrow() {
    const randomNumber = Math.floor(Math.random() * 3) + 0;

    // calls getThrowFromNumber and returns result
    const hand = getThrowFromNumber(randomNumber);
    return hand;
}