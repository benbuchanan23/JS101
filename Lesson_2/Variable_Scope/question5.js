let num = 5;

function myFunc(num) {
  num = 10;                 // variable shadowing; parameter of same name 
                            // as global scope var num, blocks inner scope 
                            // access to that variable and therefore assigns
                            // a new inner scope var num to 10.
}

myFunc();
console.log(num);          // prints 5, outer scope num variable