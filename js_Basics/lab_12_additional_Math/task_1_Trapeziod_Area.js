// Task 1 - Trapeziod Area

function Demo(input) {
  let index = 0;
  let b1 = Number(input[index]);
  index++;
  let b2 = Number(input[index]);
  index++;
  let h = Number(input[index]);
  index++;

  let S = ((b1 + b2) * h) / 2;
  console.log(S.toFixed(2));
}

Demo(['8', '13', '7']);
