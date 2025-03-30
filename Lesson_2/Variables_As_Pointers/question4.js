let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords = ['Hi', 'Bye'];

console.log(myWords);         // prints ['Hi', 'Bye']
console.log(myOtherWords);    // prints ['Hello', 'Goodbye']