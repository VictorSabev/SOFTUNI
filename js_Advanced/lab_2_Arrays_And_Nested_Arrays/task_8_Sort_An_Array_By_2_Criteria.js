// Task 8 - Sort an Array by 2 Criteria

function sortBy2Criteria(inputArr) {
  // inputArr.sort((a, b) => {
  //   if (a.length === b.length) {
  //     return a.localeCompare(b);
  //   } else {
  //     return a.length - b.length;
  //   }
  // });

  inputArr.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b);
  });

  console.log(inputArr.join('\n'));
}

sortBy2Criteria(['alpha', 'beta', 'gamma']);
sortBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortBy2Criteria(['test', 'Deny', 'omen', 'Default']);
