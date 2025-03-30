let num = 1;            // variable num is initialized and assigned to number 1

while (num < 3) {
  num += 1;            // num 1 is passed to while loop (assessed as 1 < 3)
                      // num is reassigned to 2; (num += 1); 2 is passed to 
                      // while loop and assessed as 2 < 3) num is reassigned to 
                      // 3; 3 is no longer < 3 so num is not reassigned. 
                      // Line 11 prints 3 to console. 
}

console.log(num);