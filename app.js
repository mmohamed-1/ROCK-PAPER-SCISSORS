const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const results = document.querySelector(".results");
const computerUi = document.querySelector(".computerScore");
const playerUi = document.querySelector(".playerScore");
const choice = ["rock", "paper", "scissors"];
const resetBtn = document.querySelector(".reset-btn");

let computerScore = 0;
let playerScore = 0;
let winningScore = 5;

// computer choices with random logic
function computerPlay() {
  let picked = Math.floor(Math.random() * choice.length);
  let result = choice[picked];
  return result;
}

// player and computer selection and if statements

function playRound(playerSelection, computerSelection, winner) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerUi.textContent = playerScore += 1;
    return "Player Wins! rock beats scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerUi.textContent = playerScore++;
    return "Player Wins! paper beats rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerUi.textContent = playerScore += 1;
    return "Player Wins! scissors beats paper";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    computerUi.textContent = computerScore += 1;
    return "You Lose! Rock beats scissors";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    computerUi.textContent = computerScore += 1;
    return "You Lose! Paper beats Rock";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    computerUi.textContent = computerScore += 1;
    return "You Lose! scissors beats paper";
  } else {
    return "draw";
  }
}

function playGame() {
  rock.addEventListener("click", function () {
    if (computerScore !== winningScore && playerScore !== winningScore) {
      results.textContent = playRound("rock", computerPlay());
    } else {
      results.textContent =
        computerScore === winningScore ? "computer has  won" : `player has won`;
    }
  });
  paper.addEventListener("click", function () {
    if (computerScore !== winningScore && playerScore !== winningScore) {
      results.textContent = playRound("paper", computerPlay());
    } else {
      results.textContent =
        computerScore === winningScore ? "computer has  won" : `player has won`;
    }
  });
  scissors.addEventListener("click", function () {
    if (computerScore !== winningScore && playerScore !== winningScore) {
      results.textContent = playRound("scissors", computerPlay());
    } else {
      results.textContent =
        computerScore === winningScore ? "computer has  won" : `player has won`;
    }
  });
}

playGame();

resetBtn.addEventListener("click", function () {
  playerScore = 0;
  computerScore = 0;
  playerUi.textContent = 0;
  computerUi.textContent = 0;
  results.textContent = "";
});
