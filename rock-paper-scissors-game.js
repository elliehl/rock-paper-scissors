function getComputerChoice() {
  const computerOptions = ["Rock", "Paper", "Scissors"];
  let computerChoice = "";
  computerChoice +=
    computerOptions[Math.floor(Math.random() * computerOptions.length)];
  return computerChoice;
}

getComputerChoice();
