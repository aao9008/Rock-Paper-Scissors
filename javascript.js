// Select all choice buttons 
const buttons = document.querySelectorAll('.choice');

function getPlayerChoice(){
    // Ask for valid input until user complies 
    buttons.forEach(button => button.addEventListener("click", function(){
        let playerSelection = button.value;
        return playerSelection;
    }));
}

function getComputerChoice(){
    // Create list of options
    let choices = ["rock","paper","scissors"];

    // Generate a random number between 0 and 2. Number generate corresponds to the index of a specific choice. 
    let result = Math.floor(Math.random() * 3);

    // Pick a choice using a random number and return choice
    let choice = choices[result];
    return choice;
}

function playRound(playerSelection){
    let computerSelection = getComputerChoice();

    let playerWins = 0;
    let computerWins = 0;

    // Compare player selection to computer selection and declare winner
    if (playerSelection === computerSelection){
        console.log(`It's a draw! ${playerSelection} does not beat ${computerSelection}`);
    }
    
    else if (playerSelection === 'paper' & computerSelection === 'rock'){
        console.log("You Win! Paper beats Rock");
        playerWins++;
    }

    else if (playerSelection === 'paper' & computerSelection === 'scissors'){
        console.log("You Lose! Scissors beats Paper");
        computerWins++;
    }
    else if (playerSelection === 'rock' & computerSelection === 'scissors'){
        console.log("You Win! Rock beats scissors");
        playerWins++;
    }
    else if (playerSelection === 'rock' & computerSelection === 'paper'){
        console.log("You Lose! Paper beats Rock");
        computerWins++;
    }
    else if (playerSelection === 'scissors' & computerSelection === 'paper'){
        console.log("You Win! Scissors beats Paper");
        playerWins++;
    }
    else if (playerSelection === 'scissors' & computerSelection === 'rock'){
        console.log("You Lose! Rock beats Paper");
        computerWins++;
    }

    // Check for end game conditions 
    if (playerWins = 5){
        console.log(`Congratulations! You are the rock, paper, scissors champion! The score was Player: ${playerWins} to Computer: ${computerWins}`);
    }

    else if (computerWins = 5){
        console.log(`Better luck next time loser! The score was Player: ${playerWins} to Computer: ${computerWins}`);
    }
}
