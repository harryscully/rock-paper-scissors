// Create a new function named getComputerChoice
function getComputerChoice() {
    // Generate random 0 to 1, then multiply by 3 to get random between 0-3
    let number = Math.random() * 3;
    let computerChoice = "";
    // Conditionally pick rock, paper or scissors
    if (number < 1) {
        computerChoice = "rock"
    } else if (number < 2) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    return computerChoice
 };

let humanScore = 0;
let computerScore = 0;

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    scoreHuman.textContent = humanScore;
    scoreComputer.textContent = computerScore;
    resultOutput.textContent = "Welcome. Make your move.";
}

// Create function playRound
// Inputs to playRound will be humanChoice and computerChoice
function playRound(humanChoice, computerChoice) {
    let result = ""
    if ((humanChoice == "rock") && (computerChoice == "scissors")) {
        result = "You win! Rock beats scissors.";
        humanScore = ++humanScore;
    } else if ((humanChoice == "scissors") && (computerChoice == "paper")) {
        result = "You win! Scissors beats paper.";
        humanScore = ++humanScore;
    } else if ((humanChoice == "paper") && (computerChoice == "rock")) {
        result = "You win! Paper beats rock.";
        humanScore = ++humanScore;
    } else if ((humanChoice == "rock") && (computerChoice == "paper")) {
        result = "You lose! Paper beats rock.";
        computerScore = ++computerScore;
    } else if ((humanChoice == "paper") && (computerChoice == "scissors")) {
        result = "You lose! Scissors beats paper.";
        computerScore = ++computerScore;
    } else if ((humanChoice == "scissors") && (computerChoice == "rock")) {
        result = "You lose! Rock beats scissors.";
        computerScore = ++computerScore;
    } else {
        result = "It's a draw!";
    };
    resultOutput.textContent = result;

    // Check for winning condition
    if (humanScore === 5) {
        alert("You win!!!");
        resetGame();
    } else if (computerScore === 5) {
        alert("Unlucky...computer wins this time");
        resetGame();
    }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const scoreHuman = document.querySelector(".human-score");
const scoreComputer = document.querySelector(".computer-score");

const resultOutput = document.querySelector(".output-result");

rockButton.addEventListener("click", () => {
    const humanSelection  = "rock"
    playRound(humanSelection,getComputerChoice());
    scoreHuman.textContent = humanScore;
    scoreComputer.textContent = computerScore;
});
paperButton.addEventListener("click", () => {
    const humanSelection  = "paper"
    playRound(humanSelection,getComputerChoice());
    scoreHuman.textContent = humanScore;
    scoreComputer.textContent = computerScore;
});
scissorsButton.addEventListener("click", () => {
    const humanSelection  = "scissors"
    playRound(humanSelection,getComputerChoice());
    scoreHuman.textContent = humanScore;
    scoreComputer.textContent = computerScore;
});


