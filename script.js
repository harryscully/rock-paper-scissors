// 01. Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

// Create a new function named getComputerChoice
function getComputerChoice() {
    // Generate random 0 to 1, then multiply by 3 to get random between 0-3
    let computerChoice = Math.random() * 3;
    // Conditionally pick rock, paper or scissors
    if (computerChoice < 1) {
        return console.log("rock");
    } else if (computerChoice < 2) {
        return console.log("paper");
    } else {
        return console.log("scissors");
    }
 };
 getComputerChoice();

// 02. Your game will be played by a human player. You will write a function that takes the user choice and returns it.

// Create a function called getHumanChoice
function getHumanChoice() {
    // Function prompts user for a choice of rock, paper or scissors
    // User input stored in a variable
       let humanChoice = prompt("choose rock, paper, or scissors");
       return console.log(humanChoice);
    };
getHumanChoice();

// 03. Your game will keep track of the players score. You will write variables to keep track of the players score.

let humanScore = 0;
let computerScore = 0;

// 04. Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

// 05 Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.