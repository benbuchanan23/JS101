/*  ***********  Question 9  ***********

  In the previous problem, our first answer added 'Dino' to the array like this:
*/

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino");
// How can we add multiple items to our array? ('Dino' and 'Hoppy')

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push('Dino', 'Hoppy');
flintstones.concat['Dino', 'Hoppy'];
console.log(flintstones);