// Zadacha 7 - Food Delivery

function Demo(input) {
  let numberOfChikenMenus = Number(input[0]);
  let numberOfFishMenus = Number(input[1]);
  let numberOfVegyMenus = Number(input[2]);
  let deliveryPrice = 2.5;

  let baseFoodPrice = numberOfChikenMenus * 10.35 + numberOfFishMenus * 12.4 + numberOfVegyMenus * 8.15;
  let dessertPrice = baseFoodPrice * 0.2;
  let totalOrderPrice = baseFoodPrice + dessertPrice + deliveryPrice;

  console.log(totalOrderPrice);
}

Demo(['2', '4', '3']);
Demo(['9', '2', '6']);
