const readline = require('readline-sync');
const VALID_CHOICES = ['r', 'p', 's', 'l', 'x'];

function prompt(message) {
  console.log(`==> ${message}`);
}

let yourCounter = 0;
let cpuCounter = 0;

function welcome
function displayWinner(yourMove, computerMove) {
  if (yourMove === computerMove) {
    prompt(`Computer also chose ${computerMove}. It's A Tie!`);

  } else if (
    ((yourMove === 'r') && ((computerMove === 'p') || (computerMove === 'x'))) ||
    ((yourMove === 'p') && ((computerMove === 's') || (computerMove === 'l'))) ||
    ((yourMove === 's') && ((computerMove === 'r') || (computerMove === 'x'))) ||
    ((yourMove === 'l') && ((computerMove === 'p') || (computerMove === 'r'))) ||
    ((yourMove === 'x') && ((computerMove === 'l') || (computerMove === 'p')))) {

    prompt(`Computer chose ${computerMove}, ${computerMove} beats ${yourMove}. You Lose!`);
    cpuCounter += 1;
  } else {
    prompt(`Computer chose ${computerMove}, ${yourMove} beats ${computerMove}! ###***** Congratulations- You Win! *****###`);
    yourCounter += 1;
  }
}

function displayGrandChampion(yourCounter, cpuCounter) {
  if (yourCounter === 3) {
    prompt(`Congratulations, you are Grand Champion!`);
  } else if (cpuCounter === 3) {
    prompt(`Sorry, Deep Blue is Grand Champion`);
  }
}

function displayScore(yourCounter, cpuCounter) {
  prompt(`-------------------------------------------------------------------`);
  prompt(`Player Score = ${yourCounter} ||||| DEEP BLUE Score = ${cpuCounter}`);
  prompt(`-------------------------------------------------------------------`);
}

while (true) {

  prompt(`Welcome to the official Rock, Paper, Scissors, Lizard, Spock Game\nFor ease of gameplay please choose one of the following\n\n'r' = Rock\n'p' = Paper\n's' = Scissors\n'l' = Lizard\n'x' = Spock`)
  prompt(`Choose One: ${VALID_CHOICES.join(', ')}`);
  let yourMove = readline.question();

  while (!VALID_CHOICES.includes(yourMove)) {
    prompt("That's not a valid choice.");
    yourMove = readline.question();
  }

  let randomizer = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerMove = (VALID_CHOICES[randomizer]);

  displayWinner(yourMove, computerMove);

  displayScore(yourCounter, cpuCounter);

  if ((yourCounter === 3) || (cpuCounter === 3)) {
    displayGrandChampion(yourCounter, cpuCounter);
    break;
  }

  prompt(`Would you like to play again? (y or n).\nThis is a best of 5 tournament if you exit now DEEP BLUE will be crowned Grand Champion!`);
  let playAgain = readline.question().toLowerCase();
  while ((playAgain[0] !== 'y') && (playAgain[0] !== 'n')) {
    prompt(`Please enter a valid response (y or n)`);
    playAgain = readline.question().toLowerCase();
  }

  if (playAgain[0] === 'n') break;
}