/*  ***********  Question 2  **********
  How can you determine whether a given string ends with an exclamation mark (!)?
*/


let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function endsWithExclamation(string) {
  if (string.at(-1) === '!') {
    return true;
  } else {
    return false;
  }
}

console.log(endsWithExclamation(str1));
console.log(endsWithExclamation(str2));