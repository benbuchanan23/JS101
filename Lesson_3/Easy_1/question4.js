/*  **********  Question 4  ***********

  Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)
*/


let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let restOfSentence = munstersDescription.toLowerCase().slice(1);
let firstLetter = munstersDescription[0].toUpperCase();

let answer = firstLetter + restOfSentence;

console.log(answer);