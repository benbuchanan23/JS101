/*  **********  How big is the room?  *********
Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.
*/


const readLineSync = require('readline-sync');
const MULTIPLIER = 10.7639

let length = readLineSync.question('Enter the length of the room in meters: ')

let width = readLineSync.question('Enter the width of the room in meters: ')

let areaMeters = (length * width).toFixed(2);
let areaFeet = ((length * width * MULTIPLIER)).toFixed(2);

console.log(`The area of the room is ${areaMeters} square meters (${areaFeet} square feet.`)