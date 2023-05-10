// Task 9 - Gladiator Expenses

function MaximusDecimusMeridius(loses, helmPrice, swordPrice, shieldPrice, armourPrice) {
  let helmRepairsCount = 0;
  let swordReapirsCount = 0;
  let shieldReapirsCount = 0;
  let armourReapirsCount = 0;
  let helmStatus = 1;
  let swordStatus = 1;
  let armourBreak = 0;
  let totalExpenses = 0;

  if (loses === 0) {
  } else {
    for (let i = 1; i <= loses; i++) {
      if (i % 2 === 0) {
        helmRepairsCount++;
        helmStatus = 0;
      }

      if (i % 3 === 0) {
        swordReapirsCount++;
        swordStatus = 0;
      }

      if (helmStatus === 0 && swordStatus === 0) {
        shieldReapirsCount++;
        armourBreak++;
      }

      if (armourBreak === 2) {
        armourReapirsCount++;
      }

      helmStatus = 1;
      swordStatus = 1;
      if (armourBreak === 2) {
        armourBreak = 0;
      }
    }
  }

  totalExpenses = helmPrice * helmRepairsCount + swordPrice * swordReapirsCount + shieldPrice * shieldReapirsCount + armourPrice * armourReapirsCount;
  console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

MaximusDecimusMeridius(7, 2, 3, 4, 5);
MaximusDecimusMeridius(23, 12.5, 21.5, 40, 200);
