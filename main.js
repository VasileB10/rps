const variante = ["rock", "paper", "scissors"];
const buton = document.querySelectorAll("button");
const afisareJucator = document.querySelector("#scor-utilizator");
const afisareCalculator = document.querySelector("#scor-calculator");

const playerModal = document.querySelector("#jucator-castiga");
const computerModal = document.querySelector("#calculator-castiga");
const overlay = document.querySelector(".overlay");

let playerScore = 0;
let computerScore = 0;
let rezultat = document.querySelector("#rezultat-runda");

for (let index = 0; index < buton.length; index++) {
  buton[index].addEventListener("click", (i) => {
    rpsRound(getPlayerInput(index), getComputerInput());
  });
}

//inceput functii joc
function getPlayerInput(apasatIndex) {
  return variante[apasatIndex]; // se returneaza valoarea aleasa de jucator
}
function getComputerInput() {
  // alegerea calculatorului
  let computerIndex = Math.floor(Math.random() * 3);
  let computerChoice = variante[computerIndex];
  return computerChoice;
}
function rpsRound(playerSelection, computerSelection) {
  //  comparare dintre selectia calculatorului si a utilizatorului
  if (
    playerSelection === computerSelection &&
    typeof playerSelection == "string"
  ) {
    rezultat.textContent = "Remiza!";
  } else if (
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors")
  ) {
    playerScore += 1;
    afisareJucator.textContent = playerScore;
    rezultat.textContent = "Tu ai castigat runda!";
  } else {
    computerScore += 1;
    afisareCalculator.textContent = computerScore;
    rezultat.textContent = "Calculatorul a castigat runda!";
  }
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      aratareCastigatorJucator();
      setTimeout(aratareCastigatorJucator, 1000);
    } else {
      aratareCastigatorCalculator();
      setTimeout(aratareCastigatorCalculator, 1500);
    }
    playerScore = 0;
    computerScore = 0;
    afisareJucator.textContent = playerScore;
    afisareCalculator.textContent = computerScore;
  }
}
// final functii joc

function aratareCastigatorJucator() {
  playerModal.classList.toggle("ascuns");
  overlay.classList.toggle("ascuns");
}
function aratareCastigatorCalculator() {
  computerModal.classList.toggle("ascuns");
  overlay.classList.toggle("ascuns");
}
