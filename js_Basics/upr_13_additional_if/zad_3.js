// Zadacha 3 - Harvest

function Demo(input) {
  let index = 0;
  let vineyardS = Number(input[index]);
  index++;
  let grapesPerSM = Number(input[index]);
  index++;
  let wineLitersGoal = Number(input[index]);
  index++;
  let workersNumber = Number(input[index]);
  index++;

  let productionGroundsS = vineyardS * 0.4;
  let grapeHarvest = productionGroundsS * grapesPerSM;
  let wineProduction = grapeHarvest / 2.5;

  let difference = Math.abs(wineLitersGoal - wineProduction);
  let spoilsOfHarvest = Math.ceil(difference / workersNumber);

  if (wineProduction < wineLitersGoal) {
    console.log(`It will be a tough winter! More ${Math.floor(difference)} liters wine needed.`);
  } else {
    console.log(`Good harvest this year! Total wine: ${wineProduction} liters.`);
    console.log(`${Math.ceil(difference)} liters left -> ${spoilsOfHarvest} liters per person.`);
  }
}

Demo(['650', '2', '175', '3']);
Demo(['1020', '1.5', '425', '4']);
