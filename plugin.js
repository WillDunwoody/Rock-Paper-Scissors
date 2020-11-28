let round = 0;
let playerScore = 0;
let computerScore = 0;

const playerHand = document.querySelector(".pHand");
const computerHand = document.querySelector(".cHand")

const handText = document.querySelector(".handText")

//Declaring computers choice
function computerPlay() {
    const arr = ['rock', 'paper', 'scissors'];
    let computerSelection = arr[Math.floor(Math.random()*3)]
    computerHand.src = `images/${computerSelection}.png`;
    return computerSelection
}

//Declaration of players choice plus game initialization.
const playerSelect = document.querySelectorAll(".playerSelect button");

    playerSelect.forEach((button) => {
        button.addEventListener('click', function() {
            playerSelection = button.id
            playerHand.src = `images/${playerSelection}.png`;
            computerSelection = computerPlay();
            playRound(playerSelection, computerSelection)
        });
    });

//Start of round and comparing results.
function playRound(){

    round++
    if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "rock")){
        handText.textContent = playerSelection + " beats " + computerSelection;
        playerScore++;
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "rock")
        || (playerSelection === "paper" && computerSelection === "scissors")) {
        handText.textContent = computerSelection + " beats " + playerSelection;
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