/*  *********  Short Long Short  **************

  Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.
*/

function shortLongShort(str1, str2) {
  let short = str1; 
  let long = str2; 
  
  if (str1.length > str2.length) {
    console.log(`${long}${short}${long}`); 
  } else if (str1.length <= str2.length) {
    console.log(`${short}${long}${short}`);
  }
}


shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"