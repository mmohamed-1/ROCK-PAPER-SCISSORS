const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const results = document.querySelector(".results");
const computerUi = document.querySelector(".computerScore");
const playerUi = document.querySelector(".playerScore");
const choice = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;

let winningScore = 5;
let stopGame = false;

// event listeners for the rock, paper and scissors so user can pick and play against computer
rock.addEventListener("click", function () {
  results.textContent = playRound("rock", computerPlay());
  game();
});
paper.addEventListener("click", function () {
  results.textContent = playRound("paper", computerPlay());
  game();
});
scissors.addEventListener("click", function () {
  results.textContent = playRound("scissors", computerPlay());
  game();
});

// computer choices with random logic
function computerPlay() {
  let picked = Math.floor(Math.random() * choice.length);
  let result = choice[picked];
  return result;
}

// player and computer selection and if statements

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
// let computerScore = 0;
// let playerScore = 0;

// function game() {
//   if (!stopGame) {
//     playerScore += 1;
//     computerScore += 1;
//     if (computerScore === winningScore) {
//       stopGame = true;
//     }

//     computerUi.textContent = computerScore;
//   }
// }
