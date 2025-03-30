let num = 1;         // global scope var num is assigned to number 1

while (num < 3) {   //  outer scope num is passed into function and 
                    // assessed as 1 < 3 which executes block code
                    // new inner scope variable num is declared and 
                    // assigned to 5; that inner scope var is then 
                    // increased by 1 to 6. However, 6 is not the num
                    // assessed by the while loop it is instead 1, which
                    // is never incremented or reassigned. Therefore, 
                    // resulting in an infinite loop.
  let num = 5;
  num += 1;
}

console.log(num);    // This line is never reached due to infinite while loop