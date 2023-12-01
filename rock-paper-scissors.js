
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
//         if playerSelection and computerSelection tie
//             return string "Tie, play again. playerSelection ties computerSelection."
//         if playerSelection beats computerSelection
//             return string "You Win! playerSelection beats computerSelection."
//         if playerSelection loses to computerSelection
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
        message = `You win this round! ${playerSelection} beats ${computerSelection}.`;
        return message;
    }
    else {
        message = `You lose this round! ${playerSelection} loses to ${computerSelection}.`;
        return message;
    }
}
// best of 5 game function, reports winner or loser
// while Player and Computer score is less than 3
//     play a round
//     count score of Player and Computer
//     alert the outcome of the round and the current score
// When either Player or Computer score is equal to 3
//     end game 
//     alert the outcome of the game and current score
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let roundMessage = '';
    let scoreMessage = '';
    let gameMessage = '';
    while (playerScore < 3 && computerScore < 3) {
        roundMessage = playRound(getPlayerChoice(), getComputerChoice());
        if (roundMessage.includes('win')) {
            playerScore++;
        }
        else {
            computerScore++;
        }
        scoreMessage = `Score is Player: ${playerScore}, Computer: ${computerScore}.`;
        alert(roundMessage + ' ' + scoreMessage);
    }
    if (playerScore === 3) {
        gameMessage = 'You win the game!';
    }
    else {
        gameMessage = 'You lose the game!';
    }
    return gameMessage + ' ' + scoreMessage;
}
// call functions
let game = playGame();
alert(game);

/* bugs to debug
bug 1: playerSelection is undefined after entering it correctly after entering it incorrectly
    this is still true after removing recursion from playRound tie condition
    could be due to recursion in getPlayerChoice, but not clear why
solution 1: seems that including return before the recursive function call fixes this

*/