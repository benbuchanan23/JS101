function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';                    // 'Hello'
let myOtherWord = changeMyWord(myWord);  // prints 'Hello' return "HELLO"
console.log(myWord);                     // 'Hello'
console.log(myOtherWord);                // 'Hello', 'HELLO'