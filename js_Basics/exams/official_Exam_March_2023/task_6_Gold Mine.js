// Task 6 - Gold Mine

function Demo(input) {
  let index = 0;
  let numberOFLocations = Number(input[index]);
  index++;
  let target = Number(input[index]);
  index++;
  let workingDays = Number(input[index]);
  index++;
  let income = 0;
  let incomeCount = 0;
  let avgIncome = 0;
  let diference = 0;

  for (let i = 0; i < numberOFLocations; i++) {
    for (input = 0; input < workingDays; input++) {
      income = Number(input[index]);
      index++;
      incomeCount += income;
    }

    avgIncome = incomeCount / workingDays;
    diference = Math.abs(avgIncome - target);

    if (avgIncome >= target) {
      console.log(`Good job! Average gold per day: ${avgIncome.toFixed(2)}.`);
    } else {
      console.log(`You need ${diference.toFixed(2)} gold.`);
    }
    target = Number(input[index]);
    index++;
    workingDays = Number(input[index]);
    index++;

    incomeCount = 0;
  }
}

Demo(['2', '10', '3', '10', '10', '11', '20', '2', '20', '10']);
Demo(['1', '5', '3', '10', '1', '3']);
