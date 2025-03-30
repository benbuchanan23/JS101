let num = 5;         // variable num is declared and assigned to number 5

function myFunc() {
  let num = 10;     /* a new inner scope var num is declared and assigned to 
                       the number 10.*/
}

myFunc();           // assigns inner scope variable num to 10
console.log(num);   // accesses outer scope variable num (5) and prints 
                    // to console [prints 5]