// Task 4 - Redecorating

function demo(input) {

  let nylon = Number(input[0]);
  let paint = Number(input[1]);
  let thinner = Number(input[2]);
  let workingHours = Number(input[3]);

  let nylonTotalSum = (nylon + 2) * 1.5;
  let paintTotalSum = paint * 1.1 * 14.5;
  let thinnerTotalSum = thinner * 5;
  let begsPrice = 0.4;

  let totalSumForMaterials = nylonTotalSum + paintTotalSum + thinnerTotalSum + begsPrice;
  let totalSumForWorkers = (totalSumForMaterials* 0.3) * workingHours;
  let finalSum = totalSumForMaterials + totalSumForWorkers;

console.log(nylonTotalSum);
console.log(paintTotalSum);
console.log(thinnerTotalSum);
console.log(finalSum);
}

demo(['10', '11', '4', '8']);