const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", function () {
  console.log(playRound("rock", computerPlay()));
});
paper.addEventListener("click", function () {
  console.log(playRound("Paper", computerPlay()));
});
scissors.addEventListener("click", function () {
  console.log(playRound("scissors", computerPlay()));
});

function computerPlay() {
  const choice = ["rock", "paper", "scissors"];
  let picked = Math.floor(Math.random() * choice.length);
  let result = choice[picked];
  return result;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "Player Wins! rock beats scissors";
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    return "Player Wins! paper beats rock";
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    return "Player Wins! scissors beats paper";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    return "You Lose! Rock beats scissors";
  }
  if (computerSelection === "paper" && playerSelection === "rock") {
    return "You Lose! Paper beats Rock";
  }
  if (computerSelection === "scissors" && playerSelection === "paper") {
    return "You Lose! scissors beats paper";
  } else {
    return "draw";
  }
}

// console.log

// function game() {
//   for (let i = 0; i < 5; i++) {
//     console.log(playRound("rock", computerPlay()));
//   }
// }
