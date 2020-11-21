let round = 0;
let playerScore = 0;
let computerScore = 0;
let handText = document.querySelector(".handText p")
let computerSelection;
let playerHand = document.querySelector(".pHand");
let computerHand = document.querySelector(".cHand")

//Declaring computers choice
function computerPlay() {
    let arr = ['rock', 'paper', 'scissors'];
    let choice = arr[Math.floor(Math.random()*3)]
    return choice;
}

//Declaration of players choice plus game initialization.
let playerSelection = document.querySelectorAll(".playerSelect button");

    playerSelection.forEach((button) => {

        button.addEventListener('click', function() {
            playerSelection = button.id
            computerSelection = computerPlay();
            console.log(playerSelection, computerSelection)
            playerHand.src = `./images/${playerSelection}.png`;
            computerHand.src = `./images/${computerSelection}.png`;

            playRound(playerSelection, computerSelection)
        });

    });


//Start of round and comparing results.
function playRound(){

    if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "scissors" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "rock")) { 
        handText.textContent = "Player Wins!"
        playerScore++;
        scoreUpdate();
        }
    else if ((playerSelection === "scissors" && computerSelection === "rock") ||
            (playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors")) {
                handText.textContent = "Computer Wins!"
        computerScore++;
        scoreUpdate();
    }

    round++
    Game()     
}

function scoreUpdate() {
    let pScore = document.querySelector('.playerScore p')
    let cScore = document.querySelector('.computerScore p')
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
}
    
function Game() {
    if (round < 5) {
        return
    }
    else if (playerScore > computerScore) {
        console.log("You win");
    } 
    else (computerScore > playerScore) 
        console.log("You lose");
    
}

Game();