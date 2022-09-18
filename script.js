"use strict";

const pScore = document.querySelector(".player--score");
const cScore = document.querySelector(".computer--score");
const resultElement = document.querySelector(".info--round");
const playerCard = document.querySelector(".player");
const computerCard = document.querySelector(".computer");

function getComputerChoice() {
  const choice = ["rock", "paper", "scissor"];
  const choiceInt = parseInt(Math.random() * 3);
  return choice[choiceInt];
}

function gameOver(winner) {
  if (winner == "player") {
    resultElement.textContent = "Congratulations!! YOU WON THE GAME!!";
  } else {
    resultElement.textContent = "Too bad...You lost...But, You can try again.";
  }
  const btns = document.querySelectorAll(".btn--choice");
  btns.forEach((btn) => {
    btn.classList.add("hidden");
  });
  document.querySelector(".reset").classList.remove("hidden");
}

function resetGame() {
  const btns = document.querySelectorAll(".btn--choice");
  btns.forEach((btn) => {
    btn.classList.remove("hidden");
  });
  document.querySelector(".reset").classList.add("hidden");
  playerScore = 0;
  computerScore = 0;
  roundCount = 0;
  pScore.textContent = 0;
  cScore.textContent = 0;
  document.querySelector(".info--round").textContent = "-";
  document.querySelector(".player--choice").textContent = "-";
  document.querySelector(".computer--choice").textContent = "-";
  document.querySelector(".round--count").textContent = "Round 0";
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
    (playerSelection == "scissor" && computerSelection == "paper")
  ) {
    return 1;
  } else {
    return 0;
  }
}

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
function game(e) {
  roundCount += 1;
  computerCard.classList.remove("won");
  computerCard.classList.remove("lost");
  playerCard.classList.remove("lost");
  playerCard.classList.remove("won");

  let cmChoice = getComputerChoice();
  let plChoice = e.target.getAttribute("data-key").toLowerCase();
  let result = playRound(plChoice, cmChoice);

  document.querySelector(".player--choice").textContent =
    e.target.getAttribute("data-key");
  document.querySelector(".computer--choice").textContent =
    cmChoice.charAt(0).toUpperCase() + cmChoice.slice(1);
  document.querySelector(".round--count").textContent = "Round " + roundCount;
  if (result == 1) {
    // PLAYER WON

    playerScore += 1;
    pScore.textContent = playerScore;
    resultElement.textContent = "You won the round!";
    playerCard.classList.add("won");
    computerCard.classList.add("lost");
  } else if (result == 0) {
    // COMPUTER WON

    computerScore += 1;
    cScore.textContent = computerScore;
    resultElement.textContent = "The computer won this round :(";
    playerCard.classList.add("lost");
    computerCard.classList.add("won");
  } else if (result == -1) {
    // TIE

    resultElement.textContent = "It's a tie.";
  }

  if (playerScore == 5) {
    // console.log("Congratulations! You Won!");
    // resultElement.textConntent = "Congratulations! You won the game!";
    gameOver("player");
  } else if (computerScore == 5) {
    // resultElement.textContent = "Too Bad...The enemy of mankind won...";
    gameOver("computer");
  }
  console.log(
    cmChoice,
    result,
    playerScore,
    computerScore,
    e.target.getAttribute("class")
  );
}

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener(
    "click",
    game
    // console.log(e.target.getAttribute("class"));
  );
});

document.querySelector(".reset").addEventListener("click", resetGame);
