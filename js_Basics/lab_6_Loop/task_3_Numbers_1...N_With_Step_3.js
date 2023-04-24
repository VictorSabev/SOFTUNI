// Task 3 - Numbers 1...N with Step 3

function Demo(input) {
  let num = Number(input[0]);

  for (i = 1; i <= num; i += 3) {
    console.log(i);
  }
}

Demo(['10']);
Demo(['7']);
Demo(['15']);
