// Task 7 - Max Sequence of Equal Elements

// chatGPT reshenie

function maxSequence(array) {
  let maxLength = 0;
  let maxStartIndex = 0;
  let currentLength = 1;
  let currentStartIndex = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i - 1]) {
      currentLength++;

      if (currentLength > maxLength) {
        maxLength = currentLength;
        maxStartIndex = currentStartIndex;
      }
    } else {
      currentLength = 1;
      currentStartIndex = i;
    }
  }
  console.log(array.slice(maxStartIndex, maxStartIndex + maxLength));
}

//moe ( greshno reshenie)
// function maxSequence(array) {
//   let counter1 = 0;
//   let counter2 = 0;
//   let newArray = [];
//   let newArray2 = [];

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] === array[i - 1]) {
//       newArray.push(array[i]);
//     }
//   }
//   for (let a = 0; a < newArray.length; a++) {
//     if (newArray[a] === newArray[0]) {
//       newArray2.push(newArray[a]);
//     }
//   }

//   console.log(newArray);
// }

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequence([4, 4, 4, 4]);
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);
