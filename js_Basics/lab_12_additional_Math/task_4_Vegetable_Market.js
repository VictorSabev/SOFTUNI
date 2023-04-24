// Task 4 - Vegetable Market

function Demo(input) {
  let index = 0;
  let vegyPrice = Number(input[index]);
  index++;
  let fruitPrice = Number(input[index]);
  index++;
  let vegyQuantity = Number(input[index]);
  index++;
  let fruitQuantity = Number(input[index]);
  index++;

  let vegyRevenuInBGN = vegyPrice * vegyQuantity;
  let fruiRevenuInBGN = fruitPrice * fruitQuantity;
  let totalRevenuInBGN = vegyRevenuInBGN + fruiRevenuInBGN;
  let convertRate = 1.94;
  let totalRevenuInEURO = totalRevenuInBGN / convertRate;
  console.log(totalRevenuInEURO.toFixed(2));
}

Demo(['0.194', '19.4', '10', '10']);
Demo(['1.5', '2.5', '10', '10']);
