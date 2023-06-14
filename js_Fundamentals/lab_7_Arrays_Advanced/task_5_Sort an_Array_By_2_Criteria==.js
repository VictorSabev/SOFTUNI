// Task 5 - Sort an Array by 2 Criteria

function sort(inputArray) {
  // let sortedArray = inputArray.sort((a, b) => {
  //   if (a.length !== b.length) {
  //     return a.length - b.length;
  //   }

  //   return a.localeCompare(b);
  // });

  let sortedArray = inputArray.sort((a,b) => {     //  let sortedArray = inputArray.sort((a,b) => a.length - b.length || a.localeCompare(b));
    return a.length - b.length || a.localeCompare(b);  
  }); 

  console.log(sortedArray.join('\n'));
}

sort(['alpha', 'beta', 'gamma']);
sort(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
