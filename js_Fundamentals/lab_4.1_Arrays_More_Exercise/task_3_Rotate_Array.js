// Task 3 - Rotate Array

function rotateArray(array) {
  const rotation = Number(array[array.length - 1]);
  array.splice(array.length - 1, 1);
  let lastElement;
  let i = 0;

  while (i < rotation) {
    lastElement = array.splice(array.length - 1, 1);
    array.unshift(lastElement);
    i++;
  }

  console.log(array.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
