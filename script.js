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
console.log(getComputerChoice());