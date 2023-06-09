// Task 5 - Process Odd Numbers

function processOddNumber(inputArray) {     
  let oddPositionNumber = inputArray.filter((x, i) => i % 2 !== 0);      
  let doubledNumber = oddPositionNumber.map((x) => x * 2);

  console.log(doubledNumber.reverse().join(' '));
}

processOddNumber([10, 15, 20, 25]);
processOddNumber([3, 0, 10, 4, 7, 3]);

// Alternative solution using all methods at once 

// let result = inputArray.filter((x, i) => i % 2 !== 0).map((x) => x * 2).reverse().join(' ');



// Chaining method - comonly used (best practice)

// let result = inputArray
//   .filter((x, i) => i % 2 !== 0)
//   .map((x) => x * 2)
//   .reverse()
//   .join(' ');