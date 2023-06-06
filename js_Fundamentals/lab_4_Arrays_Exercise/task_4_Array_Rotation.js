// Task 4 - Array Rotation

function arrayRotaion(arry, rotationCount) {
  let newArray = arry;
  let counter = 0;

  while (counter < rotationCount) {
    counter++;
    let a = newArray.splice(0, 1);   // alternativno moje d apolzavame .shift() metod 
    newArray.push(a);
  }

  console.log(newArray.join(' '));
}

arrayRotaion([51, 47, 32, 61, 21], 2);
arrayRotaion([32, 21, 61, 1], 4);
arrayRotaion([2, 4, 15, 31], 5);
