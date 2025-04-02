const READLINE = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}
prompt('What is your name?');
let name = READLINE.question();

if (name.at(-1) === '!') {
  name = name.toUpperCase().slice(0, -1);
  console.log(`HELLO ${name}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
