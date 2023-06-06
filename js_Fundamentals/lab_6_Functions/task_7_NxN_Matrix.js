// Task 7 - NxN Matrix

function printMatrix(num) {
  //   let row = '';                          // moe reshenie
  //   for (let i = 0; i < num; i++) {
  //     row += num + '';
  //   }

  //   for (let i  = 0; i < num; i++) {
  //     console.log(row);
  //   }
  // }

  let rowGenerator = () => {                    // reshenie s arrow function
    let singleRow = '';
    for (let i = 0; i < num; i++) {
      singleRow += `${num} `;
    }
    return singleRow;
  }

  for (let i = 0; i < num; i++) {
    console.log(rowGenerator());
  }
}
printMatrix(3);
printMatrix(7);
printMatrix(2);
