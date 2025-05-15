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

// Create a function called getHumanChoice
function getHumanChoice() {
    // Function prompts user for a choice of rock, paper or scissors
    // User input stored in a variable
       let humanChoice = prompt("choose rock, paper, or scissors");
       return humanChoice;
    };


// 05 Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

function playGame() {
    // Variables to track the scores of the players
    let humanScore = 0;
    let computerScore = 0;

    // Create function playRound
    // Inputs to playRound will be humanChoice and computerChoice
    function playRound(humanChoice, computerChoice) {
        let humanChoiceLower = humanChoice.toLowerCase();
        let result = ""
        if ((humanChoiceLower == "rock") && (computerChoice == "scissors")) {
            result = "You win! Rock beats scissors.";
            humanScore = ++humanScore;
        } else if ((humanChoiceLower == "scissors") && (computerChoice == "paper")) {
            result = "You win! Scissors beats paper.";
            humanScore = ++humanScore;
        } else if ((humanChoiceLower == "paper") && (computerChoice == "rock")) {
            result = "You win! Paper beats rock.";
            humanScore = ++humanScore;
        } else if ((humanChoiceLower == "rock") && (computerChoice == "paper")) {
            result = "You lose! Paper beats rock.";
            computerScore = ++computerScore;
        } else if ((humanChoiceLower == "paper") && (computerChoice == "scissors")) {
            result = "You lose! Scissors beats paper.";
            computerScore = ++computerScore;
        } else if ((humanChoiceLower == "scissors") && (computerChoice == "rock")) {
            result = "You lose! Rock beats scissors.";
            computerScore = ++computerScore;
        } else {
            result = "It's a draw!";
        };
        console.log(result);
        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);
    }
    
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);    
};

playGame();
