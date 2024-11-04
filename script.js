// variables to track scores
let humanScore = 0;
let computerScore = 0;
let rounds = 0;
let currentRound = 0;

// Function to start the game
function startGame() {
    const roundsInput = document.getElementById("roundsInput").value;
    rounds = parseInt(roundsInput);

    // Check if the input is a valid number
    if (isNaN(rounds) || rounds <= 0) {
        alert("Please enter a valid number of rounds.");
        return;
    }

    // Reset scores and round counter
    humanScore = 0;
    computerScore = 0;
    currentRound = 0;

    // Hide input area and show game area
    document.getElementById("inputArea").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
    document.getElementById("gameStatus").textContent = `Round 1 of ${rounds}`;
}

// Function to get the computer's choice
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

// Function to play a single round
function playRound(humanChoice) {
    if (currentRound >= rounds) {
        document.getElementById("gameOverMessage").textContent = "Game over. Please start a new game.";
        return;
    }

    const computerChoice = getComputerChoice();
    let result = '';

    if (humanChoice === computerChoice) {
        result = "Draw!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win this round!";
        humanScore++;
    } else {
        result = "Computer wins this round!";
        computerScore++;
    }

// Update the current round
    currentRound++;

// Display round result and current score
    document.getElementById("gameStatus").textContent = `Round ${currentRound} of ${rounds}: ${result}\nScore: You ${humanScore} - ${computerScore} Computer`;

// Check if the game has ended
if (currentRound === rounds) {
    const finalResult = humanScore > computerScore 
        ? "You win the game!" : humanScore < computerScore ? "Computer wins the game!" : "It's a draw!";

// Display the final score and result on the page
    document.getElementById("gameStatus").textContent = 
        `Final Score:\nYou: ${humanScore} - Computer: ${computerScore}\n${finalResult}`;
    }
}

function resetGame() {
    location.reload();
}

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
