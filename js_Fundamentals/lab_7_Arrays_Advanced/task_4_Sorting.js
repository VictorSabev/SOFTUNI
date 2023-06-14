// Task 4 - Sorting

function sorting(array) {
  let copyArray = array.slice(); // we make a copy of the original array because the .sort() method is mutating the original array and it is a good practice not to change it
  let sortedArray = copyArray.sort((a, b) => b - a);
  let newArray = [];

  while (sortedArray.length !== 0) {
    let bigestNumber = sortedArray.shift();
    newArray.push(bigestNumber);
    let smallestNumber = sortedArray.pop();
    newArray.push(smallestNumber);
  }
  console.log(newArray.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
