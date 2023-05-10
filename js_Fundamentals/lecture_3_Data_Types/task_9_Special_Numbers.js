// Task 9 - Special Numbers

function specialNumber(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    let numSum = String(i);
    result = 0;
    for (let a = 0; a < numSum.length; a++) {
      result += Number(numSum[a]);
    }
    if (result === 5 || result === 7 || result === 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}

specialNumber(15);
specialNumber(20);
