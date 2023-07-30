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
    console.log("The game is tie!");
    return 0;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose! Paper beats Rock");
    return 1;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You won! Rock beats Scissors");
    return 2;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You won! Paper beats Rock");
    return 2;
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("The game is tie!");
    return 0;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose! Scissors cuts Paper");
    return 1;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose! Rock beats Scissors");
    return 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You won! Scissors cuts Paper");
    return 2;
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    console.log("The game is tie!");
    return 0;
  } else {
    console.log("The round didnt count");
    return 0;
  }
}

function game() {
  let compWonNum = 0;
  let playerWonNum = 0;
  let winner;
  for (let i = 0; i < maxRound; i++) {
    if(playerWonNum === 3 ||compWonNum === 3) {
      break;
    }
    // while((playerSelection = prompt("What is your selection?")) === null) {}
    computerSelection = getComputerChoice();
    winner = playRound(playerSelection, computerSelection);
    if (winner === 0) {
      --i;
    } else if (winner === 1) {
      compWonNum++;
    } else if (winner === 2) {
      playerWonNum++;
    }
    console.log(`\nScore: Player: ${playerWonNum} / Computer: ${compWonNum} \n`);
  }
  if (compWonNum > playerWonNum) {
    alert(`The computer won the game. Score: Player: ${playerWonNum} / Computer: ${compWonNum} `);
  } else {
    alert(`The player won the game. Score: Player: ${playerWonNum} / Computer: ${compWonNum} `);
  }
  console.log(`\nFinal Score: Player: ${playerWonNum} / Computer: ${compWonNum} \n`)
}

const maxRound = 5;
let playerSelection, computerSelection;

game();
