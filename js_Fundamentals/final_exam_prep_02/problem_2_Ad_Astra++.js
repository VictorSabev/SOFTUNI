// Problem 2 - Ad Astra

function foodSupplies(input) {
  const text = input.shift();
  const caloriesPerDay = 2000;

  const pattern =
    /(\||#)(?<food>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,4})\1/g;

  //The second for...of loop is not printing any results because the matches iterator has already been fully consumed in the first for...of loop. Once an iterator is iterated over entirely, it cannot be used again unless it is reset.

  // In the first for...of loop, the matches iterator is used to calculate the totalCalories, and during this process, it iterates through all the matches in the text string. By the time the first loop completes, the iterator reaches the end of its sequence, and there are no more matches left to iterate over.

  // When the second for...of loop is encountered, the matches iterator has already reached its end, so there are no matches to iterate over again. As a result, the loop doesn't execute any iterations, and no output is printed to the console within that loop.

  // To fix this issue and print the results in the console, you can store the matches in an array before iterating over them to calculate the totalCalories. Then, you can use this array to iterate over the matches again in the second for...of loop. Here's how you can do that:

  let matches = Array.from(text.matchAll(pattern)); // WTF?!
  let totalCalories = 0;

  for (const match of matches) {
    let caloriesPerFood = match.groups.calories;
    totalCalories += Number(caloriesPerFood);
  }

  let daysSurviving = Math.floor(totalCalories / caloriesPerDay);
  console.log(`You have food to last you for: ${daysSurviving} days!`);

  for (let match of matches) {
    console.log(
      `Item: ${match.groups.food}, Best before: ${match.groups.date}, Nutrition: ${match.groups.calories}`
    );
  }
}

foodSupplies([
  '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500|| Not right|6.8.20|5|',
]);
console.log('----------');
foodSupplies([
  '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|',
]);
console.log('----------');
foodSupplies(['Hello|#Invalid food#19/03/20#450|$5*(@']);
