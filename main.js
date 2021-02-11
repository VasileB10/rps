function computerPlay() {
  // alegerea calculatorului
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
  // o singura comparare dintre selectia calculatorului si a utilizatorului
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

function game(NoOfRounds) {
  // se apeleaza cu un numar cara da lungimea jocului in runde
  let playerScore = 0;
  let computerScore = 0;
  for (let currentRound = NoOfRounds; currentRound >= 1; currentRound--) {
    let playerPlay = prompt("rock, paper or scissors?").toLowerCase();
    let computer = rpsRound(playerPlay, computerPlay());
    console.log(`${currentRound} rounds to go!`);
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
  console.log("Gata Meciul!");
}
//let numberOfRounds = prompt("Cate runde vrei sa joci?");
