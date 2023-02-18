// Zadacha 4 - Toy Shop

function Demo(input) {
  let vacationPrice = Number(input[0]);
  let numberOfPuzzles = Number(input[1]);
  let numbrOfTalkingDolls = Number(input[2]);
  let numberOfTeddyBears = Number(input[3]);
  let numberOfMinions = Number(input[4]);
  let numberOfTrucks = Number(input[5]);

  let income =
    numberOfPuzzles * 2.6 +
    numbrOfTalkingDolls * 3 +
    numberOfTeddyBears * 4.1 +
    numberOfMinions * 8.2 +
    numberOfTrucks * 2;
  let numberOfOrderedToys =
    numberOfPuzzles +
    numbrOfTalkingDolls +
    numberOfTeddyBears +
    numberOfMinions +
    numberOfTrucks;
  let discount;
  
  if (numberOfOrderedToys >= 50) {
    discount = 0.25 * income;
  } else {
    discount = 0;
  }
  
  let incomeAfterDiscount = income - discount;
  let rent = 0.1 * incomeAfterDiscount;
  let profit = incomeAfterDiscount - rent;
  
  let spareMoney = Math.abs(profit - vacationPrice).toFixed(2);
    
  if (vacationPrice <= profit) {
    console.log(`Yes! ${spareMoney} lv left.`);
  } else {
    console.log(`Not enough money! ${spareMoney} lv needed.`);
  }
}

Demo(["40.8", "20", "25", "30", "50", "10"]);
Demo(["320", "8", "2", "5", "5", "1"]);
