// Task 1 - Even Position Elements

function evenPosition(inputArr) {
  let resultArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (i % 2 === 0) {
      resultArr.push(inputArr[i]);
    }
  }
  console.log(resultArr.join(' '));
}

evenPosition(['20', '30', '40', '50', '60']);
evenPosition(['5', '10']);
