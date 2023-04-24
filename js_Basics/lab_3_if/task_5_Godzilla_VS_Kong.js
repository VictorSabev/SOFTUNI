// Task 5 - Godzilla vs. Kong

function Demo(input) {
  let filmBudget = Number(input[0]);
  let extrasCount = Number(input[1]);
  let costumePricePerExtra = Number(input[2]);

  let decorPrice = 0.1 * filmBudget;
  let costumeDiscount;
  let totalCostumePrice = costumePricePerExtra * extrasCount;

  if (extrasCount > 150) {
    costumeDiscount = 0.1 * totalCostumePrice;
  } else {
    costumeDiscount = 0;
  }
  let totalProductionCost = totalCostumePrice - costumeDiscount + decorPrice;
  let difference = Math.abs(filmBudget - totalProductionCost).toFixed(2);

  if (totalProductionCost > filmBudget) {
    console.log('Not enough money!');
    console.log(`Wingard needs ${difference} leva more.`);
  } else {
    console.log('Action!');
    console.log(`Wingard starts filming with ${difference} leva left.`);
  }
}

Demo(['20000', '120', '55.5']);
Demo(['15437.62', '186', '57.99']);
Demo(['9587.88', '222', '55.68']);
