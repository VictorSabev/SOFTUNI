// Task 2 - Negative or Positive Number

function sortElements(array) {
  let newArray = [];
  for (let i of array) {
    let newElement = Number(i);
    if (newElement < 0) {
      newArray.unshift(i);
    } else {
      newArray.push(i);
    }
  }
  console.log(newArray.join('\n'));
}

sortElements(['7', '-2', '8', '9']);
sortElements(['3', '-2', '0', '-1']); 
