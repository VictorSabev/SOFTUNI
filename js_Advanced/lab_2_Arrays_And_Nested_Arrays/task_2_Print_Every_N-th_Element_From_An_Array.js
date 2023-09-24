// Task 2 - Print every N-th Element from an Array

function printer(inputArr, num) {
  let resultArr = [];
  for (let i = 0; i < inputArr.length; i += num) {
    resultArr.push(inputArr[i]);
  }
  return resultArr;
}

printer(['5', '20', '31', '4', '20'], 2);
printer(['dsa', 'asd', 'test', 'tset'], 2);
printer(['1', '2', '3', '4', '5'], 6); 
