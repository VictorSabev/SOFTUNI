// Task 8 - Numbers, Divisible by 9

function Demo(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  let sum = 0;
  let ar = [];

  for (let i = num1; i < num2; i++) {
    if (i % 9 === 0) {
      ar.push(i);
    }
  }

  for (let a = 0; a < ar.length; a++) {
    sum += ar[a];
  }

  console.log(`The sum: ${sum}`);

  for (let i = num1; i < num2; i++) {
    if (i % 9 === 0) {
      console.log(i);
    }
  }
}

Demo(['100', '200']);
