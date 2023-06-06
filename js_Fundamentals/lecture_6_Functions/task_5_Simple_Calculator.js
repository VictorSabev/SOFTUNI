// Task 5 - Simple Calculator

function calculator(num1, num2, operator) {
  let result = 0;
  switch (operator) {
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
  }
  console.log(result);
}


calculator(5, 5, 'multiply');
calculator(40, 8, 'divide');
calculator(12, 19, 'add');
calculator(50, 13, 'subtract');
