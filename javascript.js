// Ask player for their selection and format selection 
let player_selection = prompt("Rock, paper, or scissors?");
player_selection = player_selection.toLowerCase();
let validChoice = false;

if (player_selection !== "rock" || player_selection != "paper" || player_selection != "scissors")
{
    while (validChoice === false)
    {    
        alert("Please pick 'rock', 'paper', or 'scissors'!");
        player_selection = prompt("Rock, paper, or scissors?").toLowerCase;
        
        if (player_selection !== "rock" || player_selection != "paper" || player_selection != "scissors")
        {
            validChoice = true;
        }
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
    

    // Compare player selection to computer selection

    //Declare winner of round 
}