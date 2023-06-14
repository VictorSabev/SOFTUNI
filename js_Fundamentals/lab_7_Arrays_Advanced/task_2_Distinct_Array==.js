// Task 2 - Distinct Array

// my initial solution

// function removeRepeatedElemetns(numbers) {
//   let newArray = numbers.slice(); // copies the numbers array into newArray
//   for (let i = 0; i < numbers.length; i++) {
//     for (let a = i + 1; a < numbers.length; a++) {
//       if (numbers[i] === numbers[a]) {
//         numbers.splice(a, 1); // Remove the repeated element from newArray
//         a--; // Decrement 'a' to adjust for the modified array length
//       }
//     }
//   }

//   console.log(numbers.join(' '));
// }

// lecturer solution

function removeRepeatedElemetns(numbers) {
  let newArray = [];
  for (let i of numbers) {
    if (!newArray.includes(i)) {
      // if 'i' is NOT included in the new array
      newArray.push(i);
    }
  }
  console.log(newArray.join(' '));
}

removeRepeatedElemetns([1, 2, 3, 4]);
removeRepeatedElemetns([7, 8, 9, 7, 2, 3, 4, 1, 2]);
removeRepeatedElemetns([20, 8, 12, 13, 4, 4, 8, 5]);
