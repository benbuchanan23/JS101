function isOdd(number) {
  return number % 2 !== 0 ? true : false;
}

// OR use Math.abs(number) if negative numbers are involved

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true