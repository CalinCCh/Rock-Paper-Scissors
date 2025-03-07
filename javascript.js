let choice;

let humanScore = 0;
let computerScore = 0;

const results = document.querySelector("#results");
const finalResults = document.querySelector("#finalResults");
const humanScoreTxt = document.querySelector("#humanScore");
const computerScoreTxt = document.querySelector("#computerScore");


const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", () => {
    choice="rock";
    playRound(getHumanChoice(),getComputerChoice());

});

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", () => {
    choice="paper";
    playRound(getHumanChoice(),getComputerChoice());
});

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", () => {
    choice="scissors";
    playRound(getHumanChoice(),getComputerChoice());

});



function getComputerChoice() {
  var elements = ["rock", "paper", "scissors"];
  return elements[Math.floor(Math.random() * 3)].toLowerCase();
}

function getHumanChoice() {
  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  let result;
  let chooses =  "You choosed: " + humanChoice + " <br><br> Robot choosed: " + computerChoice
  if (humanChoice == computerChoice) {
    result = "Draw!";
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    computerScore++;
    result = "\nYou lose, " + computerChoice + " beats " + humanChoice;
  } else {
    humanScore++;
    result = "\nYou win!, " + humanChoice + " beats " + computerChoice;
  }
  results.innerHTML=chooses+"<br><br>"+result;
  if (humanScore==5) {
    finalResults.innerHTML = "<br>You won. Congratz!";
    humanScore=0;
    computerScore=0;

  } else if (computerScore==5) {
    finalResults.innerHTML = "<br>You lost. :/";
    humanScore=0;
    computerScore=0;
  }
  humanScoreTxt.textContent="Human: "+humanScore;
  computerScoreTxt.textContent="Robot: "+computerScore;
}




