// Problem 1 - Cooking Masterclass

function masterChef(input) {
  const budget = input.shift();
  const students = input.shift();
  const flourPricePerPack = input.shift();
  const eggPrice = input.shift();
  const apronPrice = input.shift();

  const flourPerStudent = 1;
  const eggsPerStudent = 10;
  const apronPerStudent = 1;

  let expencesPerStudent = flourPricePerPack * flourPerStudent + eggPrice * eggsPerStudent + apronPrice * apronPerStudent;
  let expencesForAllStudents = expencesPerStudent * students;

  let apronReservePrice = apronPrice * Math.ceil(students * 0.2);
  let totalAmountOfFlour = flourPerStudent * students;
  let flourDiscount = Math.floor(totalAmountOfFlour / 5);

  let totalExpence = expencesForAllStudents - flourDiscount * flourPricePerPack + apronReservePrice;
  let diference = Math.abs(totalExpence - budget);

  if (totalExpence <= budget) {
    console.log(`Items purchased for ${totalExpence.toFixed(2)}$.`);
  } else {
    console.log(`${diference.toFixed(2)}$ more needed.`);
  }
}

masterChef([50, 2, 1.0, 0.1, 10.0]);
masterChef([100, 25, 4.0, 1.0, 6.0]);
masterChef([946, 20, 12.05, 0.42, 27.89]);
