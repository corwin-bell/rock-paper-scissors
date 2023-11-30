
// declare variables
const rpsArray = ['rock','paper','scissors'];
let computerSelection = '';
let playerSelection = '';
let gameMessage = '';

// declare functions
//     getComputerChoice
//         randomly generate choice between rock, paper, or scissors
//         assign choice to computerSelection variable
//         return computerSelection
function getComputerChoice() {
    computerSelection = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    return computerSelection;
}

//     getPlayerChoice
//         prompt Player to enter case-insensitive option of rock, paper, or scissors
//         if Player enters something else, ask for rock, paper, or scissors
//         assign choice to playerSelection
//         return computerSelection
function getPlayerChoice() {
    playerSelection = prompt('please enter rock, paper, or scissors','').toLowerCase();
    if (rpsArray.includes(playerSelection)) {
        return playerSelection;
    }
    else {
        getPlayerChoice();
    }
}

//     playRound(playerSelection, computerSelection)
//         case if playerSelection and computerSelection tie
//             return string "Tie, play again. playerSelection ties computerSelection."
//         case if playerSelection beats computerSelection
//             return string "You Win! playerSelection beats computerSelection."
//         case if playerSelection loses to computerSelection
//             return string "You Lose! computerSelection beats playerSelection"
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        gameMessage = `Tie, play again. ${playerSelection} ties ${computerSelection}.`;
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors')
        || (playerSelection === 'paper' && computerSelection === 'rock')
        || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        gameMessage = `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    else {
        gameMessage = `You lose! ${playerSelection} loses to ${computerSelection}.`;
    }
    return gameMessage
}
// call functions
alert(playRound(getPlayerChoice(), getComputerChoice()));
