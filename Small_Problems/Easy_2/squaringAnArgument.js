/*  ************  Squaring an Argument  **************

  Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).
*/

function square(num) {
  return num ** 2;
}

//OR

function square(num) {
  return Math.pow(num, 2);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true