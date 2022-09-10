"use strict";

function getComputerChoice() {
  const choice = ["rock", "paper", "scissor"];
  const choiceInt = parseInt(Math.random() * 3);
  return choice[choiceInt];
}

// Tie: -1
// Win: 1
// Lose: 0

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return -1;
  } else if (
    (playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissort" && computerSelection == "paper")
  ) {
    return 1;
  } else {
    return 0;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let result = playRound(getComputerChoice(), getComputerChoice());
    if (result == 1) {
      playerScore += 1;
    } else if (result == 0) {
      computerScore += 1;
    }
  }
  console.log(playerScore, computerScore);
  if (playerScore > computerScore) {
    return true;
  } else {
    return false;
  }
}
game();
