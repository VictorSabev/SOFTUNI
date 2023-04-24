// Task 8 - Circle Area and Perimeter

function Demo(input) {
  let r = Number(input);
  let pi = Math.PI;

  let S = pi * r ** 2;
  let P = 2 * pi * r;

  console.log(S.toFixed(2));
  console.log(P.toFixed(2));
}

Demo(`3`);
console.log('----------');
Demo(`4.5`);
console.log('----------');
Demo('35.875');
