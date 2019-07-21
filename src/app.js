import isYes from './is-yes.js';

// Reference needed for DOM elements
const quizButton = document.getElementById('quiz-button');
const quizResult = document.getElementById('quiz-result');
const succeed = document.getElementById('succeed');
const notPass = document.getElementById('fail');

// Event handlers
quizButton.onclick = function() {
    let name = '';

    // Returns string entered by user, sets user name
    const userName = prompt('What is your name?');
    name = name + userName;

    // confirm with user if they want to continue
    const confirmWUser = confirm(name + ' are you sure you want to take test?');
    if(confirmWUser === false) {
        return;
    }

    const possibleCorrect = 3;
    let answers = 0;

    // get user to respond first question
    const questionOne = prompt('Is the Pomsky a cross between a Siberian Husky and a Pomeranian?(Y/N)');

    // converts to boolean and records user answer
    const correctQuestionOne = true;
    if(isYes(questionOne) === correctQuestionOne) {
        answers += 1;
    }

    // get user response for second question
    const questionTwo = prompt('Is it true that Pomskies have no health issues?(Y/N)');

    // convert to boolean and record user answer
    const correctQuestionTwo = false;
    if(isYes(questionTwo) === correctQuestionTwo) {
        answers += 1;
    }

    // get user response for third question
    const questionThree = prompt('Do Pomskies require moderate to high activity level?(Y/N)');

    // convert to boolean and record user answer
    const correctQuestionThree = true;
    if(isYes(questionThree) === correctQuestionThree) {
        answers += 1;
    } 

    // alerting user quiz is over
    alert(name + ' you have completed the quiz, your results will now be written to the page.');
    
    // returning results of test
    let results = name + ' you answered ' + answers + '/' + possibleCorrect + ' questions correctly.';

    
    // showcase image based on user score
    if(answers === possibleCorrect) {
        succeed.classList.remove('hidden');
        notPass.classList.add('hidden');
    }
    else {
        notPass.classList.remove('hidden');
        succeed.classList.add('hidden');
    }
    
    quizResult.textContent = results;
}; 