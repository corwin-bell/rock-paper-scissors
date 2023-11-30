
// declare constants
const rpsArray = ['rock','paper','scissors']
// declare functions
//     getComputerChoice
//         randomly generate choice between rock, paper, or scissors
//         assign choice to computerSelection variable
//         return computerSelection
function getComputerChoice() {
    const computerSelection = rpsArray[Math.floor(Math.random() * rpsArray.length)]
    return computerSelection
}
//     getPlayerChoice
//         prompt Player to enter case-insensitive option of rock, paper, or scissors
//         if Player enters something else, ask for rock, paper, or scissors
//         assign choice to playerSelection
//         return computerSelection
function getPlayerChoice() {
    const playerSelection = prompt('please enter rock, paper, or scissors','').toLowerCase()
    if (rpsArray.includes(playerSelection)) {
        return playerSelection
    }
    else {
        getPlayerChoice()
    }
}
//     playRound(playerSelection, computerSelection)
//         case if playerSelection and computerSelection tie
//             return string "Tie, play again. playerSelection ties computerSelection."
//         case if playerSelection beats computerSelection
//             return string "You Win! playerSelection beats computerSelection."
//         case if playerSelection loses to computerSelection
//             return string "You Lose! computerSelection beats playerSelection"

// call functions
//     computerSelection = getComputerChoice()
const playerSelection = getPlayerChoice()
//     playerSelection = getPlayerChoice()
//     alert(playRound(playerSelection, computerSelection))
