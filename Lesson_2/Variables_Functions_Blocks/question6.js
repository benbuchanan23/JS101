function capitalize(x) {
  return x[0].toUpperCase() + x.slice(1);
}

function exclaim(y) {
  return (y += "!!!");
}

let word = "hello";
let capitalizedWord = capitalize(word); // returns 'Hello'
let exclaimedWord = exclaim(capitalizedWord); //returns 'Hello!!!'

console.log(word);             // prints 'hello'
console.log(capitalizedWord); // prints 'Hello'
console.log(exclaimedWord);  // prints 'Hello!!!'