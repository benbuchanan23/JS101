let num = 5;            // variable num is declared and assigned to number 5

function myFunc() {
  console.log(num);     // prints outer scope num (5) to console
  let num = 10;         // new inner scope variable num is assigned to number 10
  
}

myFunc();              // prints 5; declares inner scope num variable to 10
console.log(num);      // prints 5; the outer scope num variable