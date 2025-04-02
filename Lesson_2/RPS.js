const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`==> ${message}`);
}

function displayWinner(yourMove, computerMove) {
  if (yourMove === computerMove) {
    prompt(`Computer also chose ${computerMove}. It's A Tie!`);
  } else if (((yourMove === 'rock') && (computerMove === 'paper')) ||
            ((yourMove === 'paper') && (computerMove === 'scissors')) ||
            ((yourMove === 'scissors') && (computerMove === 'rock'))) {
    prompt(`Computer chose ${computerMove}, ${computerMove} beats ${yourMove}. You Lose!`);
  } else {
    prompt(`Computer chose ${computerMove}, ${yourMove} beats ${computerMove}! ###***** Congratulations- You Win! *****###`);
  }
}

while (true) {
  prompt(`Choose One: ${VALID_CHOICES.join(', ')}`);
  let yourMove = readline.question();

  while (!VALID_CHOICES.includes(yourMove)) {
    prompt("That's not a valid choice.");
    yourMove = readline.question();
  }

  let randomizer = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerMove = (VALID_CHOICES[randomizer]);

  displayWinner(yourMove, computerMove);

  prompt(`Would you like to play again? (y or n)`);
  let playAgain = readline.question().toLowerCase();
  while ((playAgain[0] !== 'y') && (playAgain[0] !== 'n')) {
    prompt(`Please enter a valid response (y or n)`);
    playAgain = readline.question().toLowerCase();
  }

  if (playAgain[0] === 'n') break;
}