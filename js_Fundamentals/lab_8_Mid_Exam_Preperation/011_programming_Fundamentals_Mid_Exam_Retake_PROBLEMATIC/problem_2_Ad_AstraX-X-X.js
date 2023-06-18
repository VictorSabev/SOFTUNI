// Problem 2 - Ad Astra

function foodManager(input) {
  let inputArray = input.shift().split(/[|#]/g).filter(Boolean);
  let validFood = [];
  for (let i = 0; i < inputArray.length; i++) {
    let firstInput = inputArray[i];
    let firstInputChar = firstInput.toUpperCase().charCodeAt();
    let secondInput = inputArray[i + 1];
    let thirdInput = Number(inputArray[i + 2]);

    if ((firstInputChar >= 60 && firstInputChar <= 90) || firstInputChar === 32) {
      const regex = /^\d{2}\/\d{2}\/\d{2}$/;
      if (regex.test(secondInput)) {
        if (!isNaN(thirdInput)) {
          validFood.push(firstInput, secondInput, thirdInput);
        }
      }
    }
  }

  let totalCaloriesInFood = 0;
  const caloriesPerDayNeeded = 2000;

  for (let a = 0; a < validFood.length; a = a + 3) {
    let calories = validFood[a + 2];
    totalCaloriesInFood += calories;
  }

  let daysLast = Math.floor(totalCaloriesInFood / caloriesPerDayNeeded);

  console.log(`You have food to last you for: ${daysLast} days!`);
  for (let a = 0; a < validFood.length; a = a + 3) {
    let foodType = validFood[a];
    let expDate = validFood[a + 1];
    let calories = validFood[a + 2];
    console.log(`Item: ${foodType}, Best before: ${expDate}, Nutrition: ${calories}`);
  }
}

foodManager(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
console.log('-------');
foodManager(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
console.log('-------');
foodManager(['Hello|#Invalid food#19/03/20#450|$5*(@']);
