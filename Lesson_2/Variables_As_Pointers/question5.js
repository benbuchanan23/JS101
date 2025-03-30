let myWords = ['Hello', 'Goodbye'];
let myWord = myWords[0];                // myWord is assigned 'Hello'
myWords[0] = 'Hi';                      // Array is mutated to ['Hi', 'Goodbye']

console.log(myWords);        // prints ['Hi', 'Goodbye']
console.log(myWord);         // prints 'Hello'