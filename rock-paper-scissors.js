
// To do: refactor comments to explain why instead of what
// The original comments were psuedocode to help plan implemenation, no longer
// needed in that form.

// DECLARE CONSTANTS & VARIABLES
const rpsArray = ['rock','paper','scissors']; // to be used for random computer choice
const rpsButtons = document.querySelectorAll('button');
const resultPara = document.querySelector('#result')
let playerScore = 0;
let computerScore = 0;
let winScore = 5;
// DECLARE FUNCTIONS
function getComputerChoice() {
//  randomly generate computer's rock, paper, scissors choice
    let computerChoice = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    return computerChoice;
}
function playRound(playerSelection, computerSelection) {
    // compare player and computer choice to determine who wins the round
    let message = '';
    if (playerSelection === computerSelection) {
        message = `Tie, play again. ${playerSelection} ties ${computerSelection}.`;
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors')
        || (playerSelection === 'paper' && computerSelection === 'rock')
        || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        message = `You win this round! ${playerSelection} beats ${computerSelection}.`;
    }
    else {
        message = `You lose this round! ${playerSelection} loses to ${computerSelection}.`;
    }
    return message;
}

// best of 5 game function, reports winner or loser
// while Player and Computer score is less than 3
//     play a round
//     count score of Player and Computer
//     alert the outcome of the round and the current score
// When either Player or Computer score is equal to 3
//     end game 
//     alert the outcome of the game and current score
function keepScore(button=button, winScore=5) {
    if (playerScore < winScore && computerScore < winScore) {
        const playerSelection = button.id;
        roundMessage = playRound(playerSelection, getComputerChoice());
        if (roundMessage.includes('win')) {
            playerScore++;
        }
        else if (roundMessage.includes('lose')){
            computerScore++;
        }
        scoreMessage = `Score is Player: ${playerScore}, Computer: ${computerScore}.`;
        resultPara.innerHTML = roundMessage + ' ' + scoreMessage; 
    }
    else if (playerScore === winScore) {
        gameMessage = 'You win the game!';
        resultPara.innerHTML = gameMessage + ' ' + scoreMessage;
    }
    else {
        gameMessage = 'You lose the game!';
        resultPara.innerHTML = gameMessage + ' ' + scoreMessage;
    }
}

// CALL FUNCTIONS
// play rock, paper, scissors game on click
rpsButtons.forEach((button) => {
    button.addEventListener('click', keepScore)
});