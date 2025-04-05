/*  ***************  Question 4  ****************

  What will the following code output?
*/

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
// console.log(arr1.slice());
let arr2 = arr1.slice(); //[{ first: "value1" }, { second: "value2" }, 3, 4, 5];
arr2[0].first = 42;
console.log(arr1); // [{ first: "value1" }, { second: "value2" }, 3, 4, 5];