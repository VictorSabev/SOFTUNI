// Zadacha 6 - Sum And Product

let a = 0;
let b = 0;
let c = 0;
let d = 0;

function Demo(input) {
  let n = input[0];
  for (a = 1; a <= 9; a++) {
    for (b = 9; b >= a; b--) {
      for (c = 0; c <= 9; c++) {
        for (d = 9; d >= c; d--) {
          if ((a * b * c * d) / (a + b + c + d) / 3 >= 3 && n % 3 === 0) {
            console.log(`${d} ${c} ${b} ${a}`);
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
