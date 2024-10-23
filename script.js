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

// Function to get the human's choice and determine the winner
function getHumanChoice(choice) {
    const input = choice.toLowerCase(); // Use the choice from the button click
    const choices = ['rock', 'paper', 'scissors'];

    if (!choices.includes(input)) {
        alert('Your choice is invalid');
        return null; 
    }

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

// Global variables to track scores
let humanScore = 0;
let computerScore = 0;
let roundsLeft = 0;

// Function to play a single round and update the scores
function playRound(humanChoice) {
    const result = getHumanChoice(humanChoice); // Use the human's choice passed from the button click
    if (result === 'human') {
        humanScore++;
    } else if (result === 'computer') {
        computerScore++;
    }

    // Display the current score after each round
    alert(`Score:\nYou: ${humanScore}\nComputer: ${computerScore}`);
}

// Function to play the game for multiple rounds
function playGame() {
    let rounds = parseInt(prompt("How many rounds do you want to play?"));

    // Check if the input is a valid number
    if (isNaN(rounds) || rounds <= 0) {
        alert("Please enter a valid number of rounds.");
        return;
    }

    roundsLeft = rounds;

    const buttons = document.querySelectorAll("button");

    // Ensure event listeners are added once
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (roundsLeft > 0) {
                const choice = button.id; // 'rock', 'paper', or 'scissors'
                playRound(choice); // Play a round with the player's choice
                roundsLeft--;

                // Check if the game is over
                if (roundsLeft === 0) {
                    alert(`Final Score:\nYou: ${humanScore}\nComputer: ${computerScore}`);
                }
            } else {
                alert("The game is over. Please refresh the page to play again.");
            }
        });
    });
}

// Start the game
playGame();
