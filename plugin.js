let round = 0;
let playerScore = 0;
let computerScore = 0;


function computerPlay() {

    let choice = Math.random();

    if (choice <= 0.33) {
        return "rock";
    }
    else if (choice <= 0.66) {
        return "paper";
    }
    else {
        return "scissors"
    }

}

 function playRound(){

    let playerSelect = prompt();
    let playerSelection = playerSelect.toLowerCase();
    let computerSelection = computerPlay();
    console.log(playerSelection, computerSelection);

    if ((playerSelection === "rock" && computerSelection === "scissors") || 
       (playerSelection === "scissors" && computerSelection === "paper") || 
       (playerSelection === "paper" && computerSelection === "rock")) { 
        playerScore++;
    }
    else if ((playerSelection === "scissors" && computerSelection === "rock") ||
            (playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors")) {
        computerScore++;
    }

    round++
    
}


function game() {
   while (round < 5){
       playRound();
  }
   if (playerScore > computerScore) {
       console.log("You win")
   }
   else if (playerScore < computerScore) {
       console.log("Sorry, you lost")
   }

}

game();
console.log(playerScore, computerScore);