// Zadacha 4 - Cat Food

function Demo(input) {
  let numberOfCats = Number(input[0]);
  let rations = 0;

  let rationsCount = 0;
  let price = 12.45;
  let smallCatsCount = 0;
  let bigCatsCount = 0;
  let hugeCatsCount = 0;

  for (let i = 1; i <= numberOfCats; i++) {
    rations = Number(input[i]);
    rationsCount += rations;
    if (rations >= 100 && rations < 200) {
      smallCatsCount++;
    } else if (rations >= 200 && rations < 300) {
      bigCatsCount++;
    } else if (rations >= 300 && rations < 400) {
      hugeCatsCount++;
    }
  }

  let totalCost = (rationsCount / 1000) * price;

  console.log(`Group 1: ${smallCatsCount} cats.`);
  console.log(`Group 2: ${bigCatsCount} cats.`);
  console.log(`Group 3: ${hugeCatsCount} cats.`);
  console.log(`Price for food per day: ${totalCost.toFixed(2)} lv.`);
}

Demo(['6', '102', '236', '123', '399', '342', '222']);
console.log('--------------');
Demo(['10', '256', '348', '198', '322', '186', '294', '321', '100', '200', '300']);
console.log('--------------');
Demo(['7', '100', '200', '342', '300', '234', '123', '212']);
