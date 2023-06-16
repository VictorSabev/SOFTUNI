// Problem 1 - Black Flag

function priatesPlunder(input) {
  const raidDuration = Number(input[0]); // in days
  const dailyLoot = Number(input[1]);
  const expectedPlunder = Number(input[2]);

  let totalLoot = 0;

  for (let i = 1; i <= raidDuration; i++) {
    totalLoot += dailyLoot;                 // it is important to keep in mind that 3rd and 5th day may apper together (examo: day 15) 
    if (i % 3 === 0) {
      // every 3rd day
      totalLoot += dailyLoot * 0.5; // loot is increased by 50%
    }

    if (i % 5 === 0) {
      // every 5th day
      totalLoot = totalLoot - totalLoot * 0.3;
    }
  }
   
  let diference = (totalLoot / expectedPlunder) * 100;

  if (totalLoot >= expectedPlunder) {
    console.log(`Ahoy! ${totalLoot.toFixed(2)} plunder gained.`);
  } else {
    console.log(`Collected only ${diference.toFixed(2)}% of the plunder.`);
  }
}

priatesPlunder(['5', '40', '100']);
priatesPlunder(['10', '20', '380']);
