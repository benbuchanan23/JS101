/*  *********  Question 3  **********

  Determine whether the following object of people and their age contains an entry for 'Spot':
*/

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(ages.hasOwnProperty('Spot'));
console.log(ages.hasOwnProperty('Herman'));
console.log(Object.values(ages).includes(32));
console.log(Object.keys(ages).includes('Herman'));
