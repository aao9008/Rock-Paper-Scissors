game();

function getPlayerChoice(){
    // Ask for valid input until user complies 

    while (true)
    {    
        console.log("Please pick 'rock', 'paper', or 'scissors'!");

        let player_selection = prompt("Rock, paper, or scissors?");
        player_selection = player_selection.toLowerCase();
        
        if (player_selection === "rock" || player_selection === "paper" || player_selection === "scissors")
        {
            return player_selection;
            break;
        }

        console.log(`"${player_selection}" is not a valid choice!`);
    }
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

function playRound(playerSelection, computerSelection){
    // Compare player selection to computer selection and declare winner
    if (playerSelection === computerSelection){
        console.log(`It's a draw! ${playerSelection} does not beat ${computerSelection}`);
        return "draw";
    }
    
    else if (playerSelection === 'paper' & computerSelection === 'rock'){
        console.log("You Win! Paper beats Rock");
        return "win";
    }

    else if (playerSelection === 'paper' & computerSelection === 'scissors'){
        console.log("You Lose! Scissors beats Paper");
        return "loss";
    }
    else if (playerSelection === 'rock' & computerSelection === 'scissors'){
        console.log("You Win! Rock beats scissors");
        return "win";
    }
    else if (playerSelection === 'rock' & computerSelection === 'paper'){
        console.log("You Lose! Paper beats Rock");
        return "loss";
    }
    else if (playerSelection === 'scissors' & computerSelection === 'paper'){
        console.log("You Win! Scissors beats Paper");
        return "win";
    }
    else if (playerSelection === 'scissors' & computerSelection === 'rock'){
        console.log("You Lose! Rock beats Paper");
        return "loss";
    }
}

function game(){
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++){
        
        // Get computer choice
        let computerChoice = getComputerChoice();
        
        // Get player choice
        let playerChoice = getPlayerChoice();
        
        // Print results of round
        console.log(`Round ${i +1}:`);

        // Play  1 round and print results
        let result = playRound(playerChoice, computerChoice);

        // Keep track of score
        if (result === "win"){
            playerWins++;
        }

        else if (result === "loss"){
            computerWins++;
        }
    }

    if (playerWins > computerWins){
        console.log(`Congratulations! You are the rock, paper, scissors champion! The score was Player: ${playerWins} to Computer: ${computerWins}`);
    }

    if (playerWins < computerWins){
        console.log(`Better luck next time loser! The score was Player: ${playerWins} to Computer: ${computerWins}`);
    }

    else{
        console.log(`No one wins! The score was Player: ${playerWins} to Computer: ${computerWins}`);
    }
}