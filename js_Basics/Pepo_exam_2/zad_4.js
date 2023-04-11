// Zadacha 4 - Gifts from Santa

function Santa(input) {
  let N = Number(input[0]);
  let M = Number(input[1]);
  let S = Number(input[2]);
  let a = '';

  for (let i = M; i >= N; i--) {
    if (i % 2 === 0 && i % 3 === 0) {
      if (i === S) {
        break;
      }
      a += i + ' ';
    }
  }
  console.log(a);
}

Santa(['1', '30', '15']);
console.log('----------------');
Santa(['1', '36', '12']);
console.log('----------------');
Santa(['20', '1000', '36']);
