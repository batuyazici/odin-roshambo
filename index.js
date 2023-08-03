let compWonNum = 0;
let playerWonNum = 0;
const buttons = document.querySelectorAll("button");
const resetButton = document.querySelector("#reset");
const winner = document.querySelector("#winnerText");
const computerText = document.querySelector("#computerText");
const score = document.querySelector("#scoreText");
const statusBar = document.querySelector("#statusText");
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  switch (choice) {
    case 1:
      displayComputerChoice("Rock");
      return "Rock";
    case 2:
      displayComputerChoice("Paper");
      return "Paper";
    case 3:
      displayComputerChoice("Scissors");
      return "Scissors";
    default:
      return null;
  }
}

function displayComputerChoice(computerSelection) {
  computerText.textContent = `The computer choice was: ${computerSelection}`;
}
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === "rock" && computerSelection === "rock") {
    displayStatus("The game is tie!");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    displayStatus("You lose! Paper beats Rock");
    playerWonNum++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    displayStatus("You won! Rock beats Scissors");
    compWonNum++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    displayStatus("You won! Paper beats Rock");
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    displayStatus("The game is tie!");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    displayStatus("You lose! Scissors cuts Paper");
    playerWonNum++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    displayStatus("You lose! Rock beats Scissors");
    playerWonNum++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    displayStatus("You won! Scissors cuts Paper");
    compWonNum++;
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    displayStatus("The game is tie!");
  } else {
    displayStatus("The round didnt count");
    return -1;
  }
  return 0;
}
function displayScore() {
  score.textContent = `Player: ${playerWonNum} - Computer: ${compWonNum}`;
}

function displayStatus(statusText) {
  statusBar.textContent = statusText;
}

function displayWinner(text = null) {
  if(!text)
  if (compWonNum > playerWonNum) {
    winner.textContent = `The winner is CPU.`;
  } else {
    winner.textContent = `Congrulations! The winner is player.`;
  }
  else {
    winner.textContent = text;
  }
}
function checkFinished() {
  if (compWonNum >= 5 || playerWonNum >= 5) {
    return true;
  }
  return false;
}

for (let button of buttons) {
  button.addEventListener("click", (e) => {
    if (checkFinished()) {
      return;
    }
    playRound(button.id, getComputerChoice());
    displayScore();
    if(playerWonNum === 5 || compWonNum === 5) {
      displayWinner();
    }
  });
}

resetButton.addEventListener("click", (e) => {
  compWonNum = 0  , playerWonNum = 0;
  displayWinner('');  
  displayStatus('');
  displayScore();
  displayComputerChoice('');
});
