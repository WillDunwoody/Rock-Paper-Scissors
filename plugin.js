let round = 0;
let playerScore = 0;
let computerScore = 0;

let computerSelection;
let playerSelection;

let playerHand = document.querySelector(".pHand");
let computerHand = document.querySelector(".cHand")

let handText = document.querySelector(".handText p")

//Declaring computers choice
function computerPlay() {
    let arr = ['rock', 'paper', 'scissors'];
    computerSelection = arr[Math.floor(Math.random()*3)]
    computerHand.src = `images/${computerSelection}.png`;
    return computerSelection
}

//Declaration of players choice plus game initialization.
let playerSelect = document.querySelectorAll(".playerSelect button");

    playerSelect.forEach((button) => {

        button.addEventListener('click', function() {
            playerSelection = button.id
            playerHand.src = `images/${playerSelection}.png`;
            playRound(playerSelection)
        });

    });


//Start of round and comparing results.
function playRound(){
    computerPlay();

    round++
    if (playerSelection === "rock" && computerSelection === "scissors") {
        handText.textContent = "Rock beats Scissors";
        playerScore++;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        handText.textContent = "Paper beats Rock";
        computerScore++; 
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        handText.textContent = "Scissors beats Paper";
        playerScore++;  
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        handText.textContent = "Rock beats Scissors";
        computerScore++;   
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        handText.textContent = "Paper beats Rock";
        playerScore++; 
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        handText.textContent = "Scissors beats Paper";
        computerScore++;
    } else {
        handText.textContent = "Tie"; 
    }

    scoreUpdate();
    game();     
}

//function to keep track of score
function scoreUpdate() {
    let pScore = document.querySelector('.playerScore p')
    let cScore = document.querySelector('.computerScore p')
    let rNum = document.querySelector('.round p')
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    rNum.textContent = round;
}

//function to keep track of rounds
    
function game() {
    if (round < 5) {
        return;
    } else if (playerScore > computerScore) {
        handText.textContent = "You Win!!";
        endGame();
    } 
    else if (playerScore < computerScore) {
        handText.textContent = "Sorry You Lost";
        endGame();  
    } else {
        handText.textContent = "Its a Tie!"
        endGame();
    }
}

//function for end game

function endGame() {
    round = 0;
    playerScore = 0;
    computerScore = 0;
}

game();