function getComputerChoice(){
    // Create list of options
    let choices = ["rock","paper","scissors"];

    // Generate a random number between 0 and 2. Number generate corresponds to the index of a specific choice. 
    let result = Math.floor(Math.random() * 3);

    // Pick a choice using a random number and return choice
    let choice = choices[result];
    return choice;
}
