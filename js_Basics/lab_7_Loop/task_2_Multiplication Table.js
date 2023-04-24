// Task 2 - Multiplication Table

function Demo(input) {
  let num = Number(input[0]);

  for (let i = num, a = 1; i <= 10 * num; i += num, a++) {
    console.log(`${a} * ${num} = ${i}`);
  }
}

Demo(['5']);
