/*  *************  What will the following code output?  *************

  What will the following code output:
*/

console.log([1, 2, 3] + [4, 5]); // 1, 2, 34, 5

// To Fix:
let arr1 = [1, 2, 3];
let arr2 = [4, 5];

console.log(arr1.concat(arr2)); // [1, 2, 3, 4, 5]