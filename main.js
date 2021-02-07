function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
}

function rpsRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie!";
  }
  if (
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors")
  ) {
    return 3;
  }
  if (
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "rock" && playerSelection === "scissors")
  ) {
    return 4;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let rounds = 5; rounds >= 1; rounds--) {
    let playerPlay = prompt("rock, paper or scissors?").toLowerCase();
    let computer = rpsRound(playerPlay, computerPlay());
    console.log(`${rounds} rounds to go!`);
    switch (computer) {
      case "Tie!":
        console.log("Tie!");
        break;
      case 3:
        playerScore += 1;
        console.log("You Win!");
        break;
      case 4:
        computerScore += 1;
        console.log("You Lose :(");
        break;
    }
    console.log(`${playerScore}-${computerScore}`);
  }
}
game();
