// Task 3 - First and Last K Numbers

// function theHell(array) {                    // My initial solution
//   const k = array[0];
//   let newArrayStart = [];
//   let newArrayEnd = [];

//   newArrayStart = array.slice(1, k + 1);
//   newArrayEnd = array.slice(array.length - k);

//   console.log(newArrayStart.join(' '));
//   console.log(newArrayEnd.join(' '));
// }

function theHell(array) {
  const k = array.shift(0, 1);
  let newArrayStart = [];
  let newArrayEnd = [];

  newArrayStart = array.slice(0, k);
  newArrayEnd = array.slice(array.length - k);

  console.log(newArrayStart.join(' '));
  console.log(newArrayEnd.join(' '));
}

theHell([2, 7, 8, 9]);
theHell([3, 6, 7, 8, 9]);
