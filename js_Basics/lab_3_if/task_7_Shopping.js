// Task 7 - Shopping

function Demo(input) {
  let budget = Number(input[0]);
  let videoCardsNumber = Number(input[1]);
  let CPUsNumber = Number(input[2]);
  let RAMsNumber = Number(input[3]);

  let videoCardsUnitPrice = 250;
  let videoCardsTotalCost = videoCardsUnitPrice * videoCardsNumber;
  let CPUsUnitPrice = videoCardsTotalCost * 0.35;
  let CPUsTotalCost = CPUsUnitPrice * CPUsNumber;
  let RAMsUnitPrice = videoCardsTotalCost * 0.1;
  let RamsTotalCost = RAMsUnitPrice * RAMsNumber;
  let totalSumWihitoutDiscount = videoCardsTotalCost + CPUsTotalCost + RamsTotalCost;
  let discount;

  if (videoCardsNumber > CPUsNumber) {
    discount = totalSumWihitoutDiscount * 0.15;
  } else {
    discount = 0;
  }

  let totalSum = totalSumWihitoutDiscount - discount;
  let spareMoney = (budget - totalSum).toFixed(2);
  let insufficientFunds = (totalSum - budget).toFixed(2);

  if (budget >= totalSum) {
    console.log(`You have ${spareMoney} leva left!`);
  } else {
    console.log(`Not enough money! You need ${insufficientFunds} leva more!`);
  }
}

Demo(['900', '2', '1', '3']);
Demo(['920.45', '3', '1', '1']);
