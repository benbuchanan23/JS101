function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
myWord = changeMyWord(myWord);  // myWord reassigned to 'HELLO'
console.log(myWord);           //  prints 'HELLO'