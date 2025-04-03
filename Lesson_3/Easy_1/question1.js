// Will the code below raise an error?

// let numbers = [1, 2, 3];
// numbers[6] = 5;

  /* No, if the 6th index is assigned to 5, the array will increase to 7 elements, with 3 'undefined' elements between 3 and 5
  */

// Bonus
let numbers = [1, 2, 3];
numbers[6] = 5;
console.log(numbers[4]);

// what will this line return?
/* Answer = undefined (the elements between the initial array and 6th index are yet to be defined, hence undefined.)
*/