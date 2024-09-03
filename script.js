function getComputerChoice () {
    const randomNum = Math.random(); // random number variable between 0 and 1.
    if (randomNum < 0.33) { 
        return 'rock';
    } else if (randomNum < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


function getHumanChoice () {
    const input = prompt('Rock, Paper or Scissors?').toLowerCase();
    const choices = ['rock', 'paper', 'scissors'];

    if (!choices.includes(input)) {
        alert('your choice is invalid');
        return;
    }
    const computerChoice = getComputerChoice();
    alert(`Computer chose: ${computerChoice}`);

    if (input === computerChoice) {
        alert('draw!');     
    } else if (
        (input === 'rock' && computerChoice === 'scissors') ||
        (input === 'paper' && computerChoice === 'rock') ||
        (input === 'scissors' && computerChoice === 'paper')
    ) {
        alert('You win!');
    } else {
        alert('Computer wins!');
    }
}

let humanScore = 0
let computerScore = 0