// Problem 1 - Computer Store

function computerStore(input) {
  let command = input.shift(); // define command by getting the first element from the array
  let subTotal = 0; //initialize subtotal value
  let endCondition = true;

  if (command === 'regular' || command === 'special') {
    endCondition = false;
  }

  while (endCondition === true) {
    // loop over inpu array
    let productBasePrice = Number(command); // getting products price as number

    if (productBasePrice < 0) {
      // checking if product price is a nagative number
      console.log('Invalid price!');
    } else {
      subTotal += productBasePrice; // adding the value ot products price to the subtotal
    }

    command = input.shift();
    if (command === 'regular' || command === 'special') {
      endCondition = false;
    }
  }

  if (subTotal === 0) {
    console.log('Invalid order!');
    return;
  }

  let taxes = subTotal * 0.2;
  let totalPriceAfterTaxes = subTotal + taxes;
  let discount = 0;

  if (command === 'special') {
    discount = 0.1;
  }

  let finalReceipt = totalPriceAfterTaxes - totalPriceAfterTaxes * discount;

  console.log("Congratulations you've just bought a new computer!");
  console.log(`Price without taxes: ${subTotal.toFixed(2)}$`);
  console.log(`Taxes: ${taxes.toFixed(2)}$`);
  console.log('-----------');
  console.log(`Total price: ${finalReceipt.toFixed(2)}$`);
}

computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);
computerStore(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']);
computerStore(['regular']);
