// Task 2 - Common Elements

function commonElements(arr1, arr2) {
  for (let i of arr1) {
    for (let a of arr2)
      if (i === a) {
        console.log(i);
      }
  }
}

commonElements(
  ['Hey', 'hello', 2, 4, 'Peter', 'e'],

  ['Petar', 10, 'hey', 4, 'hello', '2']
);
commonElements(
  ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],

  ['s', 'o', 'c', 'i', 'a', 'l']
);
