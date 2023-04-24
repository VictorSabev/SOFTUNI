// Task 8 - Fuel Tank - Part 2

function Demo(input) {
  let fuelType = input[0];
  let fuelQuantity = Number(input[1]);
  let clubCard = input[2];

  let clubDiscount = 0;
  let quantityDiscountPercent = 0;
  let fuelPrice = 0;

  // Nujda ot optimizaciq - edna i sahta proverka se izvarshva 2 pati !!!

  switch (fuelType) {
    case 'Gasoline':
      fuelPrice = 2.22;
      break;
    case 'Diesel':
      fuelPrice = 2.33;
      break;
    case 'Gas':
      fuelPrice = 0.93;
      break;
  }

  if (clubCard === 'Yes') {
    switch (fuelType) {
      case 'Gasoline':
        clubDiscount = 0.18;
        break;
      case 'Diesel':
        clubDiscount = 0.12;
        break;
      case 'Gas':
        clubDiscount = 0.08;
        break;
    }
  }

  if (fuelQuantity >= 20 && fuelQuantity <= 25) {
    quantityDiscountPercent = 0.08;
  } else if (fuelQuantity > 25) {
    quantityDiscountPercent = 0.1;
  }

  let subTotal = fuelQuantity * (fuelPrice - clubDiscount);
  let totalCost = subTotal - subTotal * quantityDiscountPercent;

  console.log(`${totalCost.toFixed(2)} lv.`);
}

Demo(['Gas', '30', 'Yes']);
Demo(['Gasoline', '25', 'No']);
Demo(['Diesel', '19', 'No']);
