// Task 1 - Calorie Object

function calorieObject(inputArr) {
  let dataBase = {};
  for (let i = 0; i < inputArr.length; i++) {
    let currentFood = inputArr[i];
    let currentCalories = Number(inputArr[i + 1]);
    if (i % 2 === 0) {
      dataBase[currentFood] = currentCalories;
    }
  }
  console.log(dataBase);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
