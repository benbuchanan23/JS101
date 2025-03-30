function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
}

let myWord = 'Hello';
changeMyWord(myWord);  // prints 'Hello'
console.log(myWord);   // prints 'Hello'