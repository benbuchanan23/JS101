/*  ***************  Question 7  *****************

  What is the output of the following code?
*/

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(newAnswer); // 50
console.log(answer - 8); // 34