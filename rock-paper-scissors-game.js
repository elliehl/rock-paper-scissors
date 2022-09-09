function getComputerChoice() {
  const computerOptions = ["rock", "paper", "scissors"];
  let computerChoice = "";
  computerChoice +=
    computerOptions[Math.floor(Math.random() * computerOptions.length)];
  return computerChoice;
}

getComputerChoice();

function playSingleRound(playerChoice, computerChoice) {
  if (playerChoice.toLowerCase() === "rock") {
    if (computerChoice === "scissors") {
      return "You win!";
    } else if (computerChoice === "paper") {
      return "Sorry, you lose this time";
    } else return "It's a draw";
  }

  if (playerChoice.toLowerCase() === "paper") {
    if (computerChoice === "rock") {
      return "You win!";
    } else if (computerChoice === "scissors") {
      return "Sorry, you lose this time";
    } else return "It's a draw";
  }

  if (playerChoice.toLowerCase() === "scissors") {
    if (computerChoice === "paper") {
      return "You win!";
    } else if (computerChoice === "rock") {
      return "Sorry, you lose this time";
    } else return "It's a draw";
  }
}

let computerScore = 0;
let playerScore = 0;
function game() {}
