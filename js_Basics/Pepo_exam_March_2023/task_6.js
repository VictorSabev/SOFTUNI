// Task 6 -

function Demo(input) {
  let K = Number(input[0]);
  let L = Number(input[1]);
  let M = Number(input[2]);
  let N = Number(input[3]);

  //for (let o1 = K, i1 = M; i1 <= 8, o1 <= 8; o1++, i1++) {
  //for (let o2 = 9, i2 = 9; i2 >= N, o2 >= L; i2--, o2--) {

  for (let o1 = K; o1 <= 8; o1++) {
    for (let o2 = 9; o2 >= L; o2--) {
      //if (o1 % 2 === 0 && i1 % 2 == 0 && o2 % 2 !== 0 && i2 % 2 !== 0) {
      // console.log(`${o1}${o2} - ${i1}${i2}`);
      console.log(`${o1}${o2}`);
      // }
    }
  }
}

Demo(['7', '6', '8', '5']);
//Demo(['6', '7', '5', '6']);
