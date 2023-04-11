// Zadacha 3 - Logistics

function Demo(input) {
  let shipmentCount = Number(input[0]);
  let shipmentWeight = Number(input[1]);

  let shippingPrice = 0;
  let costsCount = 0;
  let busCount = 0;
  let truckCount = 0;
  let trainCount = 0;
  let weightCount = 0;

  for (let i = 1; i <= shipmentCount; i++) {
    shipmentWeight = Number(input[i]);

    if (shipmentWeight <= 3) {
      shippingPrice = 200;
      busCount += shipmentWeight;
    } else if (shipmentWeight >= 4 && shipmentWeight <= 11) {
      shippingPrice = 175;
      truckCount += shipmentWeight;
    } else if (shipmentWeight >= 12) {
      trainCount += shipmentWeight;
      shippingPrice = 120;
    }

    costsCount += shippingPrice * shipmentWeight;
    weightCount += shipmentWeight;
  }

  let avgCost = costsCount / weightCount;
  let avgBus = ((busCount / weightCount) * 100).toFixed(2);
  let avgTruck = ((truckCount / weightCount) * 100).toFixed(2);
  let avgTrain = ((trainCount / weightCount) * 100).toFixed(2);

  console.log(avgCost.toFixed(2));
  console.log(`${avgBus}%`);
  console.log(`${avgTruck}%`);
  console.log(`${avgTrain}%`);
}

Demo(['4', '1', '5', '16', '3']);
console.log('-----------------');
Demo(['5', '2', '10', '20', '1', '7']);
