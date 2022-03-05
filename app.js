// let answer = prompt("choose rock, paper or scissors");

function computerPlay() {
  let choice = ["rock", "paper", "scissors"];
  let picked = Math.floor(Math.random() * choice.length);
  let result = choice[picked];
  return result;
}

function playRound(playerSelection, computerSelection) {
  answer = playerSelection.toLowerCase();

  if (answer === "rock" && computerSelection === "scissors") {
    return "Player Wins! rock beats scissors";
  }
  if (answer === "paper" && computerSelection === "rock") {
    return "Player Wins! paper beats rock";
  }
  if (answer === "scissors" && computerSelection === "paper") {
    return "Player Wins! scissors beats paper";
  } else if (computerSelection === "rock" && answer === "scissors") {
    return "You Lose! Rock beats Paper";
  }
  if (computerSelection === "paper" && answer === "rock") {
    return "You Lose! Paper beats Rock";
  }
  if (computerSelection === "scissors" && answer === "paper") {
    return "You Lose! scissors beats paper";
  } else {
    return "draw";
  }
}

// console.log(playRound(playerSelection, computerPlay()));

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(answer, computerPlay()));
  }
}

console.log(game());
