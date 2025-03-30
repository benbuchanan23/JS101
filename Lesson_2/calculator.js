// Ask the user for the first number. ***
// Ask the user for the second number. ***
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');
function prompt(message) {
  console.log(`=> ${message}`);
}
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES['welcome']);

while (true) {
  prompt("What is the first number?");
  let first = readline.question();
  
  while (invalidNumber(first)) {
    prompt(MESSAGES['invalidNumber']);
    first = readline.question();
  }
  
  prompt("What is the second number?");
  let second = readline.question();
  
  while (invalidNumber(second)) {
    prompt(MESSAGES['invalidNumber']);
    second = readline.question();
  }
  
  prompt(MESSAGES['operation']);
  let operator = readline.question();
  
  while (!['1', '2', '3', '4'].includes(operator)) {
    prompt("You must choose the numbers: 1, 2, 3, or 4. Don't be a wiseguy!");
    operator = readline.question();
  }
  
  let answer;
  switch (operator) {
    case '1':
      answer = Number(first) + Number(second);
      operator = '+';
      break;
    case '2':
      answer = Number(first) - Number(second);
      operator = '-';
      break;
    case '3':
      answer = Number(first) * Number(second);
      operator = '*';
      break;
    case '4':
      answer = Number(first) / Number(second);
      operator = '/';
      break;
  }
  
  prompt(`The Result is: ${first} ${operator} ${second} = ${answer.toFixed(2)}`);

  prompt(MESSAGES['another']);
  let response = readline.question();

  if (response[0].toLowerCase() !== 'y') {
    console.log(MESSAGES['endGame']);
    break;
  }
}