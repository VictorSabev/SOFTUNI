// Task 1 - Fruit

function groceryCalculator(fruit, amountInGrams, pricePerKilogram) {
  let amountInKG = amountInGrams / 1000;
  let bill = amountInKG * pricePerKilogram;

  console.log(
    `I need $${bill.toFixed(2)} to buy ${amountInKG.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

groceryCalculator('orange', 2500, 1.8);
groceryCalculator('apple', 1563, 2.35);
