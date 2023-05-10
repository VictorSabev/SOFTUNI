// Task 10 - Spice Must Flow

function spiceFlow(startingYield) {
  let harvestedAmount = 0;
  let workingDays = 0;
  let currentYield = startingYield;
  const miningCrewDailyConsumption = 26;
  const miningCrewBonus = 26;

  while (currentYield >= 100) {
    workingDays++;
    harvestedAmount += currentYield;

    if (harvestedAmount - miningCrewDailyConsumption < 0) {
      harvestedAmount = 0;
    } else {
      harvestedAmount -= miningCrewDailyConsumption;
    }
    currentYield -= 10;
  }

  if (harvestedAmount - miningCrewDailyConsumption < 0) {
    harvestedAmount = 0;
  } else {
    harvestedAmount -= miningCrewBonus;
  }

  console.log(workingDays);
  console.log(harvestedAmount);
}

spiceFlow(111);
spiceFlow(450);
