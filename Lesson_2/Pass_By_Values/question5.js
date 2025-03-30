
function changeMyWords(words) {
  console.log(words);
  words = ['Hi', 'Goodbye'];
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);                 // prints ['Hello', 'Goodbye']
console.log(myWords);                  // prints ['Hi', 'Goodbye']