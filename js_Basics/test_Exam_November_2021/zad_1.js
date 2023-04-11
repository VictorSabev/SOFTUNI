// Zadacha 1 - Oscars ceremony

function Demo(input) {
  let hallPrice = Number(input[0]);

  let rewardPrice = hallPrice - hallPrice * 0.3;
  let foodPrice = rewardPrice - rewardPrice * 0.15;
  let soundPrice = 0.5 * foodPrice;

  let totalCosts = rewardPrice + foodPrice + soundPrice + hallPrice;

  console.log(totalCosts.toFixed(2));
}

Demo(['3500']);
Demo(['5555']);
