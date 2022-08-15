"use script";

function getComputerChoice() {
  let choice = parseInt(Math.random(1, 3) * 3);
  let play = ["rock", "paper", "scissor"];
  return play[choice];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection.toLowerCase() == computerSelection) {
    return "tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissor" && computerSelection == "paper")
  ) {
    return "won";
  } else {
    return "lose";
  }
}

function printResult(playerWon, playerSelection, computerSelection) {
  if (playerWon) {
    return `You Win! ${playerSelection[0].toUpperCase()}${playerSelection.slice(
      1
    )} beats ${computerSelection[0].toUpperCase()}${computerSelection.slice(
      1
    )}`;
  }
  return `You Lose! ${computerSelection[0].toUpperCase()}${computerSelection.slice(
    1
  )} beats ${playerSelection[0].toUpperCase()}${playerSelection.slice(1)}`;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let playerSelection;
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Write your choice:");
    let computerSelection = getComputerChoice();
    let round = playRound(playerSelection, computerSelection);
    if (round == "won") {
      playerScore += 1;
      console.log(printResult(true, playerSelection, computerSelection));
    } else if (round == "lose") {
      computerScore += 1;
      console.log(printResult(false, playerSelection, computerSelection));
    } else {
      i -= 1;
      console.log("It's a tie");
    }
  }

  if (playerScore > computerScore) {
    return "Congratulations! You won the game!";
  } else if (playerScore < computerScore) {
    return "Better luck next time! The computer won this time round";
  } else {
    return "It's a tie!";
  }
}

console.log(game());
