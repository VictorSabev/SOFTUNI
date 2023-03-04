// Zadacha 5 - Coins

function Demo(input) {
  let changeInLv = Number(input[0]);
  let change = parseInt(changeInLv * 100);
  let numberOfCoins = 0;

  while (change > 0) {
    numberOfCoins++;
    if (change >= 200) {
      change -= 200;
    } else if (change >= 100) {
      change -= 100;
    } else if (change >= 50) {
      change -= 50;
    } else if (change >= 20) {
      change -= 20;
    } else if (change >= 10) {
      change -= 10;
    } else if (change >= 5) {
      change -= 5;
    } else if (change >= 2) {
      change -= 2;
    } else if (change >= 1) {
      change -= 1;
    }
  }
  console.log(numberOfCoins);
}
Demo(['1.23']);
Demo(['2']);
Demo(['0.56']);
Demo(['2.73']);
