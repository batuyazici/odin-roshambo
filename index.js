function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  switch (choice) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
    default:
      return null;
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === "rock" && computerSelection === "rock") {
    alert("The game is tie!");
    return 0;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    alert("You lose! Paper beats Rock");
    return 1;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    alert("You won! Rock beats Scissors");
    return 2;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    alert("You won! Paper beats Rock");
    return 2;
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    alert("The game is tie!");
    return 0;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    alert("You lose! Scissors cuts Paper");
    return 1;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    alert("You lose! Rock beats Scissors");
    return 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    alert("You won! Scissors cuts Paper");
    return 2;
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    alert("The game is tie!");
    return 0;
  } else {
    alert("The round didnt count");
    return -1;
  }
}

function game() {
  let compWonNum = 0;
  let playerWonNum = 0;
  let winner;
  for (let i = 0; i < numRound; i++) {
    while((playerSelection = prompt("What is your selection?")) === null) 
    computerSelection = getComputerChoice();
    winner = playRound(playerSelection, computerSelection);
    if (winner === -1) {
      --numRound;
      continue;
    } else if (winner === 0) {
      --numRound;
      continue;
    } else if (winner === 1) {
      compWonNum++;
    } else if (winner === 2) {
      playerWonNum++;
    }
  }
  if (compWonNum > playerWonNum) {
    alert(`The computer won the game. Score: ${compWonNum} - ${playerWonNum}`);
  } else {
    alert(`The computer won the game. Score: ${playerWonNum} - ${compWonNum}`);
  }
}

let numRound = 5;
let playerSelection, computerSelection;

game();
