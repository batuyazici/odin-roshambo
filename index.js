let compWonNum = 0;
let playerWonNum = 0;
const buttons = document.querySelectorAll("button");
const resetButton = document.querySelector("#reset");
const winner = document.querySelector("#winnerText");
const computerText = document.querySelector("#computerInfo");
const playerText = document.querySelector("#playerInfo");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const playerImg = document.querySelector("#playerSuccess");
const computerImg = document.querySelector("#computerSuccess");
const statusBar = document.querySelector("#statusText");
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

function displayComputerChoice(computerSelection) {
  computerText.textContent = `${computerSelection}`;
}
function displayPlayerChoice(playerSelection) {
  playerText.textContent = `${playerSelection}`;
}
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  displayComputerChoice(computerSelection);
  displayPlayerChoice(playerSelection);
  if (playerSelection === "rock" && computerSelection === "rock") {
    displayStatus("The game is tie!", "grey");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    displayStatus("You lose! Paper beats Rock", "grey");
    compWonNum++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    displayStatus("You won! Rock beats Scissors", "white");
    playerWonNum++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerWonNum++;
    displayStatus("You won! Paper beats Rock", "white");
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    displayStatus("The game is tie!", "grey");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    displayStatus("You lose! Scissors cuts Paper", "grey");
    compWonNum++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    displayStatus("You lose! Rock beats Scissors", "grey");
    compWonNum++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    displayStatus("You won! Scissors cuts Paper", "white");
    playerWonNum++;
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    displayStatus("The game is tie!", "grey");
  } else {
    displayStatus("The round didnt count", "grey");
    return -1;
  }
  return 0;
}
function displayScore() {
  playerScore.textContent = `Player: ${playerWonNum}`;
  computerScore.textContent = `Computer: ${compWonNum}`;
}

function displayStatus(statusText, color) {
  statusBar.textContent = statusText;
  statusBar.setAttribute("style", `color: ${color}`);
}

function displayWinner(text = null) {
  if (text === null) {
    if (compWonNum > playerWonNum) {
      computerImg.classList.remove("hidden");
      winner.textContent = `The winner is CPU.`;
      winner.setAttribute("style", "color:red");
    } else {
      playerImg.classList.remove("hidden");
      winner.textContent = `Congrulations! The winner is player.`;
      winner.setAttribute("style", "color:green");
    }
  } else {
    computerImg.classList.add("hidden");
    playerImg.classList.add("hidden");
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
    if (playerWonNum === 5 || compWonNum === 5) {
      displayStatus("");
      displayWinner();
      getResetButton();
    }
  });
}
function getResetButton() {
  resetButton.classList.remove("hidden");
}

function setResetButton() {
  resetButton.classList.add("hidden");
}
resetButton.addEventListener("click", (e) => {
  (compWonNum = 0), (playerWonNum = 0);
  displayWinner("");
  displayStatus("");
  displayScore();
  displayComputerChoice("-");
  displayPlayerChoice("-");
  setResetButton();
});
