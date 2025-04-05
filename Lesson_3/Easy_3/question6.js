/*  *************  Question 6  **************

  Examine the following code carefully. Can you identify all of the variables, primitive values, and objects that exist when this code executes?
*/

let arr = [1, 2, 3];
let newArr = arr;

const num = arr[0];
let newNum = num;

function double(num) {
  return num * 2;
}

double(newNum);

/* Objects:
    arr = [1, 2, 3];
    newArr = [1, 2, 3];

  Primitives:
    num = 1;
    newNum = 1;

function double(1) ==> 2
*/