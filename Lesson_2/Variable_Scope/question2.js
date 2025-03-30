let num = 5;            // the variable num is declared and assigned to number 5

function myFunc() {
  console.log(num);    // prints the outer scope variable num (5)
  num = 10;            // num variable is then reassigned to number 10
}

myFunc();            // prints 5 (num is then reassigned to 10)
console.log(num);    // prints 10 (the number that variable num is now assigned)