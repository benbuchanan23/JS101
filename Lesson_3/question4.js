/*  *************  Question 4  **************

Starting with the string:
let famousWords = "seven years ago...";

show two different ways to put the expected "Four score and " in front of it.
*/

let famousWords = "seven years ago...";
let otherFamousWords = "Four score and ";

let famousWordsArray = famousWords.split(' ');
let otherFamousWordsArray = otherFamousWords.split(' ').reverse();

for (let index = 0; index < otherFamousWordsArray.length; index++) {
  famousWordsArray.unshift(otherFamousWordsArray[index]);
}

console.log(famousWordsArray.join(' '));