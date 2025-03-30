let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords[0] = 'Hi';

console.log(myWords);       // prints ['Hi', 'Goodbye']
console.log(myOtherWords);  // prints ['Hi', 'Goodbye']