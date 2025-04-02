/*  *************  Arithmetic Integer  **************

  Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

*/
const READLINE = require('readline-sync');
function prompt(message) {
  console.log(`==> ${message}`);
}

prompt('Enter the first number: ');
let num1 = parseFloat(READLINE.question());

prompt('Enter the second number: ');
let num2 = parseFloat(READLINE.question());

prompt(`${num1} + ${num2} = ${num1 + num2}`);
prompt(`${num1} - ${num2} = ${num1 - num2}`);
prompt(`${num1} * ${num2} = ${num1 * num2}`);
prompt(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
prompt(`${num1} % ${num2} = ${num1 % num2}`);
prompt(`${num1} ** ${num2} = ${(num1 ** num2)}`);
