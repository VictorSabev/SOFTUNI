// Task 2 - Greater Number

function Demo(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  console.log(Math.max(num1, num2));
}

Demo(['5', '3']);
Demo(['3', '5']);
Demo(['10', '10']);
Demo(['-5', '5']);
