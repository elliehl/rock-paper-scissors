function getComputerChoice() {
  const computerOptions = ["rock", "paper", "scissors"];
  let computerOutput = "";
  computerOutput +=
    computerOptions[Math.floor(Math.random() * computerOptions.length)];
  return computerOutput;
}

function playSingleRound(playerChoice, computerChoice) {
  if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      return "You win!";
    } else if (computerChoice === "paper") {
      return "Sorry, you lose this time";
    } else return "It's a draw";
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      return "You win!";
    } else if (computerChoice === "scissors") {
      return "Sorry, you lose this time";
    } else return "It's a draw";
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      return "You win!";
    } else if (computerChoice === "rock") {
      return "Sorry, you lose this time";
    } else return "It's a draw";
  }
}

let computerScore = 0;
let playerScore = 0;

function game() {
  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt(
      "Please select rock, paper, or scissors"
    ).toLowerCase();
    let computerChoice = getComputerChoice();
    let gameResult = playSingleRound(playerChoice, computerChoice);
    console.log(gameResult);
    if (gameResult === "You win!") {
      playerScore++;
    } else if (gameResult === "Sorry, you lose this time") {
      computerScore++;
    } else {
      playerScore++;
      computerScore++;
    }
    console.log(
      `Player Score: ${playerScore}, Computer Score: ${computerScore}`
    );
  }
  if (playerScore > computerScore) {
    console.log(
      `Player Score: ${playerScore}, Computer Score: ${computerScore} - The player wins!!`
    );
  } else if (computerScore > playerScore) {
    console.log(
      `Player Score: ${playerScore}, Computer Score: ${computerScore} - The computer wins!!`
    );
  } else
    console.log(
      `Player Score: ${playerScore}, Computer Score ${computerScore} - It's a draw!!`
    );
}

game();
