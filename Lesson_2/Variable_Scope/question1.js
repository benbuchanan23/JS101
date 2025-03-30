let num = 5;          // the number 5 is assigned to the variable num

function myFunc() {
  num = 10;           /* the variable num is accessed from the outer scope 
                         and reassigned to the number 10. */
}

myFunc();               
console.log(num);     /* the number 10 is printed because the outer
                          scope variable num has been reassigned to 10 
                          by the myFunc() function.*/