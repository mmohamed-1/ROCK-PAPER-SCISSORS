const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const results = document.querySelector(".results");
const computerUi = document.querySelector(".computerScore");
const playerUi = document.querySelector(".playerScore");
const choice = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;

let games = 5;
let gameOver = false;

rock.addEventListener("click", function () {
  console.log((results.textContent = playRound("rock", computerPlay())));
});
paper.addEventListener("click", function () {
  results.textContent = playRound("paper", computerPlay());
});
scissors.addEventListener("click", function () {
  results.textContent = playRound("scissors", computerPlay());
});

function computerPlay() {
  let picked = Math.floor(Math.random() * choice.length);
  let result = choice[picked];
  return result;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerUi.textContent = playerScore += 1;
    return "Player Wins! rock beats scissors";
    playerUi.textContent = playerScore += 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerUi.textContent = playerScore += 1;
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

// console.log

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound("rock", computerPlay()));
  }
}
