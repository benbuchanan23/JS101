const READLINE = require('readline-sync');

function isInvalidNumber(number) {
  return Number(number) < 0 ||
         Number.isNaN(Number(number));
}

console.log('_____Welcome to the Mortgage Calculator_____');

while (true) {
  console.log('--------------------------------------------');

  let loanAmount = parseFloat(READLINE.question('Enter the loan amount:\n    $'));
  while (isInvalidNumber(loanAmount)) {
    console.log('!INVALID RESPONSE: Please enter a positive number!');
    loanAmount = parseFloat(READLINE.question('Loan amount: \n     $'));
  }
  
  let apr = parseFloat(READLINE.question('Annual Percentage Rate (APR):\n(Example: 5 for 5% or 2.5 for 2.5%):\n     %: '));
  while (isInvalidNumber(apr)) {
    console.log('!!!INVALID RESPONSE: Please enter a positive percentage!!!');
    apr = parseFloat(READLINE.question('Enter the Annual Percentage Rate (APR):/n   Example: 5 for 5% or 2.5 for 2.5%: \n     %: '));
  }
  
  let loanDuration = parseFloat(READLINE.question('Loan duration (years): \n     '));
  while (isInvalidNumber(loanDuration)) {
    console.log('!!!INVALID RESPONSE: Please enter a positive number!!!');
    loanDuration = parseFloat(READLINE.question('Loan duration (years):\n     '));
  }
  
  let monthlyAPR = ((apr / 100) / 12);
  let monthlyLoanDuration = (loanDuration * 12);
  
  let m = loanAmount * (monthlyAPR / (1 - Math.pow((1 + monthlyAPR),   (-monthlyLoanDuration)))); //// m = monthly payment
  
  let monthlyPayment = `$${m.toFixed(2)}`;
  console.log('--------------------------------------------');
  console.log(`Your monthly payment comes out to\n   ${monthlyPayment}\n`);
  console.log('--------------------------------------------');
  
  console.log('Would you like to calculate another Monthly Payment Plan?\n     ');
  let another = READLINE.question().toLowerCase();
  while (another[0] !== 'y' && another[0] !== 'n') {
    console.log('!!!INVALID RESPONSE: Please enter y or n !!!');
    another = READLINE.question().toLowerCase();
  }

  if (another[0] === 'n') break;
}