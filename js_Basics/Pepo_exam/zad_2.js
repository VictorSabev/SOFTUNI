// Zadacha 2

function Demo(input) {
  let tshirtPrice = Number(input[0]);
  let target = Number(input[1]);

  let shortsPrice = 0.75 * tshirtPrice;
  let socksPrice = 0.2 * shortsPrice;
  let shoesPrice = 2 * (tshirtPrice + shortsPrice);

  let discount = 0.15;
  let subTotal = shoesPrice + socksPrice + shortsPrice + tshirtPrice;
  let totalSum = subTotal - subTotal * discount;

  let diference = Math.abs(totalSum - target);

  if (totalSum >= target) {
    console.log('Yes, he will earn the world-cup replica ball!');
    console.log(`His sum is ${(totalSum).toFixed(2)} lv.`);
  } else {
    console.log('No, he will not earn the world-cup replica ball.');
    console.log(`He needs ${(diference).toFixed(2)} lv. more.`);
  }
}

Demo(['25', '100']);
console.log('--------------');
Demo(['55', '310']);
console.log('--------------');
Demo(['59.99', '500']);
