// Task 7 - Search for a Number

function searchAndSeekAndDestroy(arrayOfNumbers, parameters) {
  const range = parameters[0];
  const terminationRange = parameters[1];
  const targetNumber = parameters[2];
  let targetNumberCount = 0;

  let newArray = arrayOfNumbers.slice(0, range);
  newArray.splice(0, terminationRange);

  for (let i of newArray) {
    if (i === targetNumber) {
      targetNumberCount++;
    }
  }
  console.log(`Number ${targetNumber} occurs ${targetNumberCount} times.`);
}

searchAndSeekAndDestroy([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchAndSeekAndDestroy([7, 1, 5, 8, 2, 7], [3, 1, 5]);
