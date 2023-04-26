// Task 6 - Sum And Product

let input = 0;
let b = 0;
let c = 0;
let d = 0;

function Demo(input) {
  let n = input[0];
  for (input = 1; input <= 9; input++) {
    for (b = 9; b >= input; b--) {
      for (c = 0; c <= 9; c++) {
        for (d = 9; d >= c; d--) {
          if ((input * b * c * d) / (input + b + c + d) / 3 >= 3 && n % 3 === 0) {
            console.log(`${d} ${c} ${b} ${input}`);
            break;
          }
        }
      }
    }
  }
}

Demo(['123']);
Demo(['145']);
Demo(['214']);
