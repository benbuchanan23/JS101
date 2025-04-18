/*  *************  Question 1  **************

  Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

  For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it. The output should start out like this:
*/

function asciiArt(string, num) {
  for (let counter = 0; counter < num; counter++) {
    let totalSpaces = (" ".repeat(counter));
    console.log(`${totalSpaces}${string}`);
  }
}


asciiArt('The Flintstones Rock', 10);
// The Flintstones Rock!
//  The Flintstones Rock!
//   The Flintstones Rock!
//    The Flintstones Rock!
//     ...