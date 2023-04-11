// Zadacha 1 - Oscars ceremony

function Demo(input) {
  let hallRent = Number(input[0]);

  let awardPrice = hallRent - hallRent * 0.3;
  let food = awardPrice - awardPrice * 0.15;
  let soundEfects = 0.5 * food;

  let totalCost = hallRent + awardPrice + food + soundEfects;

  console.log(totalCost.toFixed(2));
}

Demo(['3500']);
Demo(['5555']);
