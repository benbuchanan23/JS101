/*  ***********  Multiples of 3 and 5  ************

  Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

  You may assume that the number passed in is an integer greater than 1.
*/ 

function multisum(integer) {
  let allNumbersArray = []; 

  for (let i = 1; i <= integer; i++) {
    allNumbersArray.push(i); 
  }
  
  let resultsArray = allNumbersArray.filter(function(num) {
    return num % 3 === 0 || num % 5 === 0 
  });

  let sum = resultsArray.reduce(function(accumulator, currentValue) {
    return  accumulator + currentValue;
  }, 0);


  return sum; 
}




console.log(multisum(3)     ===  3); 
console.log(multisum(5)     ===  8);
console.log(multisum(10)    ===  33);
console.log(multisum(1000)  ===  234168);