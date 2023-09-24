// Task 4 - Rotate Array

function rotaryArray(inputArr, rotations) {
  let resultArr = inputArr.slice();
  for (let i = 0; i < rotations; i++) {
    let currentTarget = resultArr.pop();
    resultArr.unshift(currentTarget);
  }
  console.log(resultArr.join(' '));
}

rotaryArray(['1', '2', '3', '4'], 2);
rotaryArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
