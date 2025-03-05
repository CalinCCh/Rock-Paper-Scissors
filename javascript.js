

let choice;

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    var elements = ["rock","paper","scissors"];
    return elements[Math.floor(Math.random()*3)].toLowerCase();
}

function getHumanChoice() {
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    console.log("You choosed: "+humanChoice+ " || Robot choosed: "+computerChoice);
    if (humanChoice == computerChoice) {
        console.log("Draw!");
    } else if ((humanChoice == "rock" && computerChoice=="paper") || (humanChoice=="paper" && computerChoice=="scissors")
         || (humanChoice=="scissors" && computerChoice=="rock")) {
        console.log("You lose, "+computerChoice+" beats "+humanChoice);
        computerScore++;
    } else {
        console.log("You win!, "+humanChoice+" beats "+computerChoice);
        humanScore++;
    }
}

function playGame() {
    for (let i=0; i<5; i++) {
        choice = prompt("Write your choice: (rock, paper, scissors)");
        playRound(getHumanChoice(),getComputerChoice());
    }
    console.log("SCORES:\nRobot: "+computerScore+"\nYou: "+humanScore);

    if (humanScore>computerScore) {
        console.log("You won the game! Congratulations.")
    } else if (computerScore>humanScore) {
        console.log("You lost to the machine :/")
    } else {
        console.log("Draw! Both have the same score!")
    }
}

playGame();







