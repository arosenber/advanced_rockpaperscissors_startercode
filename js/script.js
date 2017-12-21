///Class 1:
// Fork and clone the repo and set up your project workspace and link files
// Write HTML for your project
//Class 2:  
// Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
// Practice using console.log() and debugger to debug your code
// Create your document ready function. 
// Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
// Display the user choice to the output screen
//Class 3:  
// Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
// Display the computer choice to the output screen
// Compare the user choice and the computer choice to determine who won. 
// Display the user winner to the output screen 
// Clear the input box for the next choice


// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
const choices = ["rock", "paper", "scissors"];

var shootFn = () => {
    //Takes in User Choice from the input box and stores it in a variable
    const userChoice = $("#input").val().toLocaleLowerCase();

    //Display the user choice to the screen
    $("#userChoice").html(userChoice);

    //Generates a random index uses randomIndex to select random element from the Array
    const computerChoiceIdx = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[computerChoiceIdx];

    //Display the computer choice to the screen
    $("#computerChoice").html(computerChoice);

    const userChoiceIdx = choices.indexOf(userChoice)
    let winner;
    if (userChoiceIdx < 0) {
        // Compares the user's choice to the user choice
        winner = "Computer by Default";
    }
    else if (userChoiceIdx == computerChoiceIdx) {
        winner = "No one Wins!";
    }
    else if (userChoiceIdx + 1 % 3 == computerChoiceIdx) {
        winner = "Computer Wins!";
    }
    else {
        winner = "Human Wins!";
    }

    //Displays the winner choice to the screen
    $("#result").html(winner);

    // Clears the input box
    $("#input").val("");
}

// DOCUMENT READY FUNCTION
$(document).ready(() => {

    //Click Function when shoot is clicked
    $("#shoot").click(shootFn);

});
