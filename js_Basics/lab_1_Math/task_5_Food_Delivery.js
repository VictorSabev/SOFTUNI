// Task 5 - Food Delivery

function demo(input) {
  let chikenMenus = Number(input[0]);
  let fishMenus = Number(input[1]);
  let vegyMenus = Number(input[2]);

  let chickeMenusFinalSum = chikenMenus * 10.35;
  let fishMenusFinalSum = fishMenus * 12.4;
  let vegyMenusFinalSum = vegyMenus * 8.15;

  let allMenusSum = chickeMenusFinalSum + fishMenusFinalSum + vegyMenusFinalSum;
  let dessertPrice = allMenusSum * 0.2;
  let deliveryPrice = 2.5;

  let totalDeliveryPrice = allMenusSum + dessertPrice + deliveryPrice; 

  console.log(totalDeliveryPrice);
} 

demo(['2', '4', '3']);