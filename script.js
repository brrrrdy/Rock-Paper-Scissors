// get the computer's choice

function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 0.33) { 
        return 'rock';
    } else if (randomNum < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// get the human's choice and determine the winner

function getHumanChoice() {
    const input = prompt('rock, paper or scissors?').toLowerCase(); // change
    const choices = ['rock', 'paper', 'scissors'];

    if (!choices.includes(input)) { // remove
        alert('Your choice is invalid'); // remove
        return null; // remove
    } // remove
    
    const computerChoice = getComputerChoice();
    alert(`Computer chose: ${computerChoice}`);

    if (input === computerChoice) {
        alert('Draw!');
        return 'draw';
    } else if (
        (input === 'rock' && computerChoice === 'scissors') ||
        (input === 'paper' && computerChoice === 'rock') ||
        (input === 'scissors' && computerChoice === 'paper')
    ) {
        alert('You win!');
        return 'human';
    } else {
        alert('Computer wins!');
        return 'computer';
    }
}

// variables to track scores

let humanScore = 0;
let computerScore = 0;

// Function to play a single round and update the scores

function playRound() {
    const result = getHumanChoice();
    if (result === 'human') {
        humanScore++;
    } else if (result === 'computer') {
        computerScore++;
    }

// Display the current score after each round

    alert(`Score:\nYou: ${humanScore}\nComputer: ${computerScore}`); // remove
}

// Function to play the game for multiple rounds

function playGame() {
    let rounds = parseInt(prompt("How many rounds do you want to play?"));

// Check if the input is a valid number

    if (isNaN(rounds) || rounds <= 0) {
        alert("Please enter a valid number of rounds.");
        return;
    }

// Loop through the number of rounds

    for (let i = 0; i < rounds; i++) {
        playRound();
    }

// Display final score after all rounds

    alert(`Final Score:\nYou: ${humanScore}\nComputer: ${computerScore}`);
}

// Start game

playGame();

module.exports = { getComputerChoice, getHumanChoice };

/*

REQUIREMENT:

- Game can be played by clicking buttons instead of prompt input

SOLUTION:

- Change input to handle button clicks for the three buttons instead of requiring text input.
- Create buttons on html doc
- Create event listener on js doc that call the playRound function with the correct humanChoice.
    event listener should:
        - determine which of the buttons has been selected.
        - pass that choice into playRound.

- No need for validity checker. remove.

REQUIREMENT:

- Display the result tallies on the page instead of as an alert.

SOLUTION:

- Create a div in html for displaying result tallies.
- Display humanscore and computerScore on each.
    pass the value of humanScore and computerScore into the html div using getElementById (https://stackoverflow.com/questions/9341209/pass-a-value-from-javascript-to-html)

- remove score alert.
- retain result of current round as an alert.
- ensure that once the alert has been read and cancelled, focus back on the buttons.



*/
