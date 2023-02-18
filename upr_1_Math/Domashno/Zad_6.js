// Zadacha 6 - Repainting

function Demo(input) {
  let naylon = Number(input[0]);
  let paint = Number(input[1]);
  let thinner = Number(input[2]);
  let workingHours = Number(input[3]);
  let bags = 0.4;

  let totalMaterialPrice = (naylon + 2) * 1.5 + paint * 1.1 * 14.5 + thinner * 5 + bags;
  let pricePerWorkingHour = totalMaterialPrice * 0.3;
  let totalSum = totalMaterialPrice + pricePerWorkingHour * workingHours;

  console.log(totalSum);
}

Demo(['10', '11', '4', '8']);
Demo(['5', '10', '10', '1']);