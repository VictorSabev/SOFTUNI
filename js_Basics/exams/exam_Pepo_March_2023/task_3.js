// Task 3 - 

function Demo(input) {
  let shipmentWeight = Number(input[0]);
  let serviceType = input[1];
  let distance = Number(input[2]);

  let shippinPrice = 0;
  let overprice = 0;

  switch (serviceType) {
    case 'standard':
      if (shipmentWeight < 1) {
        shippinPrice = 3;
      } else if (shipmentWeight >= 1 && shipmentWeight < 10) {
        shippinPrice = 5;
      } else if (shipmentWeight >= 10 && shipmentWeight < 40) {
        shippinPrice = 10;
      } else if (shipmentWeight >= 40 && shipmentWeight < 90) {
        shippinPrice = 15;
      } else if (shipmentWeight >= 90 && shipmentWeight < 150) {
        shippinPrice = 20;
      }
      break;
    case 'express':
      if (shipmentWeight < 1) {
        shippinPrice = 3;
        overprice = 0.8;
      } else if (shipmentWeight >= 1 && shipmentWeight < 10) {
        shippinPrice = 5;
        overprice = 0.4;
      } else if (shipmentWeight >= 10 && shipmentWeight < 40) {
        shippinPrice = 10;
        overprice = 0.05;
      } else if (shipmentWeight >= 40 && shipmentWeight < 90) {
        shippinPrice = 15;
        overprice = 0.02;
      } else if (shipmentWeight >= 90 && shipmentWeight < 150) {
        shippinPrice = 20;
        overprice = 0.01;
      }
      break;
  }

  let totalCost = (distance * shippinPrice + shipmentWeight * overprice * shippinPrice * distance) / 100;

  console.log(`The delivery of your shipment with weight of ${shipmentWeight.toFixed(3)} kg. would cost ${totalCost.toFixed(2)} lv.`);
}

Demo(['1.5', 'standard', '100']);
Demo(['87', 'express', '130']);
Demo(['20', 'standard', '349']);
