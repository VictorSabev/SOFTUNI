// Task 3 - Merge Arrays

function mergingArrays(arr1, arr2) {
  let arr1Length = arr1.length;
  let newArray = [];

  for (let i = 0; i < arr1Length; i++) {
    if (i % 2 === 0) {
      newArray.push(Number(arr1[i]) + Number(arr2[i]));
    } else {
      newArray.push(arr1[i] + arr2[i]);
    }
  }
  console.log(newArray.join(' - '));
}

mergingArrays(
  ['5', '15', '23', '56', '35'],

  ['17', '22', '87', '36', '11']
);
mergingArrays(
  ['13', '12312', '5', '77', '4'],

  ['22', '333', '5', '122', '44']
);
