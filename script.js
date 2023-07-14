let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
   return Math.floor(Math.random() * 9);
}

const compareGuesses = (human, comp, secret) => {
    if (Math.abs(secret-human) <= Math.abs(secret-comp)) {
        return true;
    } else {
        return false;
    }    
}

const updateScore = (str) => {
    if (str === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

const advanceRound = () => {
    currentRoundNumber += 1;
}