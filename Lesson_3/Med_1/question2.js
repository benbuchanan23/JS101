/*  ***********  Question 2  *************

  Starting with the string:
let munstersDescription = "The Munsters are creepy and spooky.";

  Return a new string that swaps the case of all of the letters:
*/

let munstersDescription = "The Munsters are creepy and spooky.";

function swapCase(string) {
  let arrayOfCharacters = string.split('');

  let swappedArray = arrayOfCharacters.map(function(letter) {
    if (letter === letter.toUpperCase()) {
      return letter.toLowerCase();
    } else {
      return letter.toUpperCase();
    }
  });
  return swappedArray.join('');
}
console.log(swapCase(munstersDescription));
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`;