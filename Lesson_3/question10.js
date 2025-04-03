/*  *************  Question 10  ***************

  Write a one-line expression to count the number of lower-case t characters in each of the following strings:
*/

let statement1 = "The Flintstones Rock!"; // 2
let statement2 = "Easy come, easy go."; // 0

function displayTCount(string) {
  let counter = 0;
  let array = string.split('');

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 't') {
      counter += 1;
    }
  }
  return counter;
}

console.log(displayTCount(statement1));
console.log(displayTCount(statement2));

// OR 
let tCount = statement1.split('').filter(letter => letter === 't').length;

console.log(tCount);