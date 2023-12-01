
// declare constants
const rpsArray = ['rock','paper','scissors'];

// declare functions
//     getComputerChoice
//         randomly generate choice between rock, paper, or scissors
//         assign choice to computerSelection variable
//         return computerSelection
function getComputerChoice() {
    let computerChoice = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    return computerChoice;
}

//     getPlayerChoice
//         prompt Player to enter case-insensitive option of rock, paper, or scissors
//         if Player enters something else, ask for rock, paper, or scissors
//         assign choice to playerSelection
//         return computerSelection
function getPlayerChoice() {
    let playerChoice = prompt('please enter rock, paper, or scissors','').toLowerCase();
    if (rpsArray.includes(playerChoice)) {
        return playerChoice;
    }
    else {
       return getPlayerChoice();
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
    let message = '';
    if (playerSelection === computerSelection) {
        message = `Tie, play again. ${playerSelection} ties ${computerSelection}.`;
        alert(message);
        return playRound(getPlayerChoice(),getComputerChoice());
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors')
        || (playerSelection === 'paper' && computerSelection === 'rock')
        || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        message = `You win! ${playerSelection} beats ${computerSelection}.`;
        return message;
    }
    else {
        message = `You lose! ${playerSelection} loses to ${computerSelection}.`;
        return message;
    }
}
// best of 5 game function, reports winner or loser
// for each round, count score of Player and Computer

// call functions
let roundMessage = playRound(getPlayerChoice(), getComputerChoice());
alert(roundMessage);

/* bugs to debug
bug 1: playerSelection is undefined after entering it correctly after entering it incorrectly
    this is still true after removing recursion from playRound tie condition
    could be due to recursion in getPlayerChoice, but not clear why
solution 1: seems that including return before the recursive function call fixes this

*/