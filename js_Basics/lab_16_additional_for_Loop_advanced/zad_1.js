// Zadacha 1 - Back To The Past

function Demo(input) {
  let inhritage = Number(input[0]);
  let dyingYear = Number(input[1]);
  let spendings = 0;

  let IvanchoAge = 18;

  for (let i = 1800; i <= dyingYear; i++) {
    if (i % 2 === 0) {
      spendings += 12000;
    } else {
      spendings += 12000 + 50 * IvanchoAge;
    }
    IvanchoAge++;
  }

  let diference = Math.abs(spendings - inhritage).toFixed(2);

  if (spendings <= inhritage) {
    console.log(`Yes! He will live a carefree life and will have ${diference} dollars left.`);
  } else {
    console.log(`He will need ${diference} dollars to survive.`);
  }
}

Demo(['50000', '1802']);
Demo(['100000.15', '1808']);
