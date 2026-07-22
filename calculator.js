const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate(num1, operator, num2) {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/':
      if (num2 === 0) throw new Error("Cannot divide by zero");
      return num1 / num2;
    default:
      throw new Error("Invalid operator. Use +, -, *, or /");
  }
}

rl.question('Enter first number: ', (x) => {
  rl.question('Enter operator (+, -, *, /): ', (operator) => {
    rl.question('Enter second number: ', (y) => {
      const num1 = parseFloat(x);
      const num2 = parseFloat(y);

      try {
        console.log(`Result: ${calculate(num1, operator, num2)}`);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }

      rl.close();
    });
  });
});