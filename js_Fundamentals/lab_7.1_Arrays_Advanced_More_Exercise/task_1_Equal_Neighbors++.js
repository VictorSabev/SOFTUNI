// Task 1 - Equal Neighbors

function equalNeighbors(matrix) {
  // Chat GPT solution
  let pairsCounter = 0;

  // Iterate over each row
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];

    // Iterate over each element in the row
    for (let j = 0; j < row.length; j++) {
      let currentElement = row[j];

      // Check right neighbor
      if (j < row.length - 1 && currentElement === row[j + 1]) {
        pairsCounter++;
      }

      // Check bottom neighbor
      if (i < matrix.length - 1 && currentElement === matrix[i + 1][j]) {
        pairsCounter++;
      }
    }
  }

  console.log(pairsCounter);
}

// alternative chatGPT solution

// function equalNeighbors(matrix) {
//   let pairsCounter = 0;

//   matrix.forEach((row, i) => {
//     row.forEach((currentElement, j) => {
//       if (j < row.length - 1 && currentElement === row[j + 1]) {
//         pairsCounter++;
//       }

//       if (i < matrix.length - 1 && currentElement === matrix[i + 1][j]) {
//         pairsCounter++;
//       }
//     });
//   });

//   return pairsCounter;
// }

equalNeighbors([
  ['2', '3', '4', '7', '0'],
  ['4', '0', '5', '3', '4'],
  ['2', '3', '5', '4', '2'],
  ['9', '8', '7', '5', '4'],
]);
equalNeighbors([
  ['test', 'yo', 'yo', 'ho'],
  ['well', 'done', 'no', '6'],
  ['not', 'done', 'yet', '5'],
]);
equalNeighbors([
  ['2', '2', '5', '7', '4'],
  ['4', '0', '5', '3', '4'],
  ['2', '5', '5', '4', '2'],
]);
