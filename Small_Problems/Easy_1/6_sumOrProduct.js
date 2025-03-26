/*  ***********  Sum or Product of Consecutive Integers  ********

  Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.
*/

const readlineSync = require('readline-sync'); 

let endNumber = parseInt(readlineSync.question('Please enter an integer greater than 0: '));
let sumOrProduct = readlineSync.question(`Enter "s" to compute the sum, or "p" to compute the product. `);

let resultsArray = []; 
for (let i = 1; i <= endNumber; i++) {
  resultsArray.push(i);
}

if (sumOrProduct === 's') { 
  let sum = resultsArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(`${sum}`);
} else if (sumOrProduct === 'p') {
  let product = resultsArray.reduce(
  (accumulator, currentValue) => accumulator * currentValue, 1);
  console.log(`${product}`); 
} else  {
  console.log('Invalid input.');
}




// if (endNumber <= 0) {
//   console.log('Please enter a valid number!');
//   let endNumber = parseFloat(readlineSync.question('Please enter an integer greater than 0: '));
// } 
console.log(sum); 

