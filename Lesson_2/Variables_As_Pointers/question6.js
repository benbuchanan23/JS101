let myWords = ['Hello', 'Goodbye'];
let myWord = 'Hi';
myWords[0] = myWord;          // Mutates array myWords to ['Hi', 'Goodbye']
myWord = 'Hello';             // myWord reassigned to 'Hello'

console.log(myWords);        // prints ['Hi', 'Goodbye']
console.log(myWord);         // prints 'Hello'