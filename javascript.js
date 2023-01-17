// Select all choice buttons 
const buttons = document.querySelectorAll('.choice');
const results = document.querySelector('.results');
const playerScore = document.querySelector('#player');
const computerScore = document.querySelector('#computer');

// Initialize score board
let playerWins = 0;
let computerWins = 0;

// This event listener will play one round of the game when a choice is clicked on 
buttons.forEach(button =>{
    button.addEventListener('click',function(){
        button.classList.add("clicked");
        playRound(button.value);
    })
});

// This function will disable the buttons once end game conditions have been met. 
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })}

function getComputerChoice(){
    // Create list of options
    let choices = ["rock","paper","scissors"];

    // Generate a random number between 0 and 2. Number generate corresponds to the index of a specific choice. 
    let result = Math.floor(Math.random() * 3);

    // Pick a choice using a random number and return choice
    let choice = choices[result];
    return choice;
}

function playRound(playerChoice){
    let playerSelection = playerChoice;
    let computerSelection = getComputerChoice();

    // Compare player selection to computer selection and declare winner
    if (playerSelection === computerSelection){
        results.textContent = `It's a draw! ${playerSelection} does not beat ${computerSelection}, so no one gets any points!`;
    }
    
    else if (playerSelection === 'paper' & computerSelection === 'rock'){
        results.textContent = "You Win! Paper beats Rock";
        playerWins++;
        playerScore.textContent = playerWins;
    }

    else if (playerSelection === 'paper' & computerSelection === 'scissors'){
        results.textContent = "You Lose! Scissors beats Paper";
        computerWins++;
        computerScore.textContent = computerWins;
    }
    else if (playerSelection === 'rock' & computerSelection === 'scissors'){
        results.textContent = "You Win! Rock beats scissors";
        playerWins++;
        playerScore.textContent = playerWins;

    }
    else if (playerSelection === 'rock' & computerSelection === 'paper'){
        results.textContent = "You Lose! Paper beats Rock";
        computerWins++;
        computerScore.textContent = computerWins;

    }
    else if (playerSelection === 'scissors' & computerSelection === 'paper'){
        results.textContent = "You Win! Scissors beats Paper";
        playerWins++;
        playerScore.textContent = playerWins;

    }
    else if (playerSelection === 'scissors' & computerSelection === 'rock'){
        results.textContent = "You Lose! Rock beats Paper";
        computerWins++;
        computerScore.textContent = computerWins;

    }

    // Check for end game conditions 
    if (playerWins === 5){
        results.textContent = `Congratulations! You are the rock, paper, scissors champion! Reload the page to play again!`;
        disableButtons();
    }

    else if (computerWins === 5){
        results.textContent = `GAME OVER! Better luck next time loser! Reload the page to play again!`;
        disableButtons();
    }
}
