// Task 4 - Clever Lily

function Demo(input) {
  let age = Number(input[0]);
  let washingMachinePrice = Number(input[1]);
  let pricePerToy = Number(input[2]);
  let oddBirthdays = 0;
  let money = 0;
  let currentMoney = 10;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      money += currentMoney;
      currentMoney += 10;
      money--;
    } else {
      oddBirthdays++;
    }
  }

  let toysProfit = pricePerToy * oddBirthdays;
  let totalSavings = money + toysProfit;
  let difference = Math.abs(washingMachinePrice - totalSavings).toFixed(2);

  if (totalSavings >= washingMachinePrice) {
    console.log(`Yes! ${difference}`);
  } else {
    console.log(`No! ${difference}`);
  }
}
Demo(['10', '170.00', '6']);
console.log('-------------------');
Demo(['21', '1570.98', '3']);
