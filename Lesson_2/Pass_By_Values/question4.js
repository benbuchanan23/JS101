function changeMyWords(words) {
  console.log(words);
  words[0] = 'Hi';
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);                // prints ['Hello', 'Goodbye'] reassigns 'Hello' to 'Hi'
console.log(myWords);                 // prints ['Hi', 'Goodbye']