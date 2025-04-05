/*  *********  Question 1  ***********

  Write three different ways to remove all of the elements from the following array:
*/

let numbers = [1, 2, 3, 4];

// while (numbers[0] !== undefined) {
//   numbers.pop();
//   console.log(numbers.length);
// }

// // OR

// while (numbers[0] !== undefined) {
//   numbers.shift();
// }

// OR

// numbers.splice(0, numbers.length);
// console.log(numbers);

// OR

numbers.length = 0;
console.log(numbers);