// Task 4 - Last K Numbers Sequence

function sumLastKSequence(n, k) {
  // Lecturer solution

  const firstElement = 1;
  const sequenceLength = n;
  let resultArray = [firstElement];

  for (let i = 1; i < sequenceLength; i++) {
    let index = Math.max(resultArray.length - k, 0);

    let lastElements = resultArray.slice(index);
    let sum = 0;
    for (let i of lastElements) {
      sum += i;
    }
    resultArray.push(sum);
  }
  console.log(resultArray.join(' '));
}

sumLastKSequence(6, 3);
sumLastKSequence(8, 2);
