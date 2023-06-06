// Task 1 - Print N-th Element

function printElement(array) {
  let newArray = [];
  const step = Number(array[array.length - 1]);
  for (let i = 0; i < array.length - 1; i += step) {
    newArray.push(array[i]);
  }
  console.log(newArray.join(' '));
}

printElement(['5', '20', '31', '4', '20', '2']);
printElement(['dsa', 'asd', 'test', 'test', '2']);
printElement(['1', '2', '3', '4', '5', '6']);
