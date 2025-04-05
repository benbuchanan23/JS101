/*  ***********  Question 3  ***********

  Given a number and an array, determine whether the number is included in the array.
*/

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

function containNumber(array, number) {
  if (array.includes(number)) {
    return true;
  }
  return false;
}

console.log(containNumber(numbers, number1));
console.log(containNumber(numbers, number2));